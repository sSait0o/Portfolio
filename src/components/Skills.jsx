import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { technologies, tools } from "../data/skills";
import "../styles/Skills.css";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill h1",
        { y: 80, opacity: 0 },
        {
          y: 0,
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".skill h1",
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".skill h2",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".skill h1",
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".item",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrub: true,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".item",
            start: "top 130%",
            end: "top -50%",
            toggleActions: "restart none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skill" ref={sectionRef}>
      <img src="images/perso2.png" alt="Personnage" className="stickTwo" />
      <h1 id="skill">COMPÉTENCES</h1>
      <div className="skillContainer">
        <div className="skillContent">
          <h2>TECHNOLOGIES</h2>
          <div className="items">
            {technologies.map(({ src, alt }) => (
              <div className="item" key={alt}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="skillContent">
          <h2>OUTILS</h2>
          <div className="items">
            {tools.map(({ src, alt }) => (
              <div className="item" key={alt}>
                <img src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
