import { Box , Typography, List, ListItem, ListItemText} from '@mui/material'
import React from 'react'
import BouncyButton from '../../utils/bouncyButton'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    const menuItems = ["Home", "About", "Services", "Fleet", "Career", "Oasis Fincorp", "Contact"];


  return (
    <Box sx={{maxWidth:'100vw', minHeight:'68vh',bgcolor:'#090909',color:'white',mt:'8vmax',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Box sx={{width:{xs:'100%',md:'80%'},height:'100%',display:'flex',pt:'3vmax',flexDirection:{xs:'column', md:'row'}}}>
            <Box sx={{width:{xs:'100%', md:'25%'},height:'100%',  padding: {xs:'1rem',md:"2rem"},}}>
                <Box component={'img'} src='logo.png' sx={{width:{xs:'23vmax',md:'18vmax'}, objectFit:'contain',objectPosition:'center',display:'block'}}></Box>
                <Box component={'img'} src='logo1.png' sx={{width:{xs:'23vmax',md:'18vmax'}, objectFit:'contain',objectPosition:'center',display:'block'}}></Box>
                <Box component={'img'} src='logo2.png' sx={{width:{xs:'23vmax',md:'18vmax'}, objectFit:'contain',objectPosition:'center',display:'block'}}></Box>
                <Box sx={{width:'100%',display:'flex',justifyContent:{xs:'flex-start',md:'space-evenly'}, mt:{xs:'3vmax',md:'2vmax'}, "& button":{mr:'1vmax'}}}>
                    <BouncyButton value={<MailOutlineIcon sx={{bgcolor:'transparent', color:'#b1b1b1', outline:'none',scale:0.8}}/>}  styles={{bgcolor:'#090909',width:{xs:'35px',md:'45px'},height:{xs:'35px',md:'45px'}, borderRadius:'50%', border:'0.5px solid white',overflow:'hidden',positon:'relative'}}   disp={{x:2, y:2}}/>
                    <BouncyButton value={<FacebookOutlinedIcon sx={{bgcolor:'transparent', color:'#b1b1b1', outline:'none',scale:0.8}}/>}  styles={{bgcolor:'#090909',width:{xs:'35px',md:'45px'},height:{xs:'35px',md:'45px'}, borderRadius:'50%', border:'0.5px solid white',overflow:'hidden',positon:'relative'}}   disp={{x:2, y:2}}/>
                    <BouncyButton value={<LinkedInIcon sx={{bgcolor:'transparent', color:'#b1b1b1', outline:'none',scale:0.8}}/>}  styles={{bgcolor:'#090909',width:{xs:'35px',md:'45px'},height:{xs:'35px',md:'45px'}, borderRadius:'50%', border:'0.5px solid white',overflow:'hidden',positon:'relative'}}   disp={{x:2, y:2}}/>
                    <BouncyButton value={<MailOutlineIcon sx={{bgcolor:'transparent', color:'#b1b1b1', outline:'none',scale:0.8}}/>}  styles={{bgcolor:'#090909',width:{xs:'35px',md:'45px'},height:{xs:'35px',md:'45px'}, borderRadius:'50%', border:'0.5px solid white',overflow:'hidden',positon:'relative'}}   disp={{x:2, y:2}}/>
                </Box>
            </Box>
        
            <Box
      sx={{
        color: "#fff", // White text
        padding: {xs:'1rem',md:"2rem"},
        width:{xs:'100%', md:'25%'},height:'100%', 
      }}
    >
      {/* Navigation Header */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          position: "relative",
          fontSize:{xs:'2vmax',md:'1.1vmax'}
        }}
      >
        Navigation
      </Typography>
      
      {/* Small Bar Below Navigation */}
      <Box
        sx={{
          width: "20px", // Small bar width
          height: "2px",
          backgroundColor: "#fff", // White bar
        }}
      ></Box>
      
      {/* Navigation Items */}
      <List sx={{ marginTop: {xs:'0px' ,md:"1vmax"} }}>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                sx: { 
                  fontSize: {xs:'1.8vmax',md:"0.9vmax"}, 
                  fontWeight: 400, // Regular font weight
                  color: "#b0b0b0", // Gray color for text
                  "&:hover": { color: "#fff", cursor: "pointer" }, // Hover effect
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
         
          
            <Box
      sx={{
        color: "#fff", // White text
        padding: {xs:'1rem',md:"2rem"},
        width:{xs:'100%', md:'25%'},height:'100%', 
      }}
    >
      {/* Navigation Header */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          position: "relative",
          fontSize:{xs:'2vmax',md:'1.1vmax'}
        }}
      >
        Contact
      </Typography>
      
      {/* Small Bar Below Navigation */}
      <Box
        sx={{
          width: "20px", // Small bar width
          height: "2px",
          backgroundColor: "#fff", // White bar
        }}
      ></Box>
      
      {/* Navigation Items */}
     <Box sx={{fontSize:{xs:'1.8vmax',md:"1.2vmax"},fontWeight: 600,color: "#b0b0b0", mb:'1vmax',mt:'2vmax',display:'flex',alignItems:'center'}} component={'p'}>
        <PhoneInTalkIcon sx={{fontSize: {xs:'2.2vmax', md:"1.4vmax"},mr:'0.3vmax'}}/> Contact No.
     </Box>
     <Box sx={{fontSize: {xs:'1.8vmax',md:"0.9vmax"},fontWeight: 400,color: "#b0b0b0"}} component={'p'}>022-25209557 / 022-25209558</Box>
     <Box sx={{fontSize: {xs:'1.8vmax',md:"0.9vmax"},fontWeight: 400,color: "#b0b0b0"}} component={'p'}>+91-7666838383 / +91-7666828282</Box>

     <Box component={'p'} sx={{fontSize: {xs:'1.8vmax',md:"1.2vmax"},fontWeight: 600,color: "#b0b0b0", mb:'1vmax',mt:'2vmax',display:'flex',alignItems:'center'}}>
        <MailOutlineIcon  sx={{fontSize: {xs:'2.2vmax', md:"1.4vmax"},mr:'0.3vmax'}}/> Email Id
     </Box>
     <Box sx={{fontSize :{xs:'1.8vmax',md:"1.2vmax"},fontWeight: 400,color: "#b0b0b0"}} component={'p'}>info@peng.com</Box>
    </Box>
         
          
            <Box    
      sx={{
        color: "#fff", // White text
        padding: {xs:'1rem',md:"2rem"},
        width:{xs:'100%', md:'25%'},
        height:'100%', 
      }}
    >
      {/* Navigation Header */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          position: "relative",
          fontSize:{xs:'2vmax',md:'1.1vmax'}
        }}
      >
        Address
      </Typography>
      
      {/* Small Bar Below Navigation */}
      <Box
        sx={{
          width: "20px", // Small bar width
          height: "2px",
          backgroundColor: "#fff", // White bar
          mb:'2vmax'
        }}
      ></Box>
      
    
     <Box sx={{fontSize:  {xs:'1.8vmax',md:"1.2vmax"},fontWeight: 400,color: "#b0b0b0"}} component={'p'}>120/B, Shrikant Chambers, Sion Trombay Road, Near R.K.Studio, Chembur - 400071.</Box>
     <Box sx={{fontSize:  {xs:'1.8vmax',md:"1.2vmax"},fontWeight: 400,color: "#b0b0b0"}} component={'p'}>Mumbai, India.</Box>
    </Box>
            
        </Box>
    </Box>
  )
}

export default Footer