import React, { Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Rive } from "@rive-app/canvas";

const App = React.lazy(() => import("./App.jsx"));

const LoadingScreen = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;

    // Initialize Rive animation
    const r = new Rive({
      src: "Load-in.riv",
      canvas: canvas,
      autoplay: true,
      stateMachines: "State Machine 1",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });

    // Cleanup the Rive instance when component is unmounted
    return () => {
      r.cleanup();
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <canvas id="canvas"></canvas>
      <p>Loading...</p>
    </div>
  );
};

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  // Global timer to handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // End loading state after 3 seconds
    }, 5000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && <App />}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<LoadingScreen />}>
    <RootComponent />
  </Suspense>
);

// CSS Variables
const styles = document.createElement("style");
styles.innerHTML = `
 

  .loading-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--loading-bg);
  }

  p {
    color: var(--loading-text-color);
    font-size: 1.2rem;
    margin-top: 10px;
  }

  canvas {
    width: 300px;
    height: 300px;
  }
`;
document.head.appendChild(styles);
