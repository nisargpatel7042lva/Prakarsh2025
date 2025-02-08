import IOTCircuit from "../assets/EventCardSvg/IOT.png";
import Viman from "../assets/EventCardSvg/ArtAeroPlaneModeling.png";
import RoboRace from "../assets/EventCardSvg/Robo-Race.png";
import Bits_Bytes from "../assets/EventCardSvg/Bits&Bytes.png";
import AiDesign from "../assets/EventCardSvg/AiDesign.png";
import Stonk from "../assets/EventCardSvg/MemeForTrade.png";
import techheist from "../assets/EventCardSvg/techheistbg.png";
import RocketBlueprint from "../assets/EventCardSvg/RocketBlueprint.png";
import TreasureHunt from "../assets/EventCardSvg/TreasureHunt.png";
import ShareMarket from "../assets/EventCardSvg/MemeShareMarke.png";
import PopCorn from "../assets/EventCardSvg/PopQuiz.png";
import Auction from "../assets/EventCardSvg/Auction.png";
import PUBG from "../assets/EventCardSvg/PUBG.png";
import Cricket from "../assets/EventCardSvg/Cricket.png";
import Maze from "../assets/EventCardSvg/Maze.png";
import Pirate2 from "../assets/EventCardSvg/Pirate2.png";

import img_IOTWorkshop from "../assets/Event Logos/Workshop & Mega Event/IOT Workshop.png";
import img_Aeromodeling from "../assets/Event Logos/Workshop & Mega Event/The Art of Aero Modelling.png";
import img_RoboRace from "../assets/Event Logos/Tech/RoboRace.png";
import img_bitsbits from "../assets/Event Logos/Tech/Bits&Byte.png";
import img_DesignversewithAI from "../assets/Event Logos/Tech/Designverse withAI.png";
import img_TradeX from "../assets/Event Logos/Tech/TradeX.png";
import img_TechHeist from "../assets/Event Logos/Tech/TechHeist.png";
import img_Cadathon from "../assets/Event Logos/Tech/Cadathon.png";
import img_GoogleChase from "../assets/Event Logos/Tech/GoogleChase.png";
import img_CryptoShowdown from "../assets/Event Logos/Tech/CryptoShowdown.png";
import img_StellarCosmos from "../assets/Event Logos/Tech/StellarCosmos.png";
import img_VR from "../assets/Event Logos/Tech/VR.png";
import img_BrawlBridge from "../assets/Event Logos/Tech/BrawlBridge.png";

import img_BoxCricketLeague from "../assets/Event Logos/Non-Tech/Box Cricket League.png";
import img_ValorantShowdown from "../assets/Event Logos/Non-Tech/Valorant Showdown.png";
import img_FreeFireClashofChampions from "../assets/Event Logos/Non-Tech/Free Fire Clash of Champions.png";
import img_PopcornQuizzy from "../assets/Event Logos/Non-Tech/Popcorn Quizzy.png";
import img_IPLAuction from "../assets/Event Logos/Non-Tech/IPL Auction.png";
import img_InfiniteQuest from "../assets/Event Logos/Non-Tech/Infinite Quest.png";
import img_BGMIConquest from "../assets/Event Logos/Non-Tech/BGMI Conquest.png";
import img_MidnightMystery from "../assets/Event Logos/Non-Tech/Mindnight Mystery.png";
import img_PickleballPalooz from "../assets/Event Logos/Non-Tech/Pickleball Palooz.png";

import img_OpenR from "../assets/Event Logos/Workshop & Mega Event/Open-R.png";

const events = [
  {
    id: 1,
    category: "Workshop",
    title: "IOT Workshop",
    img: IOTCircuit,
    image: img_IOTWorkshop,
    details:
      "Dive into the world of IoT at Prakarsh25 with an engaging hands-on workshop!",
  },
  {
    id: 2,
    category: "Workshop",
    title: "The Art Of Aero Modelling",
    img: Viman,
    image: img_Aeromodeling,
    details: "Learn to design and build an RC plane from scratch.",
  },
  {
    id: 3,
    category: "Tech",
    title: "Robo Race",
    img: RoboRace,
    image: img_RoboRace,
    details:
      "Unleash your RC car’s potential on a dynamic track filled with thrilling hurdles!",
  },
  {
    id: 4,
    category: "Tech",
    title: "Bits and Bytes",
    img: Bits_Bytes,
    image: img_bitsbits,
    details:
      "Compete in three thrilling stages, including IT quizzes and programming charades!",
  },
  {
    id: 5,
    category: "Tech",
    title: "Designverse with AI",
    img: AiDesign,
    image: img_DesignversewithAI,
    details: "Step into a creative AI-driven design challenge!",
  },
  {
    id: 6,
    category: "Tech",
    title: "Trade X- Tech and more",
    img: Stonk,
    image: img_TradeX,
    details: "Experience the thrill of trading in our tech-driven event!",
  },
  {
    id: 7,
    category: "Tech",
    title: "TECH HEIST",
    img: techheist,
    image: img_TechHeist,
    details: "Break the Code: A pulse-pounding spy-themed mission!",
  },
  {
    id: 8,
    category: "Tech",
    title: "CADATHON",
    img: RocketBlueprint,
    image: img_Cadathon,
    details: "Sharpen your CAD skills in an exciting design competition!",
  },
  {
    id: 9,
    category: "Tech",
    title: "Google Chase: The Ultimate Treasure Hunt",
    img: TreasureHunt,
    image: img_GoogleChase,
    details: "Solve tech and non-tech challenges in a campus-wide quest!",
  },
  {
    id: 10,
    category: "Tech",
    title: "¢rypto $howdown",
    img: ShareMarket,
    image: img_CryptoShowdown,
    details: "Trade dummy currencies in an exciting crypto-based challenge!",
  },
  {
    id: 11,
    category: "NonTech",
    title: "Box Cricket League",  
    img: Cricket,
    image: img_BoxCricketLeague,
    details: "Experience fast-paced cricket action in a compact arena!",
  },
  {
    id: 12,
    category: "NonTech",
    title: "POPCORN QUIZZY",
    img: PopCorn,
    image: img_PopcornQuizzy,
    details: "A fun-filled blockbuster quiz event!",
  },
  {
    id: 13,
    category: "NonTech",
    title: "IPL Auction",
    img: Auction,
    image: img_IPLAuction,
    details: "Think, Bid, Win in our IPL auction strategy event!",
  },
  {
    id: 14,
    category: "ESports",
    title: "Valorant Showdown 3.0",
    image: img_ValorantShowdown,
    details: "Compete in the ultimate Valorant tournament!",
  },
  {
    id: 15,
    category: "ESports",
    title: "Free Fire Tech Showdown",
    image: img_FreeFireClashofChampions,
    details: "Battle it out in Free Fire for exciting prizes!",
  },
  {
    id: 16,
    category: "ESports",
    title: "BGMI Conquest",
    img: PUBG,
    image: img_BGMIConquest,
    details: "Survive and dominate in the ultimate battle royale!",
  },
  {
    id: 17,
    category: "NonTech",
    title: "Midnight Mystery",
    img: Maze,
    image: img_MidnightMystery,
    details: "Solve puzzles in a thrilling late-night mystery challenge!",
  },
  {
    id: 18,
    category: "OpenR",
    title: "Open-R",
    formname: "Problem Statement",
    formlink: "",
    link: "https://lu.ma/k7qw8bhs",
    image: img_OpenR,
    details: "A special Open-R workshop event!",
  },
];

export default events;
