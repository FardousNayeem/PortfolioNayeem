import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import type { ISourceOptions } from "tsparticles-engine";

export default function Particle() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 60,

    particles: {
      number: {
        value: 200,
        density: { enable: true, area: 1500 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },

      opacity: {
        value: { min: 0.0, max: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.05,
          sync: false,
        },
      },

      size: { value: 1.5 },

      move: {
        enable: true,
        direction: "right",
        speed: 0.05,
        outModes: { default: "out" },
      },

      links: {
        enable: false,
      },
    },

    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        push: { quantity: 1 },
      },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}
