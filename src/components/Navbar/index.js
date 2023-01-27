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
              className="cursor-pointer"
              alt="gareth-flynn-logo"
              style={{ width: "80px", height: "80px" }}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <ul class='flex flex-col items-end sm:pr-6 md:flex-row md:pr-6 md:gap-10 text-lg'>
         <li class='pl-6'>
          <Navbar.Link class="hover:opacity-50 text-amber-50">
            <Link
              to="greeting"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              Home
            </Link>
          </Navbar.Link>
          </li>
          <li class=''>  
          <Navbar.Link class="hover:opacity-50 text-amber-50">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
              className="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              About
            </Link>
          </Navbar.Link>
          </li>
          <li class=''>
          <Navbar.Link class="hover:opacity-50 text-amber-50">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              Projects
            </Link>
          </Navbar.Link>
          </li>
          <li class=''>
          <Navbar.Link class="hover:opacity-50 text-amber-50">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              className="cursor-pointer hover:underline hover:underline-offset-4 decoration-2"
            >
              Contact
            </Link>
          </Navbar.Link>
          </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navagation;
