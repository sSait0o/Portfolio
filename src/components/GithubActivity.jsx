import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/GithubActivity.css";

const GITHUB_USERNAME = "sSait0o";

const GithubActivity = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h1 = sectionRef.current.querySelector("h1");

      gsap.fromTo(
        h1,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: h1,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".githubCard",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".githubGrid",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="github" id="github" ref={sectionRef}>
      <h1>ACTIVITÉ GITHUB</h1>
      <div className="githubGrid">
        <div className="githubCard githubCard--graph">
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=github-compact&hide_border=true&bg_color=00000000`}
            alt={`Graphique des contributions GitHub de ${GITHUB_USERNAME}`}
            loading="lazy"
          />
        </div>
        <div className="githubCard githubCard--streak">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&background=00000000`}
            alt={`Streak de contributions GitHub de ${GITHUB_USERNAME}`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
