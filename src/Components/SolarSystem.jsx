import React, { useEffect } from 'react';
import './styles/SolarSystem.css';  // Make sure to create this CSS file
import sunImage from '../assets/sun.png';

const SolarSystem = () => {
    useEffect(() => {
        const createStars = () => {
            const container = document.querySelector(".solar-system-background");
            for (let i = 0; i < 1000; i++) {
                const star = document.createElement("div");
                star.className = "star";
                star.style.width = ".1px";
                star.style.height = ".1px";
                star.style.top = Math.random() * 100 + "%";
                star.style.left = Math.random() * 100 + "%";
                container.appendChild(star);
            }
        };
        createStars();
    }, []);

    return (
        <div className="solar-system-background">
            <div className="solar-system">
                <div className="sun">
                    <img src={sunImage} alt="Sun" />
                </div>
                <div className="mercury"></div>
                <div className="venus"></div>
                <div className="earth">
                    <div className="moon"></div>
                </div>
                <div className="mars"></div>
                <div className="jupiter"></div>
                <div className="saturn"></div>
                <div className="uranus"></div>
                <div className="neptune"></div>
                <div className="pluto"></div>
            </div>
        </div>
    );
};


export default SolarSystem;
