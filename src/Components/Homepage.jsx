// import Navbar from "./Navbar";
import Star from "./Star";
import Timeline from "./Timeline";
import Timer from "./Timer";
import TeamSection from "./TeamSection";
import Event_Random from "./Event_Random";
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import HeroSection from "./HeroSection";
import { useEffect, useRef } from "react";
import { Rive } from "@rive-app/canvas";
import "./styles/Homepage.css";
import backgroundStars from "../assets/Stars.png";

export default function Homepage() {
    const solarref = useRef(null);
    useEffect(() => {
        const canvas = document.getElementById("canvasSolarSystemAlignment");
        if (canvas) {
            const s = new Rive({
                src: '/SolarSystem2.riv',
                canvas: canvas,
                autoplay: true,
                stateMachines: "State Machine 1",
                onLoad: function () {
                    s.resizeDrawingSurfaceToCanvas();
                },
            });
        }
    }, []);
    
    return (
        <>
            <HeroSection />
             <div className="homepage-container">
                <img src={backgroundStars} className="backgroundStars" alt="#" />
                <div className="SolarSystemBackground"><canvas id="canvasSolarSystemAlignment" ref={solarref}>
                    </canvas>
                    </div> 
                
                <Timer />

                {/* Content Sections */}
                <div id="events-section">
                    <Event_Random />
                </div>
                <div id="timeline">
            <div className="co1">  
            <div className="name">TIME LINE</div>
            </div>
                    <Timeline />
                </div>
                <div id="team-section">
                    <TeamSection />
                </div>
                <Sponsor />
</div>
                <Footer />
        </>
    );
}
