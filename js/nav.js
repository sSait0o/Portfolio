document.addEventListener("DOMContentLoaded", function () {
  // Récupérer tous les liens de la navbar
  const navLinks = document.querySelectorAll(".nav a");

  // Fonction pour détecter la section visible
  function activateLink() {
    let currentSection = "";

    // Pour chaque section, vérifier si elle est dans la vue
    document.querySelectorAll("section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSection = section.id;
      }
    });

    // Ajouter la classe "active" à l'élément correspondant dans la navbar
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }

  // Appeler la fonction activateLink lors du défilement
  window.addEventListener("scroll", activateLink);
});

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les liens dans la section de navigation
  const navLinks = document.querySelectorAll("nav a");

  // Ajoutez un gestionnaire d'événements à chaque lien
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Empêchez le comportement par défaut du lien

      const targetId = this.getAttribute("href").substring(1); // Récupérez l'identifiant de la cible
      const targetElement = document.getElementById(targetId); // Sélectionnez l'élément cible

      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.offsetTop -
            document.querySelector("nav").offsetHeight,
          behavior: "smooth", // Ajoutez une animation de défilement en douceur
        });
      }
    });
  });
});
