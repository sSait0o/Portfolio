import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import skillCategories from "../data/skills";
import "../styles/Skills.css";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill h1",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".skill h1",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".skillPill",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".skillPill",
            start: "top 100%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skill" id="skill" ref={sectionRef}>
      <h1>Compétences</h1>
      <div className="skillCategories">
        {skillCategories.map(({ name, items }) => (
          <div className="skillCategory" key={name}>
            <h2>{name}</h2>
            <div className="skillPills">
              {items.map(({ src, alt }) => (
                <div className="skillPill" key={alt}>
                  {src && <img src={src} alt="" />}
                  <span>{alt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
