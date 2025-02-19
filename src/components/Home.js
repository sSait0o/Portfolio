import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Home.css";

const Home = () => {
  const arrowRef = useRef(null);
  const headerContentRef = useRef(null);
  const buttonRef = useRef(null);
  const headerImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation pour l'arrow
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation pour h1
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation pour h2
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation pour le bouton
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );

    // Animation pour l'image du header
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
          toggleActions: "restart pause reverse pause",
        },
      }
    );
  }, []);

  return (
    <header>
      <div className="arrowContainer" ref={arrowRef}>
        <img src="images/arrow.png" alt="arrow" className="arrow" />
      </div>
      <section className="headerContent" id="home" ref={headerContentRef}>
        <h1>SALUT !</h1>
        <h2>
          Je suis Quentin, actuellement en Bachelor de développement web &
          application. Pour en savoir plus sur moi, vous êtes au bon endroit.
        </h2>
        <a
          href="/cv/QuentinCvAlternance.pdf"
          download="QuentinCvAlternance.pdf"
        >
          <button id="buttoncv" ref={buttonRef}>
            Télécharger mon CV
          </button>
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
