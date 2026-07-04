import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Home.css";

const Home = () => {
  const arrowRef = useRef(null);
  const headerContentRef = useRef(null);
  const buttonRef = useRef(null);
  const headerImgRef = useRef(null);

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
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headerContentRef.current.querySelector("h1"),
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        headerContentRef.current.querySelector("h2"),
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headerContentRef.current.querySelector("h2"),
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "top 80%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        headerImgRef.current,
        { scale: 1.4, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: headerImgRef.current,
            start: "top 100%",
            end: "top 50%",
            scrub: true,
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
        <h1>SALUT !</h1>
        <h2>
          Je suis Quentin, développeur Full-Stack en recherche d'une
          alternance Data & IA (2026-2028). Pour en savoir plus sur moi, vous
          êtes au bon endroit.
        </h2>
        <a href={`${import.meta.env.BASE_URL}cv/QuentinCvAlternance.pdf`} download>
          <button id="buttoncv" ref={buttonRef}>Télécharger mon CV</button>
        </a>
      </section>
      <img
        src="images/persobon1.png"
        alt="Quentin"
        className="stick"
        ref={headerImgRef}
      />
    </header>
  );
};

export default Home;
