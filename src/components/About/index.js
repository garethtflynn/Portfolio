import React from "react";
import headShot from "../../assets/headshotSmall.jpg";

function About() {
  return (
    <div name="about" class="w-full h-screen bg-black pt-16">
      <div class="flex justify-center ">
        <p class="text-slate-50 text-3xl underline underline-offset-4">
          About
        </p>
      </div>
      <div class="w-full pt-16 flex flex-col justify-center items-center lg:flex-row lg:pl-10 lg:justify-center lg:items-center">
        <img src={headShot} alt="headshot" class="w-64 md:w-96"></img>
        <p class="p-5 px-10 w-screen text-slate-50 italic">
          Adaptable Full-Stack Web Developer with degrees in psychology and
          communication. Recently earned a certificate in full stack development
          from the Georgia Institute of Technology gaining skills in Javascript,
          CSS, Html, and responsive web design. Overall, seen as a great team
          player who is always keen to learn, and willing to go the extra mile.
          When it comes to projects I work on, my goal is to always have the end
          user in mind in order to give them the best experience possible. With
          my skills and knowledge, I would be a great asset to any team, and I
          am looking forward to using those to be a part of one that will create
          unforgettable experiences for all kinds of users.
        </p>
      </div>
    </div>
  );
}

export default About;
