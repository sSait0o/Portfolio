import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Links.css";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Links = () => {
  useEffect(() => {
    // Animation pour le titre <h1>
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation pour les éléments avec la classe .linkContentIn
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );
  }, []); // Cette dépendance vide [] garantit que l'effet se déclenche une seule fois

  return (
    <section className="link" id="link">
      <h1>Liens Importants</h1>
      <div className="linkContainer">
        <div className="linkContent">
          <div className="linkContentIn One">
            <a href="https://github.com/sSait0o/Portfolio" target="_blank">
              Github - sSait0o
            </a>
            <img src="images/github-overview2.jpg" alt="Github" />
          </div>
          <div className="linkContentIn Two">
            <a
              href="https://www.linkedin.com/in/quentin-leboucher/"
              target="_blank"
            >
              Linkedin
            </a>
            <img src="images/linkedin-overview.png" alt="Linkedin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
