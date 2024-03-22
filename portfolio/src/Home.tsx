import React from "react";
import Particles from '@tsparticles/react';

import { InitContext } from './InitContext';
import options from './particles';
import Showcase from './Showcase';

import './Home.css';

function Home() {
  const context = React.useContext(InitContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a InitContextProvider");
  }

  const init = context.init;

  return (
    <>
      if {init} {
        <Particles
          id="tsparticles"
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