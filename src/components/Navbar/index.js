import React from "react";
import logo from "../../assets/gflogo.PNG";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Navagation() {
  return (
    <div>
      <Navbar  fluid={true} rounded={false} class='bg-black'>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9 "
              alt="gareth-flynn-logo"
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link class="hover:opacity-50 text-slate-50	">
            <Link to="/about">About Me</Link>
          </Navbar.Link>
          <Navbar.Link class="hover:opacity-50 text-slate-50">
            <Link to="/portfolio-page">Portfolio</Link>
          </Navbar.Link>
          <Navbar.Link class="hover:opacity-50 text-slate-50	">
            <Link to="/resume">Resume</Link>
          </Navbar.Link>
          <Navbar.Link class="hover:opacity-50 text-slate-50	">
            <Link to="/contact">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navagation;
