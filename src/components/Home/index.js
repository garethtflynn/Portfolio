import React from "react";



function Home() {
  return (
    <div class='bg-black w-full h-screen flex flex-col justify-center items-center'>
      <div>
        <h1 class='text-amber-50 text-7xl'>Gareth Flynn</h1>
      </div>
      <div class='mt-5'>
        <p class='text-amber-50 text-2xl'>Web Developer</p>  
      </div>
      <div class='mt-5'>
        <a href='/portfolio/work' class='text-amber-50 hover:opacity-50 text-xl'>Enter Site</a>
      </div>
    </div>
  );
}

export default Home;
