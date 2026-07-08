import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ostiaShowcase from "../data/ostiaShowcase";
import "../styles/OstiaShowcase.css";

const OstiaShowcase = () => {
  const sectionRef = useRef(null);
  const [selectedId, setSelectedId] = useState(ostiaShowcase[0].id);

  const active = ostiaShowcase.find((theme) => theme.id === selectedId);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ostiaShowcase" id="ostia" ref={sectionRef}>
      <h1 className="ostiaShowcaseh1">OstIA - Projet</h1>
      <div className={`ostiaPanel theme-${selectedId}`}>
        <div className="ostiaShowcaseContent">
          <div className="ostiaScreen">
            <div className="ostiaScreenBar">
              <span />
              <span />
              <span />
            </div>
            <div className="ostiaScreenVideo">
              <video
                key={selectedId}
                autoPlay
                loop
                muted
                playsInline
                onLoadedMetadata={() => ScrollTrigger.refresh()}
              >
                <source src={active.video.webm} type="video/webm" />
                <source src={active.video.mp4} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="ostiaText" key={selectedId}>
            <span className="ostiaBadge">{active.label}</span>
            <h2>{active.title}</h2>
            <ul className="ostiaSteps">
              {active.steps.map((step, index) => (
                <li key={step}>
                  <span className="ostiaStepIndex">{index + 1}</span>
                  <span className="ostiaStepText">{step}</span>
                </li>
              ))}
            </ul>
            <div className="ostiaLinks">
              <a
                href="https://www.ostia-app.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ostiaLink"
              >
                Voir l'app
              </a>
              <a
                href="https://github.com/sSait0o/OstIA"
                target="_blank"
                rel="noopener noreferrer"
                className="ostiaLink ostiaLinkGithub"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="ostiaCards">
          {ostiaShowcase.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`ostiaCard${selectedId === id ? " active" : ""}`}
              onMouseEnter={() => setSelectedId(id)}
              onClick={() => setSelectedId(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OstiaShowcase;
