"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
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
            quantity: 10,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        number: {
          value: 30, // jumlah partikel yang ada secara default
        },
        color: {
          value: "#ff0000", // warna partikel (merah)
        },
        links: {
          enable: true,
          distance: 200,
          color: "#ffffff",
          width: 3, // warna garis penghubung partikel (putih)
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 4, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute w-full -z-1 h-screen"
      id={props.id}
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesComponent;
