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
import ResumePdf from "../../assets/resume.pdf";

function Skills() {
  return (
    <div class='bg-black w-full h-fit'>
      <div class="flex justify-center ">
        <p class="text-slate-50 underline underline-offset-4 text-3xl">
          Skills
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-20 p-12 text-slate-50 w-full text-center">
        <div>
          <FaHtml5 size="4rem"></FaHtml5>
          <p>HTML5</p>
        </div>
        <div>
          <FaCss3Alt size="4rem"></FaCss3Alt>
          <p>CSS</p>
        </div>
        <div>
          <FaJs size="4rem"></FaJs>
          <p>Javascript</p>
        </div>
        <div>
          <FaReact size="4rem"></FaReact>
          <p>React</p>
        </div>
        <div>
          <FaArrowsAltH size="4rem"></FaArrowsAltH>
          <p>REST APIS</p>
        </div>
        <div>
          <DiResponsive size="4rem"></DiResponsive>
          <p>
            Responsive<br></br>Design
          </p>
        </div>
        <div>
          <DiNodejs size="4rem"></DiNodejs>
          <p>Node.js</p>
        </div>
        <div>
          <DiMongodb size="4rem"></DiMongodb>
          <p>Mongodb</p>
        </div>
        <div>
          <DiMysql size="4rem"></DiMysql>
          <p>MySQL</p>
        </div>
        <div>
          <SiTailwindcss size="4rem"></SiTailwindcss>
          <p>Tailwind</p>
        </div>
        <div>
          <SiInsomnia size="4rem"></SiInsomnia>
          <p>Insomnia</p>
        </div>
        <div>
          <GrGraphQl size="4rem"></GrGraphQl>
          <p>GraphQl</p>
        </div>
      </div>
      <div class="flex justify-center p-10">
        <button
          href={ResumePdf}
          target="blank"
          type="submit"
          class="bg-stone-50 hover:opacity-75 text-black font-bold py-2 px-4 items-center"
        >
          <a href={ResumePdf} download="garethFlynnResume.pdf">
            <span>Download Resume</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Skills;
