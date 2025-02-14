import React, { useState, useEffect } from "react";
import { gsap } from "gsap"; // Importation de GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importation de ScrollTrigger
import "../styles/Skills.css";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [tab, setTab] = useState("tab1");

  // Utilisation de useEffect pour initialiser les animations à l'affichage du composant
  useEffect(() => {
    // Animation de l'élément h1
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation des éléments .item
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
  }, []); // L'array vide [] garantit que l'animation se lance une seule fois après le montage du composant

  return (
    <section className="skill" id="skill">
      <h1>COMPÉTENCES</h1>
      <div className="skillContainer">
        <div className="skillContent">
          <h2>TECHNOLOGIES</h2>
          <div className="items">
            <div className="item">
              <img src="images/gsap.svg" alt="gsap" />
            </div>
            <div className="item">
              <img src="images/js.png" alt="js" />
            </div>
            <div className="item">
              <img src="images/unixlinux.webp" alt="php" />
            </div>
            <div className="item">
              <img src="public\images\symfony.png" />
            </div>
            <div className="item">
              <img src="images/alpinejs.svg" alt="alpinejs" />
            </div>
            <div className="item">
              <img src="images/CSS.svg" alt="css" />
            </div>
            <div className="item">
              <img src="images/C.png" alt="c" />
            </div>
            <div className="item">
              <img src="images/postgre.png" alt="postgresql" />
            </div>
            <div className="item">
              <img src="images/php.png" alt="php" />
            </div>
            <div className="item">
              <img src="images/mysql.svg" alt="mysql" />
            </div>
            <div className="item">
              <img src="images/java.webp" alt="java" />
            </div>
            <div className="item">
              <img src="images/HTML5_logo_and_wordmark.svg.png" alt="html" />
            </div>
          </div>
        </div>
        <div className="skillContent">
          <h2>OUTILS</h2>
          <div className="items">
            <div className="item">
              <img src="images/figma.png" alt="figma" />
            </div>
            <div className="item">
              <img src="images/git.png" alt="git" />
            </div>
            <div className="item">
              <img src="images/vscode.png" alt="vscode" />
            </div>
            <div className="item">
              <img src="images/webflow.png" alt="webflow" />
            </div>
            <div className="item">
              <img src="images/docker.webp" alt="docker" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
