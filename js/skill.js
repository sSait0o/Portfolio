gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".skill h1",
  {
    y: 80,

    opacity: 0, // Valeur initiale
  },
  {
    y: 0,
    scale: 1.1,
    opacity: 1, // Valeur finale
    scrollTrigger: {
      trigger: ".skill h1",
      start: "top 70%",
      end: "top 25%",

      scrub: true,

      toggleActions: "restart pause reverse pause", // Modifie les actions selon les événements
    },
  }
);

// Attendez que le DOM soit prêt

// Animation des éléments avec stagger
gsap.fromTo(
  ".item",
  {
    opacity: 0, // Opacité initiale
    y: 100, // Position initiale (en bas)
  },
  {
    opacity: 1, // Devient complètement visible
    y: 0, // Se déplace à sa position d'origine
    scrub: true,
    stagger: 0.2, // Délai entre chaque animation (en secondes)
    scrollTrigger: {
      trigger: ".item",
      start: "top 130%",
      end: "top -50%",
      toggleActions: "restart none none none",
    },
  }
);
