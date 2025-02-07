import { useState, useEffect } from "react";
import "../Components/styles/EventcardStyle.css";
import CrossImg from "../assets/Cross.png";
import Vr from "../assets/EventCardSvg/Vr.png";
import RoboRace from "../assets/EventCardSvg/Robo-Race.png";
import Bits_Bytes from "../assets/EventCardSvg/Bits&Bytes.png";
import Viman from "../assets/EventCardSvg/ArtAeroPlaneModeling.png";
import TreasureHunt from "../assets/EventCardSvg/TreasureHunt.png";
import PopCorn from "../assets/EventCardSvg/PopQuiz.png";
import AiDesign from "../assets/EventCardSvg/AiDesign.png";
import Cricket from "../assets/EventCardSvg/Cricket.png";
import Pirate2 from "../assets/EventCardSvg/Pirate2.png";
import IOTCircuit from "../assets/EventCardSvg/IOT.png";
import Maze from "../assets/EventCardSvg/Maze.png";
import RocketBlueprint from "../assets/EventCardSvg/RocketBlueprint.png";
import PUBG from "../assets/EventCardSvg/PUBG.png";
import Auction from "../assets/EventCardSvg/Auction.png";
import Stonk from "../assets/EventCardSvg/MemeForTrade.png";
import techheist from "../assets/EventCardSvg/techheistbg.png";
import ShareMarket from "../assets/EventCardSvg/MemeShareMarke.png";
import RegisterButton from "./RegisterButton";

const eventsTypes = [
  { id: 1, name: "Tech" },
  { id: 2, name: "Non-Tech" },
  { id: 3, name: "Workshop" },
  { id: 4, name: "Open R" },
  { id: 5, name: "View More..." },
];

// Event data
const events = [
  {
    id: 1,
    category: "Workshop",
    title: "IOT Workshop",
    img: IOTCircuit,
    details:
      "Dive into the world of IoT at Prakarsh25 with an engaging hands-on workshop! Master sensors like distance sensors and bring your ideas to life with real-time applications.",
  },
  {
    id: 2,
    category: "Workshop",
    title: "The Art Of Aero Modelling",
    img: Viman,
    details:
      "Dive into the world of aerodynamics and innovation! Join our hands-on workshop where you’ll learn to design and build an RC plane from scratch.",
  },
  {
    id: 3,
    category: "Tech",
    title: "Robo Race",
    img: RoboRace,
    details:
      "Unleash your RC car’s potential on a dynamic track filled with thrilling hurdles, sharp turns, and speed challenges!",
  },
  {
    id: 4,
    category: "Tech",
    title: "Bits and Bytes",
    img: Bits_Bytes,
    details:
      "“Bits and Bytes” takes you through three thrilling stages! Kick off with a brain-teasing IT and CS quiz, step up to the challenge of programming charades, then dive into a high-stakes auction to build the ultimate virtual system.",
  },
  {
    id: 5,
    category: "Tech",
    title: "Designverse with AI",
    img: AiDesign,
    details:
      "Step into an exciting three-round creative showdown! Design a stunning logo, generate mesmerizing AI visuals based on prompts, and craft a striking advertisement banner while delivering a persuasive pitch.",
  },
  {
    id: 6,
    category: "Tech",
    title: "Trade X- Tech and more",
    img: Stonk,
    details:
      "Experience the thrill of trading in our unique technology-driven event! Compete in teams, answer tech-centric questions to strategically boost your share prices, and emerge as the ultimate market leader with the highest shares.",
  },
  {
    id: 7,
    category: "Tech",
    title: "TECH HEIST",
    img: techheist,
    details:
      "Break the Code: Embark on a pulse-pounding spy-themed mission where elite teams of four face off in a race against time. Crack complex codes, debug challenging programs, outsmart mind-bending logic puzzles, and decrypt hidden messages.",
  },
  {
    id: 8,
    category: "Tech",
    title: "CADATHON",
    img: RocketBlueprint,
    details:
      "Gear up for CADATHON 2025! Begin with an expert lecture to gain insights and sharpen your skills in AutoCAD (2D) and Fusion 360 (3D). Then, dive into an exciting competition where your creativity and innovation will take center stage.",
  },
  {
    id: 9,
    category: "Tech",
    title: "Google Chase: The Ultimate Treasure Hunt",
    img: TreasureHunt,
    details:
      "Embark on an adventurous campus-wide quest to collect the letters G-O-O-G-L-E by solving tech and non-tech challenges at each checkpoint. With immunity pins, lucky draws, and bonus cards adding twists, this high-energy treasure hunt ensures fun, teamwork, and excitement at every step!",
  },
  {
    id: 10,
    category: "Tech",
    title: "¢rypto $howdown",
    img: ShareMarket,
    details:
      "Join CryptoShowdown 2025, the ultimate event for crypto enthusiasts, traders, and innovators. Explore bold strategies, cutting-edge ideas, and the future of digital finance. Trade dummy currencies to make real money.",
  },
  {
    id: 11,
    category: "Tech",
    title: "Stellar Cosmos",
    details:
      "“Empty Epsilon” is a technical event where teams compete in a virtual space combat simulator, promoting teamwork, strategy, and quick thinking.",
  },
  {
    id: 12,
    category: "Tech",
    img: Vr,
    title: "The Ultimate VR Experience",
    details:
      "Dive into a whole new dimension with The Ultimate VR Experience! Explore a custom-designed game that combines immersive virtual reality with interactive gameplay, offering participants a thrilling, cutting-edge adventure like no other!",
  },
  {
    id: 13,
    category: "Tech",
    title: "Civil Bridge Event",
    details:
      "Cream sticks? For bridges? Get ready for Brawl Bridge! Teams race to build the most amazing structures, then watch the chaos unfold as they face the ultimate test of strength. Creativity vs. destruction – who will reign supreme?",
  },
  {
    id: 14,
    category: "NonTech",
    title: "Box Cricket",
    img: Cricket,
    details:
      "Step into the adrenaline-filled event of Box Cricket at PRAKARSH 2025! Experience the thrill of fast-paced cricket in a compact arena where strategy meets action.",
  },
  {
    id: 15,
    category: "ESports",
    title: "Valorant Showdown 3.0",
    details:
      "“Take the Stage, Claim the Title.” Gear up for the ultimate showdown in our Valorant Tournament, where strategy meets skill in Riot Games’ fast-paced tactical shooter.",
    contact: {
      name: "Atul",
      phone: "90164 61838",
    },
  },
  {
    id: 16,
    category: "ESports",
    title: "FREE FIRE TECH SHOWDOWN",
    details:
      "Where Gamers Rise and Champions Rule! An Event where you can compete against fellow enthusiasts in exciting Free Fire matches and win exciting prizes and cash rewards for your skills.",
    contact: {
      name: "Atul",
      phone: "90164 61838",
    },
  },
  {
    id: 17,
    category: "NonTech",
    title: "POPCORN QUIZZY",
    img: PopCorn,
    details:
      "FUN, BRAIN, SMILE ACTION!! GET READY TO BRING YOUR A-GAME TO POPCORN QUIZZY, WHERE EVERY QUESTION IS A BLOCKBUSTER AND EVERY BUZZ IS A HIT!",
  },
  {
    id: 18,
    category: "NonTech",
    img: Auction,
    title: "IPL Auction",
    details:
      "“Think, Bid, Win: Step into the Excitement of IPL Auction Strategy!” Experience the thrill of cricket strategy and team-building at our IPL Auction Challenge!",
  },
  {
    id: 19,
    category: "NonTech",
    title: "Infinity Quest",
    img: Pirate2,
    details:
      "“A treasure hunt to the universe.” Get ready for “Infinity Quest,” an electrifying Marvel-themed treasure hunt with an engineering twist!",
  },
  {
    id: 20,
    category: "ESports",
    title: "BGMI Conquest",
    img: PUBG,
    details:
      "Land. Fight. Dominate. The Battleground is Yours! The battle begins at BGMI, where warriors collide in an intense fight for survival!",
    contact: {
      name: "Noor",
      phone: "7861934693",
    },
  },
  {
    id: 21,
    category: "NonTech",
    title: "Midnight Mystery",
    img: Maze,
    details:
      "“Face the dark, Escape the maze, Conquer the Mystery.” Step into a world of mystery and darkness with Challenges! This non-tech event is designed to test your instincts, teamwork, and problem-solving skills.",
  },
  {
    id: 22,
    category: "NonTech",
    title: "Pickleball",
    img: "Hi",
    details:
      "“💥 Get ready for fast-paced rallies, fierce competition, and an electric atmosphere as teams battle it out for pickleball supremacy! This doubles-only tournament is open to all skill levels—just pure competition and skill. Whether you're a seasoned pro or a weekend warrior, grab a partner and showcase your teamwork, strategy, and power on the court! 🏆🔥",
  },
  {
    id: 23,
    category: "OpenR",
    title: "OpenR",
    img: "Hi",
    details:
      "“OpenR",
  },
];

