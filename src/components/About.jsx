import React from "react";
import { Avatar } from "flowbite-react";
import headShot from "../assets/headshot.jpg";

function About() {
  return (
    <div className="w-full h-screen bg-zinc-700">
      <div className="flex flex-wrap gap-2 justify-center">
        <Avatar img={headShot} size="lg" className="mt-5">
          <div className="space-y-1 font-medium dark:text-white">
            <div>Gareth Flynn</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Full-Stack Web Developer
            </div>
          </div>
        </Avatar>
      </div>
      <div className="flex justify-center">
        <p className="mt-5 w-11/12 text-slate-50 italic">
        Adaptable web developer with degrees in psychology and communication. Recently earned a certificate in full stack development from the Georgia Institute of Technology gaining skills in Javascript, CSS, Html, and responsive web design. Overall, seen as a great team player who is always keen to learn, and willing to go the extra mile. When it comes to projects I work on, my goal is to always have the end user in mind in order to give them the best experience possible. With my skills and knowledge, I would be a great asset to any team, and I am looking forward to using those to be a part of one that will create unforgettable experiences for all kinds of users. 
        </p>
      </div>
    </div>
  );
}

export default About;
