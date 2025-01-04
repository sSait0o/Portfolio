gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".about h1",
  {
    y: 80,

    opacity: 0, // Valeur initiale
  },
  {
    y: 0,
    scale: 1.1,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".about h1",
      start: "top 70%",
      end: "top 25%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  ".aboutContentIn.One",
  {
    y: -80,

    opacity: 0, // Valeur initiale
  },
  {
    y: 0,
    scale: 1.1,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".aboutContentIn.One",
      start: "top 50%",
      end: "top 25%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  ".aboutContentIn.Two",
  {
    y: 80,

    opacity: 0, // Valeur initiale
  },
  {
    y: 0,
    scale: 1.1,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".aboutContentIn.Two",
      start: "top 50%",
      end: "top 25%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);
