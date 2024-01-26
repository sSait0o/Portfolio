document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les liens dans la section de navigation
  const navLinks = document.querySelectorAll("#navtwo a");

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
            document.querySelector("#nav").offsetHeight,
          behavior: "smooth", // Ajoutez une animation de défilement en douceur
        });
      }
    });
  });
});
