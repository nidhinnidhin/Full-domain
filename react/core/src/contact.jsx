import React, { useState, useEffect } from "react";

const Contact = () => {
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

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>Window width: {windowSize.width}</h2>
      <h3>Window height: {windowSize.height}</h3>

      {windowSize.width < 600 ? (
        <p>Small screen layout</p>
      ) : (
        <p>Large screen layout</p>
      )}
    </div>
  );
};

export default Contact;
