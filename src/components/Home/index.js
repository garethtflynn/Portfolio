import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black w-full h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-[#fef2f2] text-6xl md:text-7xl font-bold opacity-0 animate-fade-in-up">
        Gareth Flynn
      </h1>

      <p className="text-[#fef2f2] text-2xl mt-5 opacity-0 animate-fade-in-up animation-delay-200">
        Web Developer
      </p>

      <div className="mt-8 opacity-0 animate-fade-in-up animation-delay-400">
        <Link to="/work">
          <p className="text-[#fef2f2] text-xl relative group cursor-pointer">
            Enter Site
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fef2f2] group-hover:w-full transition-all duration-300"></span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
