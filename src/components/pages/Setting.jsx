import React from 'react'
import SideNav from '../SideNav/SideNav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Navbar from '../Navbar/Navbar';

const Setting = () => {
  return (
    <div>
      <Navbar />
    <Box height={60} />
      <Box sx={{ display: 'flex' }}>
      <SideNav/>
      <div className='text-6xl'>Setting</div>
     
      </Box>
      
    </div>
  )
}

export default Setting;

