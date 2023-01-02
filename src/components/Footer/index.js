import React from "react";
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-black w-full sticky">
            <ul className='flex justify-center align-center gap-10'>
                <li>
                <a href="https://github.com/garethtflynn" target="_blank" rel="noopener noreferrer"><FaGithub size='2rem' color='white'/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/garethtflynn/" target="_blank" rel="noopener noreferrer" ><FaLinkedin size='2rem' color='white'/></a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/19253005/gareth-flynn?tab=profile" target="_blank" rel="noopener noreferrer"><FaStackOverflow size='2rem' color='white'/></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;

