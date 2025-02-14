import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

function About() {
  const aboutRef = useRef(null);
  const contentOneRef = useRef(null);
  const contentTwoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      aboutRef.current.querySelector("h1"),
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1.1,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef.current.querySelector("h1"),
          start: "top 70%",
          end: "top 25%",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation pour contentOne
    gsap.fromTo(
      contentOneRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1.1,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef.current.querySelector("h1"),
          start: "top 70%",
          end: "top 25%",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation pour contentTwo
    gsap.fromTo(
      contentTwoRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1.1,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef.current.querySelector("h1"),
          start: "top 70%",
          end: "top 25%",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
      }
    );
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <h1>A PROPOS</h1>
      <div className="aboutContent">
        <div className="aboutContentIn One" ref={contentOneRef}>
          <img src="images/presentation.png" alt="Quentin" />
          <h2>BIO</h2>
          <p>
            Passionné par le numérique, je suis un étudiant avec une solide
            expérience dans ce domaine. Mon parcours actuel me permet de
            développer des compétences approfondies dans ce domaine.
          </p>
        </div>
        <div className="aboutContentIn Two" ref={contentTwoRef}>
          <img src="images/formation.png" alt="Quentin" />
          <h2>FORMATION</h2>
          <p>
            Je suis actuellement en Bachelor de développement web & application
            en deuxième année, avec des compétences en développement web,
            gestion de base de données, et plus encore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
