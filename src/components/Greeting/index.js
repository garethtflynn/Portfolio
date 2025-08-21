import React from "react";
import headShot from "../../assets/headshotSmall.jpg";

function Greeting() {
  return (
    <div name="greeting" class="w-full min-h-screen bg-black md:grid grid-cols-2 place-content-center">
      <div class="flex flex-col justify-center p-9 bg-black w-full h-full pt-20 text-[#fef2f2]">
        <p class="text-lg">Hi there, my name is</p>
        <p class="text-7xl">Gareth Flynn</p>
        <br></br>
        <div class="flex justify-between">
          <p class="text-lg">
            I'm a Full-Stack Web Developer with a background in psychology and
            communications, and a certificate in Full Stack Web Development from
            the Georgia Institute of Technology Coding Bootcamp. I'm passionate
            about building user-centric applications with a focus on innovative
            problem-solving and seamless user experiences.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={headShot} alt="headshot" class="w-64 md:w-96"></img>
      </div>
    </div>
  );
}

export default Greeting;
