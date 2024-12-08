import { Box } from '@mui/material'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useMousePosition } from './MousePositionContext';
const BouncyButton = ({onClick,value, styles,disp,looseBorder=false}) => {
    const mousePos = useMousePosition()
    const button = useRef(null);
    
    const [buttonPos, setPos] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        setPos(button.current.getBoundingClientRect())
    }, [])


    const handleMouseEnter = () => {
      if (buttonPos) {
          let x = gsap.utils.mapRange(buttonPos.x, (buttonPos.x + buttonPos.width), -disp.x, disp.x, mousePos.x);
          let y = gsap.utils.mapRange(buttonPos.y, (buttonPos.y + buttonPos.height), -disp.x, disp.y, mousePos.y);
          x = gsap.utils.clamp(-disp.x, disp.x, x);
          y = gsap.utils.clamp(-disp.y, disp.y, y);
          
          gsap.to(button.current, { x: x, y: y, duration: 0.2 });
      }
  };
  
    const handleMouseLeave = () => {
      gsap.to(button.current, {
        x:0,
        y:0,
        duration:0.2

      })
    }
  return (
    looseBorder ? <>
     <Box sx={looseBorder ? {position:'relative',display:'flex', alignItems:'center', justifyContent:'center',width:styles.width, height:styles.height}: ''}>
      <Box sx={looseBorder ? {color:'white', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}:''}>{value}</Box>
    <Box component={'button'}  onClick={onClick} onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={button} sx={styles}></Box>
    </Box>
    </>:
    <Box component={'button'}  onClick={onClick} onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={button} sx={styles}>{value}</Box>
  )
}

export default BouncyButton