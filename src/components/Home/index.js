import React from "react";
import ParticlesBackground from "../Particles";



function Home() {
  return (
    <div class='bg-black w-full h-screen flex flex-col justify-center items-center'>
     <ParticlesBackground/>
      <div>
        <h1 class='text-slate-50 text-7xl'>Gareth Flynn</h1>
      </div>
      <div class='mt-5'>
        <p class='text-slate-50 text-xl'>Web Developer</p>  
      </div>
      <div class='mt-5'>
        <a href='/portfolio/work' class='text-slate-50 hover:opacity-50'>Enter Site</a>
      </div>
    </div>
  );
}

export default Home;
