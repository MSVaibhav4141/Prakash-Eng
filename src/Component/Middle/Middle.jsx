import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection.jsx'
import { Box } from '@mui/system'
import Experience from '../Exp/exp.jsx'

const Middle = () => {
    
  return (
    <>
    <Box sx={{maxWidth:'100vw', height:{md:'100vh'},display:'flex',color:'white',flexDirection:{xs:'column',md:'row'}}}>
    <LeftSection />
    <RightSection />
    </Box>
    <Experience />
    </>
  )
}

export default Middle