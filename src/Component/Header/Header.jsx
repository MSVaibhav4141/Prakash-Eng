import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import SwiperImported from './Swiper';
import {Box} from '@mui/material'
import LoadingPage from '../../utils/LoadingPage';
const Header = () => {
  const [loader,setLoader]= useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 4300);
  return (
   <>
  { loader && 
     <LoadingPage />
}
   <Box sx={{maxWidth:'100vw', height:'80vh'}}>

  <SwiperImported />
  </Box>
   </>
  ) 
}
 
export default Header