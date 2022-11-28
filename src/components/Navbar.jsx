import React from "react";
import logo from "../assets/goLogo.png"
import { Navbar } from "flowbite-react";

function Navagation() {
  return (
    <div className="">
      <Navbar fluid={true} rounded={false} className="bg-zinc-700">
        <Navbar.Brand href="/" className="">
          <img
            src={logo} 
            className="mr-3 h-6 sm:h-9 "
            alt="gareth-flynn-logo"
            style={{width: '80px', height: '80px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className="hover:opacity-50 text-slate-50	">About Me</Navbar.Link>
          <Navbar.Link href="/portfolio" className="hover:opacity-50 text-slate-50	">Portfolio</Navbar.Link>
          <Navbar.Link href="/resume" className="hover:opacity-50 text-slate-50	">Resume</Navbar.Link>
          <Navbar.Link  href="/contact" className="hover:opacity-50 text-slate-50	">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navagation;
