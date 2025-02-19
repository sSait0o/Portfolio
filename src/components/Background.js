import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Background.css";

const Background = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Sélectionne le chemin du SVG et récupère sa longueur
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Initialisation de la ligne (invisible au départ)
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animation pour l'animation du dessin du SVG
    gsap.fromTo(
      path,
      { strokeDashoffset: pathLength }, // Valeur initiale
      {
        strokeDashoffset: 0, // Valeur finale
        ease: "none", // Pas d'effet de courbe
        scrollTrigger: {
          trigger: ".svgContainer", // Conteneur déclencheur
          start: "top 0%", // Quand le haut de l'élément SVG arrive en haut de la fenêtre
          end: "bottom 100%", // Quand la fin du conteneur est 250% plus bas que le top
          scrub: 1, // Synchronisation fluide avec le défilement
        },
      }
    );
  }, []);

  return (
    <>
      <div className="svgContainer">
        <svg
          width="1259"
          height="100%"
          viewBox="0 0 1259 9026"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
        >
          <path
            ref={pathRef}
            d="M317.685 1C317.685 1 407.548 149.572 497.185 208C586.823 266.428 760.198 229.771 883.685 328.5C985.795 410.138 1070.19 606.5 1070.19 606.5C1147.74 835.471 444.685 1001.5 261.185 1222C77.6853 1442.5 73.4998 1746.5 125.343 1910C177.185 2073.5 1093.34 1614.5 1134.34 1881.5C1175.34 2148.5 -111.588 2811.06 136.685 2913C384.959 3014.94 998.825 2796.9 1054.84 2990.5C1110.86 3184.1 1092.19 3491.5 1092.19 3783.5C1092.19 4075.5 1092.19 4078.5 1002.19 4125C912.185 4171.5 195.171 4067.57 138.685 4311.57C82.1992 4555.57 1092.19 4232.57 1092.19 4485.57C1092.19 4738.57 176.685 4762 144.185 5235.5C111.685 5709 465.185 5738 220.685 5613C-23.8147 5488 359.741 5777.51 483.185 5820C670.138 5884.34 827.98 5597.31 980.186 5723.5C1057.16 5787.32 1080.92 5852.42 1097.69 5951C1117.01 6064.68 1105.75 6144.79 1042.19 6241C977.913 6338.28 898.476 6355.37 793.685 6406.5C588.87 6506.43 447.973 6533.6 220.685 6517C-6.60254 6500.4 94.1851 6301.96 288.685 6406.5C483.185 6511.04 44.1853 7014.4 146.185 7154C248.185 7293.6 404.352 7297.17 469.685 7306.5C535.019 7315.83 949.459 7219.47 1126.69 7406C1203.55 7486.91 1241.3 7550.71 1254.69 7661.5C1274.93 7829.1 1201.7 7939.81 1080.19 8057C905.369 8225.59 689.756 8072.78 469.685 8175.5C307.729 8251.1 188.169 8286.76 96.1853 8440C-21.4899 8636.05 -39.6428 8841.56 96.1853 9025.5"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="background">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </>
  );
};

export default Background;
