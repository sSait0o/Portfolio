gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".arrow",
  {
    y: 100,
    opacity: 1, // Valeur initiale
  },
  {
    y: -50,
    opacity: 0, // Valeur finale
    scrollTrigger: {
      trigger: ".arrow",
      start: "top 70%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  ".headerContent h1",
  {
    x: -100,
    opacity: 0, // Valeur initiale
  },
  {
    x: 0,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".headerContent h1",
      start: "top 80%",
      end: "top 30%",
      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  ".headerContent h2",
  {
    x: 100,
    opacity: 0, // Valeur initiale
  },
  {
    x: 0,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".headerContent h2",
      start: "top 80%",
      end: "top 30%",
      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  ".headerContent button",
  {
    opacity: 0, // Valeur initiale
  },
  {
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".headerContent button",
      start: "top 80%",
      end: "top 80%",
      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  "header img",
  {
    scale: 1.4,
    opacity: 0, // Valeur initiale
  },
  {
    opacity: 1, // Valeur finale
    scale: 1, // Valeur finale
    scrollTrigger: {
      trigger: "header img",
      start: "top 100%",
      end: "top top",
      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);
