import { useState, useEffect } from "react";
import "./styles/navbar.css";
import logoImage from "../assets/logo1.png"; // Adjust the path to your image
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  // Function to update isMobile state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close sidebar when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll event for hiding and showing the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        setShowNavbar(false);
      } else {
        // Scroll Up
        setShowNavbar(true);
      }
      lastScrollY=window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const EventSection = ()=>{
    if(window.location.pathname=='/'){
      scrollToSection("events-section")
    }
    else{
      navigate('/events')
    }
  }

  return (
    <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
      {/* 🔥 Made the logo clickable to navigate to home */}
      <img
        src={logoImage}
        alt="PRAKARSH Logo"
        className="logo"
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        style={{ cursor: "pointer" }} // 🔥 Added pointer cursor for better UX
      />

      {/* Desktop Navbar */}
      <nav className="nav-links">
        <ul>
          <li
            className="nav-item"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            HOME
          </li>
          <li className="nav-item" onClick={() => { navigate("/aboutus") }}>
            ABOUT
          </li>
          <li className="nav-item" onClick={() =>{
            if(window.location.pathname=='/'){
              scrollToSection("events-section")
            }
            else{
              navigate('/events')
            }
          } 
          }>
            EVENTS
          </li>
          <li className="nav-item">HISTORY</li>
          <li className="nav-item" onClick={() =>{scrollToSection("team-section")}}>
            TEAM
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu (Mobile Only) */}
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}

      {/* Sidebar Menu (Mobile Only) */}
      {isMobile && (
        <div className={`sidebar ${isOpen ? "show" : ""}`}>
          <div className="close-btn" onClick={toggleMenu}>✖</div>
          <ul>
            <li
              className="nav-item"
              onClick={() => {
                toggleMenu();
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              HOME
            </li>
            <li className="nav-item" onClick={() => { toggleMenu(); navigate("/aboutus"); }}>
              ABOUT
            </li>
            <li className="nav-item" onClick={() => { EventSection() ;toggleMenu();
            }}>
              EVENTS
            </li>
            <li className="nav-item" onClick={() => { toggleMenu(); scrollToSection(""); }}>
              HISTORY
            </li>
            <li className="nav-item" onClick={() => { toggleMenu(); scrollToSection("team-section"); }}>
              TEAM
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
