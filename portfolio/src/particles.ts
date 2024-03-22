import type { ISourceOptions } from '@tsparticles/engine';

const options: ISourceOptions = {
  key: "techglow",
  name: "Tech Glow",
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#e0ffff",
    },
    shape: {
      type: "square",
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
    move: {
      enable: true,
      speed: {
        min: 0.1,
        max: 1,
      },
    },
    links: {
      color: {
        value: "#99ffff",
      },
      distance: 80,
      enable: true,
      triangles: {
        enable: true,
        opacity: 0.1,
      }
    }
  },
};

export default options;