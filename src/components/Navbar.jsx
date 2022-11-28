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
          <Navbar.Link href ="/Portfolio-page" className="hover:opacity-50 text-slate-50">Portfolio</Navbar.Link>
          <Navbar.Link href="/Resume" className="hover:opacity-50 text-slate-50	">Resume</Navbar.Link>
          <Navbar.Link  href="/Contact" className="hover:opacity-50 text-slate-50	">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navagation;
