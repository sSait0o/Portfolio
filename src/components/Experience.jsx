import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import experience from "../data/experience";
import "../styles/Experience.css";

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience h1",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".experience h1",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".experienceItem",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".experienceItem",
            start: "top 130%",
            end: "top -50%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <h1>EXPÉRIENCES</h1>
      <div className="experienceList">
        {experience.map(({ id, role, company, period, points, link }) => (
          <div className="experienceItem" key={id}>
            <div className="experienceHeader">
              <h2>{role}</h2>
              <span className="experienceCompany">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {company}
                  </a>
                ) : (
                  company
                )}
              </span>
              <span className="experiencePeriod">{period}</span>
            </div>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
