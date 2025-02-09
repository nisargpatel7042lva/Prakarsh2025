import { useEffect, useRef } from "react";
import { Rive } from "@rive-app/canvas";
import "../Components/styles/HeroSection.css";

export default function HeroSection() {
  const canvasLogoRef = useRef(null);
  const canvasAstroPovRef = useRef(null);
  const riveInstanceRef = useRef(null);
  const inputControlRef = useRef(null);
  const recontrolRef = useRef(null);

  useEffect(() => {
    let resize;
    let recontrol;
    const r = new Rive({
      src: "/astropovwithsvit.riv",
      canvas: canvasAstroPovRef.current,
      autoplay: true,
      stateMachines: "State Machine 1",
      onLoad: function () {
        r.resizeDrawingSurfaceToCanvas();
        resize = r;
        const rsize = resize.stateMachineInputs("State Machine 1");
        recontrol = rsize.find((input) => input.name === "resize");
        recontrol.value = handleResize();
        recontrolRef.current = recontrol; // Store for resizing
      },
    });
    // Load Logo Rive animation
    const l = new Rive({
      src: "/PLogo.riv",
      canvas: canvasLogoRef.current,
      autoplay: true,
      stateMachines: "State Machine 1",
      onLoad: function () {
        l.resizeDrawingSurfaceToCanvas();
        riveInstanceRef.current = l;

        const inputs = l.stateMachineInputs("State Machine 1");

        // Store the input control
        inputControlRef.current = inputs.find((input) => input.name === "scroll");
      },
    });

    // Function to map scroll position to input range
    const mapScrollToInput = (scrollPosition) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollPosition / maxScroll;
      return Math.floor(scrollPercent * 100) * 10;
    };

    // Function to update animation based on scroll
    const updateScrollPosition = () => {
      if (!inputControlRef.current) return;

      const scrollValue = mapScrollToInput(window.scrollY);

      inputControlRef.current.value = scrollValue;
      requestAnimationFrame(() => riveInstanceRef.current.drawFrame());
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollPosition);

    // Parallax effect on background
    const handleParallax = () => {
      const scrollPosition = window.scrollY;
      const background = canvasLogoRef.current;
      background.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    };
    window.addEventListener("scroll", handleParallax);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  // Resize handler
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    console.log("Window Width:", windowWidth);

    if (windowWidth <= 770) {
      return 100;
    } else {
      return 0;
    }
  };

  return (
    <div className="hero-section">
      <div className="Logo">
        <canvas id="canvasLogo" ref={canvasLogoRef}></canvas>
      </div>
      <div className="AstroPov">
        <canvas id="canvasAstroPov" className="AstroPov" ref={canvasAstroPovRef}></canvas>
      </div>
    </div>
  );
}
