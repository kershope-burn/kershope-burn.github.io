import React from "react";
import Particles from '@tsparticles/react';

import { InitContext } from '../utils/InitContext';
import options from '../utils/particles';
import Showcase from '../components/Showcase';

import '../styles/App.css';

function Home() {
  const context = React.useContext(InitContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a InitContextProvider");
  }

  const init = context.init;

  return (
    <>
      {init} {
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