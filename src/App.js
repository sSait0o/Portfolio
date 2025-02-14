import React from "react";
import "./styles/App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Links from "./components/Links";

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
