import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Projects.css";

const Projects = () => {
  const projectsRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    // Enregistre le plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const projects = projectsRef.current;
    const portfolio = portfolioRef.current;

    // Animation GSAP
    gsap.to(projects, {
      x: () =>
        -(projects.scrollWidth - document.documentElement.clientWidth) + "px", // Déplacement horizontal complet
      ease: "none", // Animation fluide
      scrollTrigger: {
        trigger: portfolio,
        start: "top 0%",
        end: "bottom -50%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Cleanup lorsque le composant est démonté
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <h1 className="portfolioh1">Projets Réalisés</h1>
      <section className="portfolio" ref={portfolioRef}>
        <div className="wrapper">
          <div className="projects" ref={projectsRef}>
            <div className="project">
              <div className="projectDesc">
                <h2>Full-Stack</h2>
                <p>
                  Symfony, PHP, MVC, Création d'un site de cuisine avec CRUD en
                  PHP Blog et Recettes.
                </p>
                <a
                  href="https://github.com/jordyvuong/Click-and-Cook"
                  target="_blank"
                >
                  <button>Voir</button>
                </a>
              </div>
              <div className="projectImg">
                <img src="images/click&cook.jpg" alt="Project" />
              </div>
            </div>
            <div className="project">
              <div className="projectDesc">
                <h2>Bash</h2>
                <p>
                  Scripts permettant de gérer les Process IDs (PID), détectant
                  des anomalies.
                </p>
                <a
                  href="https://github.com/sSait0o/C-ProjetUnix"
                  target="_blank"
                >
                  <button>Voir</button>
                </a>
              </div>
              <div className="projectImg">
                <img src="images/C.jpg" />
              </div>
            </div>
            <div className="project">
              <div className="projectDesc">
                <h2>CRUD en PHP</h2>
                <p>
                  Créer/Lire/MaJ/Supprimer des produits et catégories avec une
                  BDD.
                </p>
                <a href="https://github.com/sSait0o/PHP-CRUD" target="_blank">
                  <button>Voir</button>
                </a>
              </div>
              <div className="projectImg">
                <img src="images/PHP.jpg" />
              </div>
            </div>
            <div className="project">
              <div className="projectDesc">
                <h2>MySQL</h2>
                <p>
                  Gestion de base de données avec mysql ou postgres, création de
                  ddd, mcd, mpd etc..
                </p>
              </div>
              <div className="projectImg">
                <img src="images/bdd.jpg " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
