import { Box } from "@mui/material";
import React, { useEffect,useRef } from "react";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const LeftSection = () => {
    const paraCont = useRef()
    const para = useRef()
    let mm = gsap.matchMedia();


    useEffect(() => {
      const breakPoint = 900;
      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;
          const tl = gsap.timeline({
            scrollTrigger:{
                trigger: paraCont.current,
                start:'top 40%',
                end:'bottom center',
                scrub:3
            }
        })
  
        tl.to(para.current, {
            y:isDesktop?-50:-20
        })
  
        }
      );
    }, [])
  return (
    <>
    <Box  ref={paraCont} sx={{ width: {xs:"100vw",md:"50vw"}, padding: {xs:"10vmax 3vmax",md:"8vmax 11vmax"} }}>
      <Box
      ref={para}
        component={"h2"}
        sx={{ fontSize: {xs:'4vmax', md:"2.8vmax"}, fontWeight: 800, mb: "3vmax",position:'relative' }}
      >
        WELCOME
        <br /> we are, PRAKASH ENGINEERING
      </Box>
      <Box component={"p"} sx={{color:'#FFFFFFB0',fontWeight:600,letterSpacing:'1px',lineHeight:1.8}}>
        At Prakash Engineering, we specialize in high-quality cleaning and waste
        management equipment, including Garbage Tippers, Sewer Cleaning, and
        Nala Cleaning Machines. Led by Mr. Bhanu Singh, we are committed to
        innovation, reliability, and a cleaner, sustainable future.
      </Box>
    </Box>
    </>
  );
};

export default LeftSection;
