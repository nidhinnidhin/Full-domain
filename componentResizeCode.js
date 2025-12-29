import React, { useState, useEffect } from "react";

function ResizeComponent() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Screen Size</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>

      {windowSize.width > 800 ? (
        <p>Large screen</p>
      ) : (
        <p>Small screen</p>
      )}
    </div>
  );
}

export default ResizeComponent;