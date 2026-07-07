import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Home.css";

const Home = () => {
  const arrowRef = useRef(null);
  const headerContentRef = useRef(null);
  const buttonRef = useRef(null);
  const headerImgRef = useRef(null);

  const handleContactClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("link");
    if (!target) return;
    const nav = document.querySelector("nav");
    window.scrollTo({
      top: target.offsetTop - (nav ? nav.offsetHeight : 0),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        arrowRef.current,
        { y: 100, opacity: 1 },
        {
          y: -50,
          opacity: 0,
          scrollTrigger: {
            trigger: arrowRef.current,
            start: "top 0%",
            end: "top -20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        headerContentRef.current.querySelector("h1"),
        { x: -160, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerContentRef.current.querySelector("h1"),
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        headerContentRef.current.querySelector("h2"),
        { x: 160, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerContentRef.current.querySelector("h2"),
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        headerImgRef.current,
        { scale: 1.4, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerImgRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header>
      <div className="arrowContainer" ref={arrowRef}>
        <img src="images/arrow.png" alt="Flèche de défilement" className="arrow" />
      </div>
      <section className="headerContent" id="home" ref={headerContentRef}>
        <div className="heroPanel">
          <span className="heroBadge">
            <span className="heroDot" />
            Disponible pour une alternance Data & IA
          </span>
          <h1>
            Salut, je suis <span className="heroName">Quentin</span>
          </h1>
          <h2>
            Développeur Full-Stack en recherche d'une alternance Data & IA
            (2026-2028). Pour en savoir plus sur moi, vous êtes au bon
            endroit.
          </h2>
          <div className="heroActions" ref={buttonRef}>
            <a
              href={`${import.meta.env.BASE_URL}cv/QuentinCvAlternance.pdf`}
              download
            >
              <button id="buttoncv">Télécharger mon CV</button>
            </a>
            <a href="#link" className="heroSecondaryLink" onClick={handleContactClick}>
              Me contacter
            </a>
          </div>
        </div>
      </section>
      <div className="heroImageWrap">
        <img
          src="images/persobon1.png"
          alt="Illustration de Quentin"
          className="stick"
          ref={headerImgRef}
        />
      </div>
    </header>
  );
};

export default Home;
