import React from "react";



function Home() {
  return (
    <div class='bg-black w-full h-screen flex flex-col justify-center items-center'>
      <div>
        <h1 class='text-slate-50 text-5xl'>Gareth Flynn</h1>
      </div>
      <div class='mt-5'>
        <p class='text-slate-50'>Web Developer</p>  
      </div>
      <div class='mt-5'>
        <a href='/portfolio/work' class='text-slate-50 hover:opacity-50'>Enter Site</a>
      </div>
    </div>
  );
}

export default Home;
