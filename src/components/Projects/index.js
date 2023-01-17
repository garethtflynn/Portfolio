import React from "react";
// import Clairese from " "
// import Lyfbro from " "
// import MusicPilot from ""
// import WeatherBig from "../../assets/weatherDashboardBig.PNG"
// import WeatherMobile from "../../assets/weatherDashboardMobile.PNG"
// import Password from "" 



function Projects() {
  return (
    <div name='projects' class="bg-black w-full h-screen pt-20 text-slate-50 underline underline-offset-4 text-3xl">
      <div class='flex justify-center'>
        <p class='text-slate-50 underline underline-offset-4 text-3xl'>Projects</p>
      </div>
      <div class='grid grid-cols-2'>
        <div>
          <p>Weather Dashboard</p>
        </div>
        <div>
          {/* <img src='' alt='weatherBig'></img> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
