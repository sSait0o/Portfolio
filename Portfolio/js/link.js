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
      start: "top 70%",
      end: "top 25%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

gsap.fromTo(
  ".linkContentIn.One",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    rotate: -8,
    scrollTrigger: {
      trigger: ".linkContentIn.One",
      start: "top 80%",
      end: "top 15%",
      scrub: true,

      toggleActions: "restart pause reverse pause",
    },
  }
);

gsap.fromTo(
  ".linkContentIn.Two",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    rotate: 8,
    scrollTrigger: {
      trigger: ".linkContentIn.One",
      start: "top 80%",
      end: "top 15%",
      scrub: true,

      toggleActions: "restart pause reverse pause",
    },
  }
);
