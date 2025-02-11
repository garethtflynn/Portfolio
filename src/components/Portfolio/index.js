import React from "react";
import Projects from "../Projects"
import { projectsData } from "../../data/projectsData"

function Portfolio () {
    return (
    <div name='portfolio' className='w-full h-full bg-black text-[#fef2f2] px-6 py-14 z-20'>
        <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='text-center pb-20'>
            <p className='text-[#fef2f2] text-3xl underline underline-offset-4'>Projects</p>
          </div>
          {/* Container for projects */}
          <Projects props={projectsData}/>
        </div>
    </div>
    )
}

export default Portfolio