const WORKER_URL = import.meta.env.VITE_VISIT_WEBHOOK_URL;

// Fires once per browser session so refreshes/scrolling don't spam the webhook.
export function trackVisit() {
  if (!WORKER_URL || sessionStorage.getItem("visit-tracked")) return;
  sessionStorage.setItem("visit-tracked", "1");

  fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      path: window.location.pathname,
      referrer: document.referrer,
    }),
    keepalive: true,
  }).catch(() => {});
}
