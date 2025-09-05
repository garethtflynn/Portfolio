import React from "react";
import logo from "../../assets/logo.png";
import { Navbar } from "flowbite-react";
import { Link } from "react-scroll";

function Navagation() {
  return (
    <div name="navbar" class="fixed w-screen">
      <Navbar
        fluid={true}
        rounded={false}
        class="sm:bg-transparent md:bg-black"
      >
        <Navbar.Brand>
          <a href="/">
            <img
              src={logo}
              className="cursor-pointer ml-2 mt-2 w-8 h-8 sm:w-10 sm:h-10 "
              alt="gareth-flynn-logo"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <ul class="flex flex-col items-end sm:pr-6 md:flex-row md:pr-6 md:gap-10 text-lg">
            <li className="pl-6">
              <Navbar.Link class="hover:opacity-75">
                <Link
                  to="greeting"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="relative group cursor-pointer text-[#fef2f2]"
                >
                  Home
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fef2f2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Navbar.Link>
            </li>
            <li class="">
              <Navbar.Link class="hover:opacity-75">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-110}
                  className="relative group cursor-pointer text-[#fef2f2]"
                >
                  Skills
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fef2f2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Navbar.Link>
            </li>
            <li class="">
              <Navbar.Link class="hover:opacity-75">
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="relative group cursor-pointer text-[#fef2f2]"
                >
                  Projects
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fef2f2] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Navbar.Link>
            </li>
            <li class="">
              <Navbar.Link class="hover:opacity-75">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className="relative group cursor-pointer text-[#fef2f2]"
                >
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fef2f2] group-hover:w-full transition-all duration-300"></span>
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
