import React, { useState, useCallback } from "react";
import './style.css';

const MarqueeComponent = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);

  // Throttle the mousemove event to avoid excessive updates
  const handleMouseMove = useCallback((event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setButtonPosition({ x: mouseX, y: mouseY });
    setShowButton(true);
  }, []);

  // Hide button when the mouse leaves the container
  const handleMouseLeave = useCallback(() => {
    setShowButton(false);
  }, []);

  return (
    <div
      className="marquee-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="marquee-text">
        ⚡💥 Hurry! Flash Sale - 70% OFF for 24 Hours! 💥
      </div>
      {showButton && (
        <button
          className="buy-now-button"
          style={{
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            position: "absolute", // Make sure the button stays in the correct position
          }}
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MarqueeComponent />
    </div>
  );
}

export default MarqueeComponent;
