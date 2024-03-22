import React, { useMemo } from "react";
import { type Container as ParticlesContainer } from "@tsparticles/engine";
import { type ISourceOptions } from '@tsparticles/engine'
import Showcase from './Showcase';
import './Home.css';
import { InitContext } from './InitContext';
import Particles from '@tsparticles/react';

function Home() {
  const context = React.useContext(InitContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a InitContextProvider");
  }

  const init = context.init;

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

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