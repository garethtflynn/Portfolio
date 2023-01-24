import React from "react";
import ParticlesBackground from "../components/Particles"
import Navbar from "../components/Navbar"
import Greeting from "../components/Greeting"
import About from "../components/About"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer";

function PortfolioPage() {
  return (
    <div>
    <Navbar/>
    <ParticlesBackground/>
    <Greeting/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default PortfolioPage;