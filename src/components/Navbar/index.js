import React from "react";
import logo from "../../assets/gflogo.PNG";
import { Navbar } from "flowbite-react";
import { Link } from "react-scroll";

function Navagation() {
  return (
    <div name="navbar" class="fixed w-screen">
      <Navbar fluid={true} rounded={false} class="bg-black">
        <Navbar.Brand>
          <a href="/Portfolio">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9 cursor-pointer"
              alt="gareth-flynn-logo"
              style={{ width: "80px", height: "80px" }}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link class="hover:opacity-50 text-slate-50	">
            <Link
              to="greeting"
              spy={true}
              smooth={true}
              duration={500}
              class="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link class="hover:opacity-50 text-slate-50	">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
              class="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link class="hover:opacity-50 text-slate-50">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              class="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              Projects
            </Link>
          </Navbar.Link>
          <Navbar.Link class="hover:opacity-50 text-slate-50 mr-3">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              class="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              Contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navagation;
