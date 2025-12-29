import React, { useEffect } from 'react';

const Background = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const body = document.querySelector("body");
      // Calculate movement (divided by 25 to make it subtle)
      const x = (window.innerWidth - e.pageX) / 25;
      const y = (window.innerHeight - e.pageY) / 25;

      body.style.setProperty("--x", `${x}px`);
      body.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="grid-container">
        <div className="grid-bg"></div>
      </div>
      <div className="grid-overlay"></div>
    </>
  );
};

export default Background;