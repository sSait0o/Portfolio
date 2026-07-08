// Cloudflare Worker: relays a "portfolio visited" ping to a Discord webhook.
// Deploy with `wrangler deploy`. Requires:
//   - secret DISCORD_WEBHOOK_URL (wrangler secret put DISCORD_WEBHOOK_URL)
//   - var ALLOWED_ORIGINS set to a comma-separated list of allowed origins
//     (e.g. https://username.github.io,http://localhost:5173)

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin, env) });
    }

    if (request.method !== "POST" || !isAllowedOrigin(origin, env)) {
      return new Response("Not found", { status: 404 });
    }

    let body = {};
    try {
      body = await request.json();
    } catch {
      // ignore malformed body, still notify with defaults
    }

    const path = typeof body.path === "string" ? body.path.slice(0, 200) : "/";
    const referrer = typeof body.referrer === "string" ? body.referrer.slice(0, 200) : "direct";
    const country = request.headers.get("CF-IPCountry") || "??";

    await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "👀 Nouvelle visite du portfolio",
            color: 0x5865f2,
            fields: [
              { name: "Page", value: path, inline: true },
              { name: "Pays", value: country, inline: true },
              { name: "Provenance", value: referrer || "direct", inline: false },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
  },
};

function isAllowedOrigin(origin, env) {
  if (/^http:\/\/localhost:\d+$/.test(origin)) return true;
  return env.ALLOWED_ORIGINS.split(",").includes(origin);
}

function corsHeaders(origin, env) {
  return {
    "Access-Control-Allow-Origin": isAllowedOrigin(origin, env) ? origin : "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
