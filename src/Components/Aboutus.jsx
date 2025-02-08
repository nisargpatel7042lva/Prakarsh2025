import AstroSaheeb from "../assets/AstroSaheeb.svg";
import "../Components/styles/AboutPage.css";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <img className="AstroSaheeb" src={AstroSaheeb} alt="Astro Saheeb" />
      <div className="Details">
        <h1 className="AboutusTitle">About Us</h1>
        <h2 className="h2-AboutUs">Exploring the Future, Today</h2>
        <p className="p-AboutUs">
          Welcome to <strong>PRAKARSH 2K25</strong>, where we push the
          boundaries of innovation and technology. Our mission is to create a
          future where humanity and technology coexist seamlessly, unlocking the
          mysteries of the universe and harnessing its potential. From advanced
          AI systems to interstellar exploration, we are dedicated to shaping a
          brighter tomorrow. Join us on this journey as we redefine what’s
          possible and venture into the unknown.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
