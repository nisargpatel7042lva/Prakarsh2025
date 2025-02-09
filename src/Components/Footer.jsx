
import "./styles/footer.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import svitLogo from "../assets/svitlogo.png"; // Import the logo image
import { NavLink } from "react-router-dom"; // Import NavLink

const Footer = () => {
  return (
    <footer className="footer">
      {/* Marquee Section */}
      <div className="space-marquee">
        <div className="marquee-content">
          🚀 HURRY AND GRAB YOUR TICKETS NOW! JOIN US ON AN EPIC SPACE ADVENTURE! LIMITED SPOTS AVAILABLE! 🌟
        </div>
        <div className="hover-box">
          <button className="hover-box-button">Book Now</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <a href="mailto:contact@svitvasad.ac.in">contact@svitvasad.ac.in</a>
            {/* <a href="tel:+918160695465">+91 8160695465</a> */}
          </div>

          {/* Follow Us */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <NavLink
                to="https://www.instagram.com/svitprakarsh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </NavLink>
              <NavLink
                to="https://www.youtube.com/@COAIDSVITVASAD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </NavLink>
            </div>
          </div>

          {/* Event Location */}
          <div className="footer-section">
            <h3>Event Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9332687608494!2d73.07379517501302!3d22.469141836754744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb55277d1e457%3A0xaf7e43a3d29561b!2sSardar%20Vallabhbhai%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1738574532572!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/bGC9fdt6QLYzKWvk6"
                target="_blank"
                rel="noopener noreferrer"
                className="map-overlay"
                aria-label="Open in Google Maps"
              ></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <img src={svitLogo} alt="SVIT Logo" className="footer-logo" />
          <p className="footer-text">Sardar Vallabhbhai Patel Institute of Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
