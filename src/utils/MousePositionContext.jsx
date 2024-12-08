// MousePositionContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context
const MousePositionContext = createContext();

// Create a provider component
export const MousePositionProvider = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle mousemove event to update mouse position
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    // Add event listener on mount
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MousePositionContext.Provider value={mousePos}>
      {children}
    </MousePositionContext.Provider>
  );
};

// Custom hook to use mouse position
export const useMousePosition = () => {
  return useContext(MousePositionContext);
};
