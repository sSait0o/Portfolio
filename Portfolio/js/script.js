// Script.js
gsap.registerPlugin(ScrollTrigger);

// Sélectionnez le conteneur à animer
const projects = document.querySelector(".projects");
const project = document.querySelector(".project");
const portfolio = document.querySelector(".portfolio");

// GSAP Animation
gsap.to(projects, {
  x: () =>
    -(projects.scrollWidth - document.documentElement.clientWidth) + "px", // Déplacement horizontal complet
  ease: "none",
  scrollTrigger: {
    trigger: portfolio, // Le conteneur qui déclenche l'animation
    start: "top top", // Début lorsque le haut du conteneur atteint le haut de la fenêtre
    end: () => "+=" + projects.scrollWidth, // Fin lorsque tout le contenu est scrollé
    scrub: 1, // Synchronisation fluide avec le scroll
    pin: true, // Bloque le conteneur en place pendant le scroll

    anticipatePin: 1, // Optimise le comportement du pin
  },
});
