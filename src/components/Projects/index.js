import React from "react";

const Projects = ({ props }) => {
  return (
    <div class="text-amber-50">
      {props.map((project, id) => {
        return (
          <div class='grid sm:grid-cols-1 md:grid-cols-2 pb-32'>
            <div key={id} class="group container mx-auto content-div">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wider">
                  {project.name}
                </span>
                <p className="text-sm pt-6">{project.description}</p>
                <div className="flex py-8 gap-2">
                  {project.icons.map((icon, index) => (
                    <span>{icon}</span>
                  ))}
                </div>
                <div class='flex'>
                <a href={project.github} target="_blank" rel="noreferrer">
                      <p class="px-2 py-1 m-2 font-bold text-lg hover:underline hover:underline-offset-4 hover:scale-105 decoration-2">
                        Code
                      </p>
                    </a>
                    <p class='px-2 py-1 m-2 font-bold text-lg'>/</p>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <p className="px-2 py-1 m-2 font-bold text-lg hover:scale-105 hover:underline hover:underline-offset-4 decoration-2">
                        Live
                      </p>
                    </a>
                </div>
              </div>
            </div>
            <div class='flex justify-center sm:p-5'>
              <img src={project.image} width={project.size} alt={project.alt}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
