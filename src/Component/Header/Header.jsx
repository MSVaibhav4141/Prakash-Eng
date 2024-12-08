import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import SwiperImported from './Swiper';
import {Box} from '@mui/material'
const Header = () => {
  const [loader,setLoader]= useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 4300);
  return (
   <>
  {/* { loader && 
     <Box sx={{minWidth:'100vw', height:'100vh',bgcolor:'black',position:'absolute',zIndex:101,top:0,left:0}}>sdf</Box>
} */}
   <Box sx={{maxWidth:'100vw', height:'80vh'}}>

  <SwiperImported />
  </Box>
   </>
  ) 
}
 
export default Header