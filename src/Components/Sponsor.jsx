import React from "react";
import "./styles/sponsor.css"; // Import the CSS file
import pmc from "../assets/sponsors/pmc.svg";
import IMS from "../assets/sponsors/IMS.svg";
import RadhikaJewellers from "../assets/sponsors/RadhikaJewellers.svg";
import SparkToday from "../assets/sponsors/SparkToday.svg";
import GamerzRig from "../assets/sponsors/GamerzRig.svg";
import AtlantaLogo from "../assets/sponsors/AtlantaLogo.svg";
import Gamerzclan from "../assets/sponsors/Gamerzclan.svg";
import SwoldierFitness from "../assets/sponsors/SwoldierFitness.svg";

const Sponsor = () => {
  return (
    <div className="sponsor-container">
      {/* Main Sponsor */}
      <div className="main-sponsor">
        <h3>Co-powered by</h3>
        <img src={pmc} alt="Main Sponsor" />
      </div>

      {/* Sub Sponsors */}
      <div className="sub-sponsors">
        {/* Next 3 sponsors in a row */}
        <div className="sponsor-row">
          <div className="sponsor-box">
            <div className="sponsor-content">
              <h3>Jewellery Partner</h3>
              <img className="radhika-jewellers" src={RadhikaJewellers} alt="Radhika Jewellers Sponsor" />
            </div>
          </div>
          <div className="sponsor-box">
            <div className="sponsor-content">
              <h3>Media partner </h3>
              <img src={SparkToday} alt="Spark Today Sponsor" />
            </div>
          </div>
          <div className="sponsor-box">
            <div className="sponsor-content">
              <h3>eSports partner </h3><br />
              <img src={GamerzRig} alt="GamerzRig Sponsor" />
            </div>
          </div>
        </div>

        {/* Other sponsors (max 3 per row) */}
        <div className="sponsor-row">
          <div className="sponsor-box">
            <div className="sponsor-content">
              <h3>Associate Sponsor</h3>
              <img src={AtlantaLogo} alt="Atlanta Logo Sponsor" />
            </div>
          </div>
          <div className="sponsor-box">
            <div className="sponsor-content">
              <h3>CAT partner </h3>
              <img src={IMS} alt="IMS Sponsor" />
            </div>
          </div>
          <div className="sponsor-box">
            <div className="sponsor-content">
              <h3>eSports partner</h3>
              <img src={Gamerzclan} alt="Gamerz Clan Sponsor" />
            </div>
          </div>
        </div>

        <div className="sponsor-row-fitness">
          <div className="sponsor-box">
            <div className="sponsor-content">
              <h3>Fitness Partner</h3>
              <img src={SwoldierFitness} alt="Swoldier Fitness Sponsor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
