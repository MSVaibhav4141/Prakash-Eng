import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Details from '../Details/Details.jsx'
import { Box } from "@mui/material";
gsap.registerPlugin(ScrollTrigger);

const Exp = () => {
  const counters = [
    { target: 100, label: "Cleaning Machines and Equipment" },
    { target: 20, label: "Years of Industry Experience" },
    { target: 500, label: "Projects Delivered Successfully" },
  ]

  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    // Animate each counter when the section comes into view
    countersRef.current.forEach((el, index) => {
      const target = counters[index].target;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            el.textContent = Math.ceil(this.targets()[0].innerText);
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            toggleActions: "play none none none", 
          },
        }
      );
    });
  }, []);

  return (
    <>
    <Box ref={sectionRef} sx={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: {xs:"flex-start",md:"center"},
    flexDirection:{xs:'column',md:'row'},
    backgroundColor: "#0e0e0e",
    color: "#fff",
    padding: "20px",
    minHeight: "200px",
    marginTop:{xs:'8vmax',md:'0vmax'},
  
  }}>
      {counters.map((counter, index) => (
        <Box sx={styles.metric} key={index}>
          <h1>
            <span ref={(el) => (countersRef.current[index] = el)}>0</span>+
          </h1>
          <p>{counter.label}</p>
        </Box>
      ))}
    </Box>
    <Details />
    </>
  );
};

const styles = {
  metric: {
    textAlign: {xs:'start',md:"center"},
    m:{xs:'3vmax 0', md:0}
  },
};

export default Exp;
