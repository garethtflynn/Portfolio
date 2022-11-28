import React from "react";
import {Avatar} from "flowbite-react"
import headShot from "../assets/headshot.jpg"

function About() {
  return (
    <div className="w-full h-screen bg-zinc-700">
      <div className="flex flex-wrap gap-2">
        <Avatar img= {headShot} size="xl"/>
      </div>
      <div>
        <p>Gareth Flynn</p>
        <p>Full-Stack Web Developer</p>
      </div>
      <div>
        <p>Recently earned a certificate from the Georgia Tech Full-Stack Web Development Bootcamp. With my skills and knowledge, I would be a great asset to any team, and I am looking forward to using those to be a part of one that will create unforgettable experiences for all kinds of users.  </p>
      </div>
    </div>
  );
}

export default About;
