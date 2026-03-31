import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Links from "./components/Links";

// Register GSAP plugins once at the app level
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Links />
    </div>
  );
};

export default App;
