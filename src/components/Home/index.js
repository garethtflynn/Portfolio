import React from "react";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div class='bg-black w-full h-screen flex flex-col justify-center items-center'>
      <div>
        <h1 class='text-[#fef2f2] text-6xl	md:text-7xl'>Gareth Flynn</h1>
      </div>
      <div class='mt-5'>
        <p class='text-[#fef2f2] text-2xl'>Web Developer</p>  
      </div>
      <div class='mt-5'>
       <Link to='/work'>
         <p class='text-[#fef2f2] hover:opacity-50 text-xl'>Enter Site</p>
       </Link>
      </div>
    </div>
  );
}

export default Home;
