import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import SortIcon from '@mui/icons-material/Sort';
import { gsap } from "gsap";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
  FreeMode,
  EffectCards,
} from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import SplitTextJS from "split-text-js"; // Use your custom library
import { Box, Button, colors } from "@mui/material";
import BouncyButton from "../../utils/bouncyButton";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Middle from "../Middle/Middle";
gsap.registerPlugin(ScrollTrigger);


const SwiperImported = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null); // Keep a reference to the main swiper
  const pContainer = useRef(null);
  const textRefs = useRef([]); 
  const bouncyButton = useRef([]); 
  const headingRef = useRef([]); 
  const bouncyButtonCont = useRef(null)
  const headingCont = useRef(null)
  const icon = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplayDelay, setDelay] = useState(100)
  const textAnimationTimeline = useRef(null)
  const headingAnimationTimeline = useRef(null)
  const buttonAnimationTimeline = useRef(null)

  let isFirst = true;

  useEffect(() => {
    if(currentIndex === 2 && isFirst){
      setTimeout(() => {
        setDelay(3000)
      }, 1090);
      isFirst = false
    }
  },[currentIndex])

  useEffect(() => {
    if(headingCont.current){
      const headingcont = Array.from(headingCont.current.querySelectorAll('span'))
      headingRef.current = headingcont; 
    };
    if(bouncyButtonCont.current){
      const bouncybutton = Array.from(bouncyButtonCont.current.querySelectorAll('button'))
      bouncyButton.current = bouncybutton; 
    };
    if (!pContainer.current) return; 
    // Select all <p> elements and split text
    const titles = Array.from(pContainer.current.querySelectorAll("p"));
    textRefs.current = titles.map((title) => new SplitTextJS(title));

    // Initialize all text as hidden
    textRefs.current.forEach(({ chars }) => {
      gsap.set(chars, { opacity: 0, y: 80, rotateX: -90 });
    });
    headingRef.current.forEach((heading) => {
      gsap.set(heading, { opacity: 0, y: 80, rotateX: -90 });
    });
    
    bouncyButton.current.forEach((button) => {
      gsap.set(button, { opacity: 0, y: 80, rotateX: -90 });
    });
    
  
      gsap.set(icon.current, { opacity: 0});
   
  }, []);

  useEffect(() => {
    animateText(currentIndex);
  }, [currentIndex]);
  const animateText = (index) => {
    if (isAnimating) {
      return; // Prevent animation if one is already running
    }
    setIsAnimating(true);

    // Animate the current text
    const currentButton = bouncyButton.current[index]
    const currentText = textRefs.current[index];
    const currentHeading = headingRef.current[index];
    textAnimationTimeline.current = gsap.timeline();
    if (currentText) {
      textAnimationTimeline.current
        .to(currentText.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.8,
        })
        .to(currentText.chars, {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.05,
          delay: 1.8, // Keep text visible for some time
        });
    }
    headingAnimationTimeline.current = gsap.timeline();
    if(currentHeading){
      gsap.set(icon.current, { rotate: 0 });
      headingAnimationTimeline.current
      .to(currentHeading, {
        opacity: 1,
          y: 0,
          rotateX: 0,
          ease:"power1.inOut",
          duration:0.5
        },'a')
        .to(icon.current, {
          opacity:1,
          rotate:360,
          transformOrigin:'50% 50%',
          ease:"power1.inOut",
          duration:0.5,
        },'a')
        .to(currentHeading, {
          opacity: 0,
          y: 10,
          rotateX: -90,
          transformOrigin: '50% 50%',
          delay:2.4,
          duration:0.5
        },'b')
        .to(icon.current, {
          opacity:0,
          rotate:0,
        delay:2,
        },'b')
        .eventCallback("onComplete", () => {
          setIsAnimating(false); // Mark animation as complete
        });
      
    }
    buttonAnimationTimeline.current = gsap.timeline();
    if(currentButton){
      buttonAnimationTimeline.current
      .to(currentButton, {
        opacity: 1,
          y: 0,
          rotateX: 0,
          duration:0.5
        })
        .to(currentButton, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          transformOrigin: '50% 50%',
          delay:2.8,
          duration:0.3
      })
    }
   
  };


  
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
    
    if (isAnimating) {
      // If animation is running, reverse the current animation quickly
      textAnimationTimeline.current.reverse(0.5); // Speed up the reversal
      headingAnimationTimeline.current.reverse(0.5); // Speed up the reversal
      buttonAnimationTimeline.current.reverse(0.5); // Speed up the reversal
      setIsAnimating(false); // Mark animation as complete

      // After the animation reversal is complete, move to the new slide
      setTimeout(() => {
        swiper.slideTo(swiper.activeIndex); // Change slide after reversal
        setCurrentIndex(swiper.activeIndex); // Update current index
        animateText(swiper.activeIndex); // Run animation for new slide
      }, 300); // Reduced delay before moving to the new slide
    } else {
      // If no animation is running, simply proceed to the new slide and animate
      setCurrentIndex(swiper.activeIndex);
      animateText(swiper.activeIndex);
    }
  };

  const homeCont = useRef()
  const logo = useRef()
  const nav = useRef()
  const swiperThumb = useRef()
  const swiper = useRef()

  let mm = gsap.matchMedia();
  useEffect(() => {
    console.log(homeCont.current.offSetHeight)
    mm.add('(min-width:900px)',() => {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:homeCont.current,
          start:'top top',
          end:'bottom top',
          scrub:2,
          onUpdate: (self) => {
            const restrictedProgress = self.progress * 0.5; // Slow down progress (50%)
            self.animation.progress(restrictedProgress);
          },
        }
      })

      tl.to(homeCont.current, {
        height: '65%',
        ease: 'power2.out', // Gradual easing for smoother transitions
      }, 'a')
      .to(swiper.current, {
        maxWidth: '85%',
        ease: 'power2.out',
      }, 'a')
      .to(swiperThumb.current, {
        x: -300,
        y:300,
      }, 'a');
    })

    const tl1 = gsap.timeline({
      scrollTrigger:{
        trigger:homeCont.current,
        start:'center top',
        end:'center top',
        scrub:2,
   
      }
    })
    tl1
    .to(logo.current, {
      opacity:0,
    },'a')
    .to(nav.current, {
     height:'70px',
     borderBottom:'0.5px solid #262525',
     opacity:1,
     duration:0.3
    },'b')
  }, [])
  return (
    <>
    <Box ref={nav} sx={{p:'0 2vmax',opacity:0,width:'100%', height:'90px',borderBottom:'1px solid white', bgcolor:'#0e0e0e',zIndex:10,position:'fixed', top:0,left:0,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <Box  sx={{opacity:1,display:'flex',alignItems:'center',flex:1}}>
    <Box sx={{height:'70px', width:{xs:'100px',md:'120px'},objectPosition:'center', objectFit:'contain'}} component={'img'} src="logo.png"></Box>

    </Box>
    <Box sx={{color:'#ff8585',flex:1,justifyContent:'flex-end',fontWeight:500,display:'flex',height:"100%",alignItems:'center'}}><SortIcon/>Menu</Box>
    
      <Box></Box>
    </Box>
    <Box
    ref={homeCont}
      sx={{
        overflow: "hidden",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "row-reverse",
        position: "relative",
        margin: "0px auto",
      }}
    >
      <Box ref={logo} sx={{opacity:1,zIndex:100}}>
      <Box sx={{position:'fixed', top:{md:20,xs:0},left:{xs:10,md:'60px'},height:'100px', width:{md:'150px',xs:'120px'},objectPosition:'center', objectFit:'contain'}} component={'img'} src="logo.png"></Box>
      <Box sx={{position:'fixed', top:{md:70,xs:40},left:{xs:30,md:'80px'},height:'100px', width:{md:'110px',xs:'80px'},objectPosition:'center', objectFit:'contain'}} component={'img'} src="logo1.png"></Box>
      <Box sx={{position:'fixed', top:{md:93,xs:50},left:{xs:30,md:'80px'},height:'100px', width:{md:'110px',xs:'80px'},objectPosition:'center', objectFit:'contain'}} component={'img'} src="logo2.png"></Box>
<Box sx={{position:'fixed', top:{xs:40,md:70},right:{xs:20,md:'60px'},color:'#ff8585',flex:1,justifyContent:'flex-end',fontWeight:500,display:'flex',alignItems:'center'}}><SortIcon/>Menu</Box>

      </Box>
      
      {/* Text Container */}
      <Box
        sx={{ position: "absolute", zIndex: 100 ,top: {xs:'40%',md:"40%"},left:{xs:"2vmax",md:'13vmax'},transform:{xs:'translateY(-40%)'},md:'translateY(-40%)',display:'flex',flexDirection:'column',justifyContent:'space-around',width:'70vmax', height:'18vmax' }}
        ref={pContainer}
      >
          <Box  sx={{width:'100%', position:'relative',top:0, left:0, display:'flex',alignItems:'center', color:{xs:'#fdfdfd',md:'rgb(88 88 88)'}}}>
             
                <WorkspacesIcon ref={icon} />
              <Box
              ref={headingCont}
               sx={{
                display:'flex',
                alignItems:'center',
                "& span":{
                  position:'absolute',
                  color:{xs:'#fdfdfd',md:'#e0e0e0'},
                  fontWeight:{xs:700,md:600},
                  fontSize:{xs:'0.8rem',md:'1rem'},
                  transform:'translateX(15px)'
                }
              }}>
                <Box component={'span'}>VEHICLES</Box>
                <Box component={'span'}>EQUIPMENTS</Box>
                <Box component={'span'}>INFRASTRUCTURE</Box>
              </Box>
              
        </Box>
        <Box
          sx={{
            position:'relative',
            maxWidth:'100%',
            height:'35%',
            "& p": {
              fontSize: {xs:'2.4rem',md:"4rem"},
              textAlign: "left",
               wordWrap: "break-word",
              maxWidth:'100%',
              color: "white",
              fontWeight:'700',
              margin: 0,
              top:'10px',
              lineHeight: 1,
              position:'absolute',
            },
          }}
        >
          <p>Reliable Fleet</p>
          <p>Advanced Tools</p>
          <p>Modern Solutions</p>
        </Box>
        <Box ref={bouncyButtonCont} sx={{width:'100%', position:'relative',top:{xs:35,md:0}, left:0,height:'40%'}}>
        <BouncyButton value={<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}><ArrowForwardIosIcon  sx={{bgcolor:'white',borderRadius:'50%',padding:'8px',color:'#EE192C',scale:{xs:'0.9',md:'1.3'}}}/> Explore Vehicles </Box>} styles={{
          width:{xs:'25vmax',md:'15vmax'},
          height:{xs:'6vmax',md:'4vmax'},
          bgcolor:'transparent',
          padding:'1vmax 2vmax',
          position:'absolute',
          textAlign:'center',
          cursor:'pointer',
          top:10,
          borderRadius:'30px',
          color:'white',
          border:'1px solid white'
        }} disp={{x:10, y:10}} />
        <BouncyButton value={<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}><ArrowForwardIosIcon  sx={{bgcolor:'white',borderRadius:'50%',color:'#EE192C',padding:'8px',scale:{xs:'0.9',md:'1.3'}}}/> View Equipment </Box>} styles={{
        width:{xs:'25vmax',md:'15vmax'},
        height:{xs:'6vmax',md:'4vmax'},
          bgcolor:'transparent',
          padding:'1vmax 2vmax',
          position:'absolute',
          textAlign:'center',
          cursor:'pointer',
          borderRadius:'30px',
          color:'white',
          border:'1px solid white'
        }} disp={{x:10, y:10}} />
        <BouncyButton value={<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}><ArrowForwardIosIcon  sx={{bgcolor:'white',borderRadius:'50%',color:'#EE192C',padding:'8px',scale:{xs:'0.9',md:'1.3'}}}/> Discover More </Box>} styles={{
         width:{xs:'25vmax',md:'15vmax'},
         height:{xs:'6vmax',md:'4vmax'},
          bgcolor:'transparent',
          padding:'1vmax 2vmax',
          position:'absolute',
          textAlign:'center',
          cursor:'pointer',
          borderRadius:'30px',
          color:'white',
          border:'1px solid white'
        }} disp={{x:10, y:10}} />
        </Box>
      </Box>

      {/* Main Swiper */}
      <Swiper
      ref={swiper}
        grabCursor={true}
        effect={"creative"}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        creativeEffect={{
          prev: {
            translate: ["-50%", 0, 0],
            opacity: 1,
          },
          next: {
            translate: ["100%", 0, 0],
            zIndex: 10,
          },
        }}
        speed={1100}
        modules={[EffectCreative, Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwipers"
        onSwiper={setMainSwiper} // Save reference to the main Swiper
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide style={{ overflow: "hidden" }}>
          <Box
            component="img"
            src="/assets/truck1.jpg"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <Box
            component="img"
            src="/assets/scissor-lift-.jpg"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <Box
            component="img"
            src="/assets/truck3.jpg"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Card Swiper */}
      <Box>
        <Swiper
        ref={swiperThumb}
          style={{
            width: "100px",
            height: "200px",
            opacity:1,
            position: "absolute",
            bottom: "-50px",
            left: 30,
            transform: "rotate(90deg)",
            borderRadius: "10px",
          }}
          effect={"cards"}
          grabCursor={true}
          cardsEffect={{
            rotate: 30,
            perSlideRotate: 50,
            perSlideOffset: 50,
            slideShadows: true,
          }}
          modules={[EffectCards, Thumbs]}
          onSwiper={setThumbsSwiper} // Set thumbsSwiper for the main Swiper
          loop={true}
          speed={1100}
          className="thumbSwiper"
        >
          <SwiperSlide style={{ width: "50px" }}>
            <Box
              component="img"
              src="/assets/truck1.jpg"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "50px" }}>
            <Box
              component="img"
              src="/assets/scissor-lift-.jpg"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "50px" }}>
            <Box
              component="img"
              src="/assets/truck3.jpg"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box sx={{position:"absolute", zIndex:1, bottom:{xs:60,md:80}, right:{xs:0,md:50}}}>
              <Box
               sx={{
                fontSize: {xs:'15vmax',md:'10vmax'},
                fontWeight:'600',
                color: 'rgba(255, 255, 255, 0.03)',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.11)',
                WebkitTransform: 'scale3d(1, 1.15, 1.15)',
                transform: 'scale3d(1, 1.15, 1.15)',
              }}
              >0{currentIndex+1}</Box>
      </Box>
      <Box sx={{display:'flex',width:'100px', justifyContent:'space-around',position:'absolute', bottom:15,right:{xs:0,md:50},zIndex:1, alignItems:'center'}}>
      <BouncyButton onClick={() => mainSwiper.slideTo(currentIndex-1)} value={<ArrowBackIosIcon />} looseBorder={true} styles={{
          width:'30px',
          height:'30px',
          bgcolor:'transparent',
          padding:'1vmax',
          textAlign:'center',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          cursor:'pointer',
          borderRadius:'50%',
          color:'white',
          border:'1px solid white'
        }} disp={{x:10, y:10}} />
        <BouncyButton onClick={() => mainSwiper.slideTo(currentIndex+1)} value={<ArrowForwardIosIcon />} looseBorder={true} styles={{
          width:'40px',
          height:'40px',
          bgcolor:'transparent',
          padding:'1vmax',
          textAlign:'center',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          cursor:'pointer',
          borderRadius:'50%',
          color:'white',
          border:'1px solid white'
        }} disp={{x:10, y:10}} />
      </Box>
    </Box>
    <Middle />
    </>
  );
};

export default SwiperImported;
