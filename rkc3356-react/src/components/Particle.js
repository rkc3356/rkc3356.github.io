import "../App.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticleComponent = () => {

    const options = useMemo(() => {
        return {
            background: {
                color: "#000",
            },
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    repulse: {
                        distance: 75,
                    },
                }
            },
            particles: {
                links: {
                    enable: true,
                },
                move: {
                    enable: true,
                    speed: { min: 1, max: 2 },
                    spin: true,
                },
                size: {
                    value: { min: 1, max: 3 }
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }
                },
                shape: {
                    type: "triangle"
                },
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
}

export default ParticleComponent;