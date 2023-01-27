import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-black h-10 w-full">
        <ul className="flex justify-center align-center gap-14">
          <li>
            <a
              href="https://github.com/garethtflynn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="2rem" color="white" class='hover:scale-125 duration-150	' />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/garethtflynn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="2rem" color="white" class='hover:scale-125 duration-150' />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/19253005/gareth-flynn?tab=profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaStackOverflow size="2rem" color="white" class='hover:scale-125 duration-150'/>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/garethtflynn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare size="2rem" color="white" class='hover:scale-125 duration-150'/>
            </a>
          </li>
        </ul>
        <div class='bg-black flex justify-center py-3'>
        <p class=' text-amber-50 text-xs'>
        © 2022 Gareth Flynn. All rights reserved.
        </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
