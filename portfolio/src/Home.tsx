import React, { useMemo } from "react";
import { type Container as ParticlesContainer } from "@tsparticles/engine";
import { type ISourceOptions } from '@tsparticles/engine'
import Showcase from './Showcase';
import './Home.css';
import { InitContext } from './InitContext';
import Particles from '@tsparticles/react';
import options from './particles';

function Home() {
  const context = React.useContext(InitContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a InitContextProvider");
  }

  const init = context.init;

  const particlesLoaded = async (container?: ParticlesContainer): Promise<void> => {
    console.log(container);
  };

  return (
    <>
      if {init} {
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      }
      <div className="home">
        <Showcase />
      </div>
    </>
  );
}

export default Home;