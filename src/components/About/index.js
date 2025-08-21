import React from "react";
import headShot from "../../assets/headshotSmall.jpg";

function About() {
  return (
    <div name="about" class="w-full sm:h-fit md:h-screen bg-black sm:pt-16">
      <div class="flex justify-center">
        <p class="text-[#fef2f2] text-3xl underline underline-offset-4 pb-12">
          About
        </p>
      </div>
      <div class="w-full md:pt-16 flex flex-col justify-center items-center lg:flex-row lg:pl-10 lg:justify-center lg:items-center">
        <img src={headShot} alt="headshot" class="w-64 md:w-96"></img>
        <p class="p-5 pt-12 px-10 w-screen text-[#fef2f2] italic">
          Whats up! As you might already know, I'm Gareth. I'm a Full-Stack Web
          Developer with a background in psychology and communications, and a
          certificate in Full Stack Web Development from the Georgia Institute
          of Technology Coding Bootcamp. I'm passionate about building user-centric
          applications with a focus on innovative problem-solving and seamless
          user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
