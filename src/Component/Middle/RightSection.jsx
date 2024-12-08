import { Box } from '@mui/material'
import React, { useEffect,useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const RightSection = () => {

    const image = useRef()

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: image.current,
                start:'top 30%',
                end:'bottom center',
                scrub:3
            }
        })

        tl.to(image.current, {
            scale:1.2
        })
    }, [])
  return (
   <Box sx={{maxWidth:{xs:'100vw',md:'50vw'},bgcolor:'#2a2929', display:'flex', alignItems:'center', justifyContent:'center',overflow:'hidden'}}>
    <Box ref={image} component={'img'} src='https://pbs.twimg.com/media/GVfMhAHWwAAOANb?format=jpg&name=medium' sx={{width:{xs:'100%',md:{xs:'100%',md:'70%'}}, height:'70%', objectPosition:'center', objectFit:'cover'}}></Box>
   </Box>
  )
}

export default RightSection