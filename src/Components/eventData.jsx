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
import Pirate2 from "../assets/EventCardSvg/Pirate2.png";
import stellar from "../assets/EventCardSvg/Moonknight.png";
import brawl from "../assets/EventCardSvg/brawl.svg";
import Vr from "../assets/EventCardSvg/Vr.png";
import PickleBall from "../assets/EventCardSvg/PickleBalls.png";
import Midnight from "../assets/EventCardSvg/MidnightMystry.png";
import FreeFire from "../assets/EventCardSvg/FreeFire.png";
import Valorant from "../assets/EventCardSvg/Valorant.png"

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

import img_BoxCricketLeague from "../assets/Event Logos/Non-Tech/BoxCricketLogo.png";
import img_FreeFireClashofChampions from "../assets/Event Logos/Non-Tech/Free Fire Clash of Champions.png";
import img_PopcornQuizzy from "../assets/Event Logos/Non-Tech/Popcorn Quizzy.png";
import img_IPLAuction from "../assets/Event Logos/Non-Tech/IPL Auction.png";
import img_InfiniteQuest from "../assets/Event Logos/Non-Tech/Infinite Quest.png";
import img_BGMIConquest from "../assets/Event Logos/Non-Tech/BgmiLogo.png";
import img_MidnightMystery from "../assets/Event Logos/Non-Tech/Mindnight Mystery.png";
import img_PickleballPalooz from "../assets/Event Logos/Non-Tech/Pickleball Palooz.png";
import img_Valorant from "../assets/Event Logos/Non-Tech/ValorantLogo.png";

import img_OpenR from "../assets/Event Logos/Workshop & Mega Event/Open-R.png";

