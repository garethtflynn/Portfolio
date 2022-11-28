import React from "react";
import { Button } from "flowbite-react";
import ResumePdf from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="w-full h-screen bg-zinc-700">
      <div className="bg-zinc-700 flex flex-wrap gap-2 justify-center">
        <Button
          href={ResumePdf}
          target="blank"
          color="dark"
          type="submit"
          className="w-1/6 mt-5"
        >
          Download Resume
        </Button>
      </div>
      <div className="ml-10 mt-5 text-slate-50">
        <div className="font-bold">
          <p>Skills</p>
        </div>
        <div className="underline font-medium">
          <p>Front-End Proficiencies</p>
        </div>
        <div className=" ">
          <ul className="list-disc">
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="mt-5 underline font-medium">
          <p>Back-End Proficiencies</p>
        </div>
        <div>
          <ul className="list-disc">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySql & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
