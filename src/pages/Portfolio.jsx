import React from "react";
import ParticlesBackground from "../components/Particles"
import Navbar from "../components/Navbar"
import Greeting from "../components/Greeting"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div>
    <Navbar/>
    <ParticlesBackground/>
    <Greeting/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default Portfolio;