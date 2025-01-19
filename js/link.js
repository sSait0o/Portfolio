gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".link h1",
  {
    y: 80,

    opacity: 0, // Valeur initiale
  },
  {
    y: 0,
    scale: 1.1,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".link h1",
      start: "top 60%",
      end: "top 10%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  ".linkContentIn",
  {
    y: 80,

    opacity: 0.3, // Valeur initiale
  },
  {
    y: 0,
    scale: 1.1,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".linkContentIn",
      start: "top 80%",
      end: "top 40%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);
