import Particles from "react-tsparticles";
import type { ISourceOptions } from "tsparticles-engine";

export default function Particle() {
  const options: ISourceOptions = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          area: 1500, 
        },
      },
      links: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right",
        enable: true,
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        value: { min: 0.05, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.05,
          sync: false,
        },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 1,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" options={options} />;
}
