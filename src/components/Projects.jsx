import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import projects from "../data/projects";
import "../styles/Projects.css";

const Projects = () => {
  const projectsRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth =
        projectsRef.current.scrollWidth - document.documentElement.clientWidth;

      gsap.to(projectsRef.current, {
        x: -scrollWidth + "px",
        ease: "none",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 0%",
          end: "bottom -50%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <h1 className="portfolioh1" id="project">
        Projets Réalisés
      </h1>
      <section className="portfolio" ref={portfolioRef}>
        <div className="wrapper">
          <div className="projects" ref={projectsRef}>
            {projects.map(({ id, title, description, github, image, imageAlt }) => (
              <div className="project" key={id}>
                <div className="projectDesc">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Voir</button>
                    </a>
                  )}
                </div>
                <div className="projectImg">
                  <img src={image} alt={imageAlt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
