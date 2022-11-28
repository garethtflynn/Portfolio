import React from "react";
import logo from "../assets/goLogo.png"
import { Navbar } from "flowbite-react";

function Navagation() {
  // const [nav, setNav ] = useState(About)
  
  return (
    <div className="bg-gray-900">
      <Navbar fluid={false} rounded={true} className="bg-zinc-800	">
        <Navbar.Brand to="home" href="/home">
          <img
            src={logo} 
            className="mr-3 h-6 sm:h-9 "
            alt="gareth-flynn-logo"
            style={{width: '80px', height: '80px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>About Me</Navbar.Link>
          <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
          <Navbar.Link href="/resume">Resume</Navbar.Link>
          <Navbar.Link  href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navagation;
