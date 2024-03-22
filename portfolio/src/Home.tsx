import React from "react";
import Particles from '@tsparticles/react';

import { InitContext } from './InitContext';
import options from './particles';
import Showcase from './Showcase';

import './App.css';

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
      <div className="forest-background">
        <Showcase />
      </div>
    </>
  );
}

export default Home;