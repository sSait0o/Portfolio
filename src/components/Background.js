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
          end: "bottom 250%", // Quand la fin du conteneur est 250% plus bas que le top
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
          height="15033"
          viewBox="0 0 1259 15033"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
        >
          <path
            ref={pathRef}
            d="M317.5 1C317.5 1 407.363 149.572 497 208C586.638 266.428 760.013 229.771 883.5 328.5C985.61 410.138 1070 606.5 1070 606.5C1147.56 835.471 444.5 1001.5 261 1222C77.5 1442.5 73.3145 1746.5 125.157 1910C177 2073.5 1093.16 1614.5 1134.16 1881.5C1175.16 2148.5 -111.773 2811.06 136.5 2913C384.773 3014.94 998.639 2796.9 1054.66 2990.5C1110.68 3184.1 1092 3491.5 1092 3783.5C1092 4075.5 1092 4078.5 1002 4125C912 4171.5 194.986 4067.57 138.5 4311.57C82.0139 4555.57 1092 4232.57 1092 4485.57C1092 4738.57 176.5 4762 144 5235.5C111.5 5709 465 5738 220.5 5613C-24 5488 359.556 5777.51 483 5820C669.952 5884.34 827.794 5597.31 980 5723.5C1056.98 5787.32 1080.74 5852.42 1097.5 5951C1116.83 6064.68 1105.56 6144.79 1042 6241C977.727 6338.28 898.291 6355.37 793.5 6406.5C588.685 6506.43 447.788 6533.6 220.5 6517C-6.78784 6500.4 93.9998 6301.96 288.5 6406.5C483 6511.04 44 7014.4 146 7154C248 7293.6 404.167 7297.17 469.5 7306.5C534.833 7315.83 949.274 7219.47 1126.5 7406C1203.37 7486.91 1241.12 7550.71 1254.5 7661.5C1274.75 7829.1 1201.52 7939.81 1080 8057C905.183 8225.59 689.571 8072.78 469.5 8175.5C307.543 8251.1 187.984 8286.76 96 8440C-21.6752 8636.05 -39.8281 8841.56 96 9025.5C235.668 9214.64 475.809 9065.59 675 9190.5C861.598 9307.51 965.821 9404.47 1058 9604.5C1170.08 9847.71 1161.61 10031.6 1089.5 10289.5C1015.72 10553.4 967.983 10866.9 694 10869C472.333 10870.7 139.213 10746.2 358 10710.5C652.5 10662.5 190.945 10820.3 133.5 10928C89.1048 11011.2 60.4791 11068.6 73.5 11162C91.3133 11289.8 173.192 11349.4 282.5 11418C480.795 11542.5 1038 11513.5 881 11383C764.599 11286.2 866.863 11637.8 770.5 11754.5C638.729 11914.1 415.904 11776.2 267 11920C170.246 12013.4 96.8927 12085 97 12219.5C97.1756 12439.5 342.768 12485.5 553 12550.5C745.708 12610.1 905.93 12432.5 1069.5 12550.5C1194.16 12640.4 1241.93 12745.6 1252.5 12899C1261.24 13025.8 1245.56 13113.8 1165.5 13212.5C1089.74 13305.9 1009.24 13321.5 895.5 13360.5C678.839 13434.8 956.6 13630.8 771 13765C659.577 13845.6 408.114 13832.3 361 13961.5C291.821 14151.2 -9.38058 14011.6 114.5 14171C171.853 14244.8 220.514 14280.4 309 14310.5C436.276 14353.8 690.653 14204.8 824.5 14217.5C1047.89 14238.8 940.629 14285.2 990.5 14504C1028.87 14672.3 842.5 15032.5 842.5 15032.5"
            stroke="white"
            strokeWidth="2"
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
