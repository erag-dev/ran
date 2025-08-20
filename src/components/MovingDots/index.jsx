import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim" 


const MovingDots = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            }).then(() => {
            setInit(true);
        });
    }, []);


    const particlesLoaded = (container) => {
        // console.log(container);
    };

    const options = useMemo(() => ({
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                },
                onHover: {
                    enable: false,
                },
            },
        },
        particles: {
            number: {
                density: {
                    enable: true,
                    valueArea: 3000,
                },
                value: 100,
            },
            color: {
                value: "#FF4D00",
            },
            opacity: {
                value: 0.2,
                random: true,
            },
            size: {
                value: { 
                    min: 1,
                    max: 4 
                },
                random: true,
                anim: {
                    enable: true,
                    speed: 5,
                    sizeMin: 0,
                    sync: false
                },
            },
            links: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "top",
                random: true,
                straight: false,
                outModes: {
                    default: "out",
                },
                attract:{
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            shape: {
                type: "circle",
            },
        },
        detectRetina: true,
    }), [],);

    if(init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default MovingDots;