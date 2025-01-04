let svg = document.querySelector("svg");

let path = svg.querySelector("path");

const pathLength = path.getTotalLength();

console.log(pathLength);

gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

gsap.fromTo(
  path,
  {
    strokeDashoffset: pathLength,
  },
  {
    strokeDashoffset: 0,

    ease: "none",
    scrollTrigger: {
      trigger: ".svgContainer",
      start: "top 0%",
      end: "bottom 250%",
      scrub: 1,
    },
  }
);
