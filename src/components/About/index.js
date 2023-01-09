import React from "react";
import headShot from "../../assets/headshotSmall.jpg";

function About() {
  return (
    <div name="about" class="w-full h-screen bg-black">
      <div class="flex flex-col md:flex-row justify-center items-center w-full h-screen">
        <img src={headShot} alt="headshot" class="w-52 md:w-96"></img>
        <p class="p-5 w-screen md:w-3/12 text-slate-50 italic">
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
