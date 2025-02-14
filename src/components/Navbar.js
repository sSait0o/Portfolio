import React, { useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav a");

    // Fonction pour détecter la section visible
    const activateLink = () => {
      let currentSection = "";

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
    };

    // Appeler la fonction activateLink lors du défilement
    window.addEventListener("scroll", activateLink);

    return () => {
      // Nettoyer l'événement lors du démontage du composant
      window.removeEventListener("scroll", activateLink);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    const targetId = e.target.getAttribute("href").substring(1); // Récupère l'id de la cible
    const targetElement = document.getElementById(targetId); // Sélectionne l'élément cible

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.offsetTop - document.querySelector("nav").offsetHeight,
        behavior: "smooth", // Ajoute l'animation de défilement fluide
      });
    }
  };

  return (
    <nav>
      <div className="navContainer">
        <a href="#home" onClick={handleClick}>
          Home
        </a>
        <a href="#about" onClick={handleClick}>
          About
        </a>
        <a href="#skill" onClick={handleClick}>
          Skills
        </a>
        <a href="#project" onClick={handleClick}>
          Projects
        </a>
        <a href="#link" onClick={handleClick}>
          Liens+
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
