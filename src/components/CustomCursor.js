import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Make sure to create this CSS file for styling

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-circle outer-circle"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="cursor-circle inner-circle"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
};

export default CustomCursor;
