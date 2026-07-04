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
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h1,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentOneRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentOneRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentTwoRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentTwoRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
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
            Développeur Full-Stack passionné par la Data & l'IA, j'ai acquis
            une expérience concrète en alternance et en stage (plateformes
            géospatiales, CRM, dashboards interactifs) et je recherche
            aujourd'hui une alternance orientée Data & IA pour 2026-2028.
          </p>
        </div>
        <div className="aboutContentIn Two" ref={contentTwoRef}>
          <img src="images/formation.png" alt="Formation" />
          <h2>FORMATION</h2>
          <p>
            Après un Bachelor Développement web & application à l'Efrei
            (2023-2026), je poursuis en Mastère Data Engineer & IA à l'Efrei
            (2026-2028), avec des compétences en développement full-stack,
            data engineering et machine learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
