import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import MoreAbout from '../MoreAbout/MoreAbout.jsx'
import "swiper/css/navigation";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const slides = [
  {
    image: "https://www.tpsmfg.com/images/service/rc1.jpg", // Replace with your image URL
    title: "Solid Waste Management Vehicle",
  },
  {
    image: "https://static.wixstatic.com/media/5d5ffd_99c0c5d1293049e78ba9526584b3de57~mv2.jpg/v1/crop/x_0,y_73,w_5184,h_3187/fill/w_400,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0441_JPG.jpg", // Replace with your image URL
    title: "Liquid Waste Management Vehicle",
  },
  {
    image: "https://5.imimg.com/data5/SELLER/Default/2021/10/IH/FR/GJ/3936488/ensol-mobile-oil-spill-recovery-unit-500x500.JPG", // Replace with your image URL
    title: "Special Purpose Vehicle",
  },
  {
    image: "https://www.clw-trucks.com/uploads/image/20180530/15/isuzu-14m-boom-lift-truck2.jpg", // Replace with your image URL
    title: "Utilities",
  },
];

const Details = () => {
  return (
    <>
     <Box sx={{color:'#ffffffB0',padding:{xs:'5vmax 3vmax',md:'3vmax 11vmax'}}} >
            <Box sx={{ display:'flex',alignItems:'center',padding:{xs:0,md:'1vmax 3vmax'}, mb:{xs:'4vmax', md:0}}}>
            <WorkspacesIcon sx={{color:'#ff00007a'}}/>
            <HorizontalRuleIcon sx={{color:'#ff00007a'}}/>
            <Box component={'span'} sx={{textTransform:'capitalize', fontWeight:'700', letterSpacing:'1px',paddingLeft:'10px'}}>What we Provide</Box>
            </Box>
            <Box component={'p'} sx={{fontSize:{xs:'4vmax', md:'3vmax'}, fontWeight:700,color:'white'}}>We are Help to <br/>Cleaner & Sustainable <br/> INDIA</Box>
        </Box>
    <Box
      sx={{
        width: "100%",
        height: "400px",
        position: "relative",
        overflow: "hidden",
      }}
    >
       
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30} // Space between slides
        loop={true} // Allows looping
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        style={{
          width: "90%",
          height: "100%",
        }}
        breakpoints={{
          900: {
            slidesPerView: 3, // 4 slides if width > 900px
          },
          0: {
            slidesPerView: 1, // 1 slide for smaller screens
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                backgroundImage: `url(${slide.image})`, // Background image
                backgroundSize: "cover", // Ensures the image covers the box
                backgroundPosition: "center", // Centers the image
                transition: "transform 0.5s ease, opacity 0.5s ease",
                cursor: "pointer",
                opacity: 1, // No default opacity
                "&:hover": {
                  transform: "scale(1.1)",
                  opacity: 1,
                },
              }}
            >
              {/* Black overlay effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0)", // Transparent by default
                  transition: "background-color 0.5s ease",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay on hover
                  },
                }}
              />
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  padding: "20px 0",
                  zIndex: 2, // Ensure the text is on top of the overlay
                }}
              >
                {slide.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    <MoreAbout />
    </>
  );
};

export default Details;
