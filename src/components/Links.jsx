import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import links from "../data/links";
import "../styles/Links.css";

const Links = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".link h1",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".link h1",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".linkContentIn",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".linkContent",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="link" id="link" ref={sectionRef}>
      <h1>Liens Importants</h1>
      <div className="linkContainer">
        <div className="linkContent">
          {links.map(
            ({ id, label, handle, description, cta, url, image, imageAlt, className }) => (
              <div className={`linkContentIn ${className}`} key={id}>
                <a
                  className="linkCard"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="linkThumb">
                    <img src={image} alt={imageAlt} />
                  </div>
                  <div className="linkCardBody">
                    <h3 className="linkTitle">{label}</h3>
                    <p className="linkHandle">{handle}</p>
                    <p className="linkDesc">{description}</p>
                    <span className="linkCta">{cta} →</span>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Links;
