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
        { y: 80, opacity: 0 },
        {
          y: 0,
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".link h1",
            start: "top 60%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".linkContentIn",
        { y: 80, opacity: 0.3 },
        {
          y: 0,
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".linkContentIn",
            start: "top 80%",
            end: "top 40%",
            scrub: true,
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
          {links.map(({ id, label, url, image, imageAlt, className }) => (
            <div className={`linkContentIn ${className}`} key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
              <img src={image} alt={imageAlt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
