import { Box } from '@mui/material'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Contact from '../Contact/Contact.jsx'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const MoreAbout = () => {
const [contHeight, setHeight] = useState(0)
    useEffect(() => {
        console.log(parllaxCont.current.querySelector('.ddd'))
        gsap.fromTo(
          ".parallax-image", 
          {
            yPercent: -30,
          },
          {
            yPercent: 5, 
            scrollTrigger: {
              trigger: ".parallax-container", 
              start: "top bottom", 
              end: "bottom top", 
              scrub: 3, 
            },
          }
        );
      }, []);
      const parllaxCont = useRef()
      const pCont = useRef()
      const paraAbout = useRef()
      useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pCont.current,
                start: "-300px top",
                end: "-300px top",
                scrub: 1.5,
              },
        })
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: pCont.current.querySelector(".contactForm"),
                start: "-100px top",
                end: "-100px top",
                scrub: 1,
              },
        })

        tl
        .to(document.body,{
            backgroundColor:'white',
        },'d')
        .to(parllaxCont.current.querySelector('.lightBg'),{
            backgroundColor:'#e6e6e6',
        },'d')
        .to(parllaxCont.current.querySelector('.text-lightbg'),{
            color:'#0009',
        },'d')
        .to(parllaxCont.current.querySelectorAll('.text-lightbg > p'),{
            color:'black',
        },'d')
        .to(pCont.current.querySelector('.contactUs'),{
            backgroundColor:'rgb(230, 230, 230)',
        },'d')
        .to(pCont.current.querySelector('.contactHeading'),{
           color:'black'
        },'d')
        .to(pCont.current.querySelectorAll(".MuiInputLabel-root"),{
           color:'black'
        },'d')
        .to(pCont.current.querySelector('.headingCont'),{
           color:'black'
        },'d')
        tl1
        .to(document.body,{
            backgroundColor:'#0e0e0e',
             ease: 'power2.out'
        })
        tl1
        .to(parllaxCont.current.querySelector('.lightBg'),{
            backgroundColor:'#2a2929',

        })
        .to(parllaxCont.current.querySelectorAll('.text-lightbg > p'),{
          color:'white',
      },'d')
          .to(pCont.current.querySelector('.contactUs'),{
            backgroundColor:'#2a2929',
        },'e')
        .to(pCont.current.querySelector('.contactHeading'),{
           color:'white'
        },'d')
        .to(pCont.current.querySelectorAll(".MuiInputLabel-root"),{
           color:'white'
        },'d')
        .to(pCont.current.querySelector('.headingCont'),{
           color:'#ffffffb0'
        },'d')
      }, [])

      useEffect(() => {
        console.log(pCont.current.querySelector(".text-lightbg").offsetHeight+pCont.current.querySelector(".parallax-container").offsetHeight)
        if(pCont.current.querySelector(".text-lightbg")){
          setHeight(pCont.current.querySelector(".text-lightbg").offsetHeight+pCont.current.querySelector(".parallax-container").offsetHeight)
        }
      },[])
  return (
    <>
    <Box ref={pCont} sx={{bgcolor:'transparent',transition:'0.4s'}}>
    <Box ref={parllaxCont} sx={{height:{xs:`${contHeight+10}px`,md:'150vh'},maxWidth:'100vw',position:'relative',display:'flex',justifyContent:'flex-end', marginTop:'7vmax'}}>
        <Box className='lightBg' sx={{width:'70vw',height:{xs:'170vh',md:'150vh'},bgcolor:'#2a2929',display:{xs:'none', md:'block'}}}></Box>
        <Box sx={{position:'absolute',width:{xs:'100vw', md:'75vw'},height:'100vh',bgcolor:'transparent',top:{xs:'10%',md:'50%'},transform:{xs:'translate(-50%,-10%)',md:'translate(-50%,-50%)'},left:'50%',display:'flex', flexDirection:{xs:'column', md:'row'}}}>
        <Box
      className="parallax-container"
      sx={{
        width: {xs:'90%',md:"50%"},
        minHeight: {xs:'80vh',md:"100vh"}, // Ensure the container height is 100% of the viewport
        overflow: "hidden", // Hide the overflow to focus on the parallax effect
        position: "relative",
        display: "flex",
        justifyContent: "center",
        margin:{xs:'0 auto',md:0},
        alignItems: "center",
      }}
    >
      <Box
        className="parallax-image"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "130%", // Make sure the image always covers the entire container
          backgroundImage: "url('/assets/parallax.jpeg')", // Replace with your image URL
          backgroundSize: "cover", // Ensure the image covers the box at all times
          backgroundPosition: "center", // Centers the image
          backgroundAttachment: "fixed", // Optional: Makes the background stay in place while content scrolls
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Ensures text or content appears above the image
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
      </Box>
    </Box>
    <Box  className="text-lightbg" sx={{width:{xs:'100%',md:"50%"},padding:'4vmax',color:'#ffffffb0', lineHeight:1.5}}>
        <Box component={'p'} sx={{fontSize:{xs:'4vmax',md:'2.8vmax'},fontWeight:800,color:'white',mb:'2vmax'}}>At Prakash Engineering, We Focus on Impact</Box>
        <Box component={'p'} sx={{fontSize:{xs:'2.2vmax',md:'1vmax'},fontWeight:600}}>We specialize in manufacturing and supplying high-quality equipment, including Garbage Discharging Tippers, Sewer Cleaning Equipment, Hood Loaders, Mobile Oil Spill Recovery Units, and more. Our solutions are designed to maintain a cleaner, more sustainable environment.</Box>
        <Box component={'p'} sx={{fontSize:{xs:'2.2vmax',md:'1vmax'},fontWeight:600}}>Under the leadership of Mr. Bhanu Singh, we've become industry leaders, offering a wide range of specialized vehicles like Animal Ambulance Vans, Sky Lifts, and Cattle Catchers. Our dedication to quality and innovation enables us to meet our clients' diverse needs with integrity and precision.</Box>
        <Box ref={paraAbout} component={'p'} sx={{fontSize:{xs:'2.2vmax',md:'1vmax'},fontWeight:600}}>At Prakash Engineering, we're committed to creating a cleaner, safer future for India through innovative waste management solutions.</Box>
    </Box>
        </Box>
    </Box>
    <Contact />
    </Box>
    </>
  )
}

export default MoreAbout