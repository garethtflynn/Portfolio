import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaArrowsAltH,
} from "react-icons/fa";
import { DiResponsive, DiNodejs, DiMongodb, DiMysql } from "react-icons/di";
import { SiTailwindcss, SiInsomnia } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import resume from "../../assets/portfolioResume.pdf"

function Skills() {
  return (
    <div class='bg-black w-full h-fit pt-16'>
      <div class="flex justify-center pb-12">
        <p class="text-amber-50 underline underline-offset-4 text-3xl">
          Skills
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-20 p-12 text-amber-50 w-full text-center">
        <div>
          <FaHtml5 size="4rem" class='hover:scale-125 duration-150'></FaHtml5>
          <p>HTML5</p>
        </div>
        <div>
          <FaCss3Alt size="4rem" class='hover:scale-125 duration-150'></FaCss3Alt>
          <p>CSS</p>
        </div>
        <div>
          <FaJs size="4rem" class='hover:scale-125 duration-150'></FaJs>
          <p>Javascript</p>
        </div>
        <div>
          <FaReact size="4rem" class='hover:scale-125 duration-150'></FaReact>
          <p>React</p>
        </div>
        <div>
          <FaArrowsAltH size="4rem" class='hover:scale-125 duration-150'></FaArrowsAltH>
          <p>REST APIS</p>
        </div>
        <div>
          <DiResponsive size="4rem" class='hover:scale-125 duration-150'></DiResponsive>
          <p>
            Responsive<br></br>Design
          </p>
        </div>
        <div>
          <DiNodejs size="4rem" class='hover:scale-125 duration-150'></DiNodejs>
          <p>Node.js</p>
        </div>
        <div>
          <DiMongodb size="4rem" class='hover:scale-125 duration-150'></DiMongodb>
          <p>Mongodb</p>
        </div>
        <div>
          <DiMysql size="4rem" class='hover:scale-125 duration-150'></DiMysql>
          <p>MySQL</p>
        </div>
        <div>
          <SiTailwindcss size="4rem" class='hover:scale-125 duration-150'></SiTailwindcss>
          <p>Tailwind</p>
        </div>
        <div>
          <SiInsomnia size="4rem" class='hover:scale-125 duration-150'></SiInsomnia>
          <p>Insomnia</p>
        </div>
        <div>
          <GrGraphQl size="4rem" class='hover:scale-125 duration-150'></GrGraphQl>
          <p>GraphQl</p>
        </div>
      </div>
      <div class="flex justify-center p-10">
        <button
          target="blank"
          type="submit"
          class="bg-amber-50 hover:opacity-75 text-black font-bold py-2 px-4 items-center hover:scale-105 duration-150"
        >
          <a href={resume} target="_blank" rel="noreferrer">
            <span>Download Resume</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Skills;