const events = [
  {
    id: 1,
    category: "Workshop",
    title: "IOT : THE CONNECTION LAB ",
    img: IOTCircuit,
    image: img_IOTWorkshop,
    details:
      `" Gateway to modern innovative
world "`,
    discription:
      `Discover the world of IoT (Internet of Things) and see how everyday devices
        connect and communicate! In this expert-led workshop, you'll learn about the latest advancements in
        smart technology and get hands-on experience by designing and simulating your own sensor-based circuit—no
        prior knowledge needed!`,
  },
  {
    id: 2,
    category: "Workshop",
    title: "Aero Artistry",
    img: Viman,
    image: img_Aeromodeling,
    details:`"Build It. Fly It. Own the Sky!"`,


    discription:
    `Dive into the world of aerodynamics
and innovation! Join our hands-on
workshop where you'll learn to design
and build an RC plane from scratch.
Guided by experts, you’ll not only
assemble your own aircraft but also
experience the thrill of flying it.
Whether you’re an enthusiast or a
beginner, this is your chance to explore
the skies and enhance your technical
skills.`,
  },
  {
    id: 3,
    category: "Tech",
    title: "Robo Race",
    img: RoboRace,
    image: img_RoboRace,
    details:
      `"Dominate the Obstacles , Navigate
thru Track! "`,
      discription:
    `Get ready for the ultimate Robo Race
at Prakarsh 25! Bring your RC cars or
autonomous robots and take on our
challenging track filled with hurdles,
ramps, and obstacles.`,
  },
  {
    id: 4,
    category: "Tech",
    title: "Bits and Bytes",
    img: Bits_Bytes,
    image: img_bitsbits,
    details:
     ` "Code, Act, Bid – Build Your Ultimate
Virtual Realm!"`
,
      discription:
    `“Bits and Bytes” takes you through
three thrilling stages! Kick off with a
brain-teasing IT and CS quiz, step up to
the challenge of programming
charades then dive into a high-stakes
auction to build the ultimate virtual
system. Only the smartest strategists
will emerge victorious!`,
  },
  {
    id: 5,
    category: "Tech",
    title: "Designverse with AI",
    img: AiDesign,
    image: img_DesignversewithAI,
    details: `"Merging Creativity, AI, and
Branding"`,
    discription:
    `Step into an exciting three-round
creative showdown! Design a stunning
logo , generate mesmerizing AI visuals
based on prompts , and craft a striking
advertisement banner while delivering
a persuasive pitch. Show off your
innovation, artistry, and presentation skills to claim the ultimate design
crown!🏅 `,
    
  },
  {
    id: 6,
    category: "Tech",
    title: "Trade X- Tech and more",
    img: Stonk,
    image: img_TradeX,
    details: `"Trade. Compete. Dominate. Where
Tech Meets Strategy!
"`,
    discription:
    `Experience the thrill of trading in our
unique technology-driven event!
Compete in teams, answer tech-centric
questions to strategically boost your
share prices, and emerge as the
ultimate market leader with the
highest shares. Let the
smartest team win!
 `,
  },
  {
    id: 7,
    category: "Tech",
    title: "TECH HEIST :Break the code",
    img: techheist,
    image: img_TechHeist,
    details: `"Infiltrate, Solve, Escape!"`,
    discription:
    `Break the Code embark on a pulsepounding spy-themed mission where
elite teams of four face off in a race
against time. Crack complex codes,
debug challenging programs, outsmart
mind-bending logic puzzles, and
decrypt hidden messages.
 `,
  },
  {
    id: 8,
    category: "Tech",
    title: "CADATHON",
    img: RocketBlueprint,
    image: img_Cadathon,
    details:`" From Sketch to Reality – Unleash Your
    Talent ."`,
    discription:
    `Gear up for CADATHON 2025! Begin
with an expert lecture to gain insights
and sharpen your skills in AutoCAD
(2D) and Fusion 360 (3D). Then, dive
into an exciting competition where
your creativity and innovation will take
center stage. Don’t miss this ultimate
platform to shine! `,
  },
  {
    id: 9,
    category: "Tech",
    title: "Google Chase: The Ultimate Treasure Hunt",
    img: TreasureHunt,
    image: img_GoogleChase,
    details: `"Crack the clues, Tackle Thrilling
Challenges, and Collect Tokens to
Claim the Google glory! "`,
    discription:
    `Embark on an adventurous campuswide quest to collect the letters G-O-OG-L-E by solving tech and non-tech
challenges at each checkpoint. With
immunity pins, lucky draws, and bonus
cards adding twists, this high-energy
treasure hunt ensures fun, teamwork,
and excitement at every step!
`,
  },
  {
    id: 10,
    category: "Tech",
    title: "¢rypto $howdown",
    img: ShareMarket,
    image: img_CryptoShowdown,
    details: `"Trade. Conquer. Dominate!🚀🔥"`,
    discription:
    `Join CryptoShowdown 2025, the
ultimate event for crypto enthusiasts,
traders, and innovators. Explore bold
strategies, cutting-edge ideas, and the
future of digital finance. Trade dummy
currencies to make real money`,
  },
  {
    id: 11,
    category: "NonTech",
    title: "Box Cricket League",
    img: Cricket,
    image: img_BoxCricketLeague,
    details: "Experience fast-paced cricket action in a compact arena!",
    discription:
    `Step into the adrenaline-filled event of Box Cricket at PRAKARSH 2025! Experience the thrill of fastpaced cricket in a compact arena where strategy meets action. Gather your team of 5-6 members
showcase your cricketing skills, and compete for glory in this high-energy event. The game will be played
with tennis bat and soft tennis ball. This event will be conducted in the hall. Get ready to hit big, dive
for catches, and enjoy the spirit of the game like never before.`,
  },
  {
    id: 12,
    category: "NonTech",
    title: "POPCORN QUIZZY",
    img: PopCorn,
    image: img_PopcornQuizzy,
    details: "FUN, BRAIN, SMILE ACTION!!",
    discription:
    `GET READY TO BRING YOUR A-GAME TO POPCORN QUIZZY, WHERE EVERY QUESTION IS A BLOCKBUSTER
AND EVERY BUZZ IS A HIT!
GATHER YOUR TEAM OF 4 MEMBERS AND BE READY FOR FACEOFF.
FROM BOLLOYWOOD TADKA TO GEEKY MINDS, WE HAVE GOT IT ALL. READY TO ACE THE CULTURE
TRIVIA OR CRACK THE MYSTERIOUS CLUES IN PICTOGRAPHY CHALLENGE?
YOU CAN BE THE NEXT QUIZ BADSHAH. DON’T MISS OUT-THIS CHANCE TO FLEX YOUR KNOWLEDGE AND
WIN THOSE EXTRA POINTS!
DIL SE JOIN US, BECAUSE YE NAHI KHELA TO PHIR KYA KHELA?`,
  },
  {
    id: 13,
    category: "NonTech",
    title: "IPL Auction",
    img: Auction,
    image: img_IPLAuction,
    details: "Think, Bid, Win in our IPL auction strategy event!",
    discription:
    `Experience the thrill of cricket strategy and team-building at our IPL Auction Challenge! The event kicks
off with two exciting selection rounds: a Google Form MCQ Quiz to test your cricket knowledge and an
Audio-Visual Round featuring iconic IPL moments. The top 10 teams will then enter the grand auction,
where participants use a virtual budget to bid for players and assemble their dream IPL squad.
Evaluations will be done by our Smart Evaluation AI System, ensuring a fair and accurate assessment of
your team's strength and strategy. With a mix of strategy, quick decision-making, and cricket smarts, this
event is all about proving you're the ultimate cricket mastermind!`,
    
  },
  {
    id: 14,
    category: "ESports",
    title: "Valorant Showdown 3.0",
    img :Valorant,
    image: img_Valorant,
    details: `"Take the Stage, Claim the Title."`,
    discription:
    `Gear up for the ultimate showdown in our Valorant Tournament, where strategy meets skill in Riot
Games’ fast-paced tactical shooter. Compete alongside your squad in intense 5v5 battles, showcasing
sharp aim, clever tactics, and teamwork. Whether you’re a seasoned duelist or a strategic sentinel, this is
your chance to prove you’re the MVP. Big plays, clutch moments, and glory awaits`,
  },
  {
    id: 15,
    category: "ESports",
    title: "Free Fire Tech Showdown",
    img: FreeFire,
    image: img_FreeFireClashofChampions,
    details: `"Where Gamers Rise and Champions Rule!"`,
    discription:
    `An Event where you can compete against fellow enthusiasts in exciting Free Fire matches and win
exciting prizes and cash rewards for your skills. Showcase your strategic prowess and tactical abilities.
Connect with other gaming enthusiasts and forge new friendships. Tournament open to all.`,
  },
  {
    id: 16,
    category: "ESports",
    title: "BGMI Conquest",
    img: PUBG,
    image: img_BGMIConquest,
    details: `"Land. Fight. Dominate. The Battleground is Yours!"`,
    discription:
    `The battle begins at BGMI, where warriors collide in an intense fight for survival! Land, loot, and
strategize your way to the top in Prakarsh’s most thrilling gaming event. Outplay, outgun, and outlast
your opponents—only the best will claim victory!`,
  },
  {
    id: 17,
    category: "NonTech",
    title: "Midnight Mystery",
    img: Midnight,
    image: img_MidnightMystery,
    details: `"Outsmart the Room, Outlast the Dark!"`
,
    discription:
    `Step into a world of mystery and darkness thrill with Challenges! This non-tech event is designed to test
your instincts, teamwork, and problem-solving skills. The first round, Escape Room Challenge, will
challenge your intelligence and presence of mind. Those who make it through will enter the Dark Room
& Laser Maze in the final round, where speed, instincts, and agility will determine the ultimate winner.
Do you have what it takes to escape the darkness?`,
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
  {
    id: 19,
    category: "Tech",
    title: "Stellar Cosmos",
    img: stellar,
    image: img_StellarCosmos,
    details: `"Pilot, Strategize, Soar Beyond!"`
    ,
    discription:
    `“Empty Epsilon” is a technical event
where teams compete in a virtual
space combat simulator, promoting
teamwork, strategy, and quick
thinking. `,
  },
  {
    id: 20,
    category: "Tech",
    title: "The Ultimate VR Experience",
    img: Vr,
    image: img_VR,
    details:
    `"Step into the future—immerse, play,
    and explore like never before!🎮"` ,
    discription:
    `The Ultimate VR Experience
Dive into a whole new dimension with
The Ultimate VR Experience! Explore a
custom-designed game that combines
immersive virtual reality with
interactive gameplay, offering
participants a thrilling, cutting-edge
adventure like no other! `,
  },
  
  {
    id: 21,
    category: "Tech",
    title: "Brawl Bridge",
    img: brawl,
    image: img_BrawlBridge,
    details: `"Stick it. Build it. Strengthen it. Who
will conquer the Brawl Bridge?"`,
discription:
    `Cream sticks? For bridges? Get ready
for Brawl Bridge! Teams race to build
the most amazing structures, then
watch the chaos unfold as they face
the ultimate test of strength. Creativity
vs. destruction – who
will reign supreme?  `,
  },
  {
    id: 22,
    category: "NonTech",
    title: "Infinite Quest",
    img: Pirate2,
    image: img_InfiniteQuest,
    details: `“A treasure hunt to the universe.”`,
    discription:
    `Get ready for "Infinity quest," an electrifying Marvel-themed treasure hunt with an engineering
twist! Travel across iconic realms, solving puzzles that challenge your general knowledge.
Assemble your team, test your wit, and channel your inner superhero. The adventure of a
lifetime awaits—only the sharpest minds will claim the ultimate treasure! `,
  },
  {
    id: 23,
    category: "NonTech",
    title: "Pickleball Palooz",
    img: PickleBall,
    image: img_PickleballPalooz,
    details: `"Pickle. Rally. Smash. Conquer. 🎾🔥"`,
    discription:
    `💥 Get ready for fast-paced rallies, fierce competition, and an electric atmosphere as teams battle it out for pickleball supremacy! This doubles-only tournament is open to all skill levels—just pure competition and skill. Whether you're a seasoned pro or a weekend warrior, grab a partner and showcase your teamwork, strategy, and power on the court! 🏆🎾🔥`,
  },
];

export default events;
