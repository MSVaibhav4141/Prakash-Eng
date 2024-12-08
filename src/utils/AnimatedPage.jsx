import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AnimatedPage = ({ children }) => {
  const pageRef = useRef();

  useEffect(() => {
    // Animate on page load
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, x: "-100%" }, // Start off-screen to the left
      { opacity: 1, x: "0%", duration: 0.8, ease: "power2.out" } // Slide in
    );

    return () => {
      // Animate on page exit
      gsap.to(pageRef.current, {
        opacity: 0,
        x: "100%", // Slide out to the right
        duration: 0.6,
        ease: "power2.in",
      });
    };
  }, []);

  return <div ref={pageRef}>{children}</div>;
};

export default AnimatedPage;
