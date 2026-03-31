import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/About.css";

const About = () => {
  const aboutRef = useRef(null);
  const contentOneRef = useRef(null);
  const contentTwoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h1 = aboutRef.current.querySelector("h1");

      gsap.fromTo(
        h1,
        { y: 80, opacity: 0 },
        {
          y: 0,
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: h1,
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentOneRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: h1,
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentTwoRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: h1,
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <h1>A PROPOS</h1>
      <div className="aboutContent">
        <div className="aboutContentIn One" ref={contentOneRef}>
          <img src="images/presentation.png" alt="Présentation" />
          <h2>BIO</h2>
          <p>
            Passionné par le numérique, je suis un étudiant avec une solide
            expérience dans ce domaine. Mon parcours actuel me permet de
            développer des compétences approfondies dans ce domaine.
          </p>
        </div>
        <div className="aboutContentIn Two" ref={contentTwoRef}>
          <img src="images/formation.png" alt="Formation" />
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
};

export default About;