export default function EventCard() {
  const [selectedEvent, setSelectedEvent] = useState(null); // Track selected event
  const [filter, setFilter] = useState("All"); // Track current filter
  const savedEventType = localStorage.getItem("eventname");

  useEffect(() => {
    setFilter(savedEventType || "All");
    document.getElementById(savedEventType)?.focus();
  }, [savedEventType]);

  // Show event details
  const showCardDetails = (eventId) => {
    setSelectedEvent(eventId);
  };

  // Hide event details
  const hideCardDetails = () => {
    setSelectedEvent(null);
  };

  // Filter events based on category
  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);

  // Find selected event details
  const selectedEventDetails = events.find((event) => event.id === selectedEvent);

  return (
    <>
      <div className="container1">
        {/* Filter Buttons */}
        <div className="button-wrapper1">
          <button id="All" onClick={() => setFilter("All")}>All</button>
          <button id="Tech" onClick={() => setFilter("Tech")}>Tech Events</button>
          <button id="NonTech" onClick={() => setFilter("NonTech")}>Non-Tech Events</button>
          <button id="ESports" onClick={() => setFilter("ESports")}>E-Sports</button>
          <button id="Workshop" onClick={() => setFilter("Workshop")}>Workshop/Hands-On</button>
          <button id="OpenR" onClick={() => setFilter("OpenR")}>Open R</button>
        </div>

        {/* Event Cards */}
        <div className="card-container">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`card c${event.id} ${event.category}`}
              onClick={() => showCardDetails(event.id)}
            >
              <h2>{event.title}</h2>
            </div>
          ))}
        </div>

        {/* Event Details Modal */}
        {selectedEvent && selectedEventDetails && (
          <div className="cardDetails">
            <div className="animated-border-box-glow"></div>
            <div className="animated-border-box">
              <img
                src={CrossImg}
                className="cross"
                alt="Close"
                onClick={hideCardDetails}
              />
              {selectedEventDetails.img && (
                <img
                  src={selectedEventDetails.img}
                  className={`event-${selectedEvent}`}
                  alt=""
                />
              )}
              <h3>{selectedEventDetails.details}</h3>
              {selectedEventDetails.contact && (
                <div className="contact-info">
                  <p>For further details contact:</p>
                  <p>
                    {selectedEventDetails.contact.name} : {selectedEventDetails.contact.phone}
                  </p>
                </div>
              )}
              <RegisterButton className="register" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
