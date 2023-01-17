import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./config/particles-config";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
    />
  );
}

export default ParticlesBackground;
