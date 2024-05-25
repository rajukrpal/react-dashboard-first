import React from 'react'
import SideNav from '../SideNav/SideNav'
import Navbar from '../Navbar/Navbar';
import { Box, Card, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccordianDash from '../AccordianDash';
import ChartDash from '../Chart/ChartDash';
import CountUp from 'react-countup';
// import styled from '@emotion/styled';

// const StyledCard = styled.div`
//   max-width: 99%;
//   height: 70px;
  
//   @media screen and (max-width: 600px) {
//     width: 100%;
//   }
  
//   @media screen and (min-width: 601px) and (max-width: 960px) {
//     width: 80px;
//   }
  
//   @media screen and (min-width: 961px) {
//     max-width: 99%;
//   }
// `;


const Home = () => {
  return (
    <>
    <div >
    <Navbar />
    <Box height={64} />
      <Box sx={{ display: 'flex' }}  >
      <SideNav/>
      <Box sx={{ flexGrow: 1,p:2}} className='bg-[#cccccc]'>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} lg={8} md={7}>
      <Stack spacing={2} direction="row" >
      <Card  sx={{
  minWidth: '48%',
  height: 155,
  '@media screen and (max-width: 600px)': {
    minWidth: '49%',
  },
  '@media screen and (max-width: 400px)': {
    minWidth: '48%',
  }
}}>
      <CardContent className='bg-[#8e7cc3]'>
        <div className='text-white'>
          <CreditCardIcon  sx={{fontSize:'30px'}} className=''/>
          <div className='my-5'>
            <Stack spacing={1} direction="column">
            <span className='text-2xl'>$<CountUp start={-875.039} delay={0.3} end={160527.012} duration={3}></CountUp>.<CountUp start={390} delay={0.3} end={5} duration={3}></CountUp></span>
            <span className='text-sm text-gray-400'>Total Earning</span>
            </Stack>
          </div>
        </div>        
      </CardContent>
    </Card>
    <Card sx={{
  minWidth: '49%',
  height: 155,
  '@media screen and (max-width: 600px)': {
    minWidth: '46%',
  },
  '@media screen and (max-width: 400px)': {
    minWidth: '46%',
  },
  '@media screen and (max-width: 300px)': {
    minWidth:'20%'
  },
  '@media screen and (max-width: 1000px)': {
    minWidth:'48%'
  }
}}>
    <CardContent className='bg-[#4c4cff]'>
        <div className='text-white'>
          <LocalMallIcon  sx={{fontSize:'30px'}} className=''/>
          <div className='my-5'>
            <Stack spacing={1} direction="column">
            <span className='text-2xl'>$<CountUp  delay={0.3} end={8463.05} duration={3}></CountUp></span>
            <span className='text-sm text-gray-400'>Total Earning</span>
            </Stack>
          </div>
        </div>        
        
      </CardContent>
    </Card>
    </Stack>
    </Grid>
    <Grid item xs={12} sm={12} lg={4} md={5}>
    <Stack spacing={2} direction="column">
    <Card sx={{ maxWidth: 99 + '%',height:70 }}>
    <CardContent className='bg-[#d2e2fc]'>
        <div className='flex items-center gap-4'>
        <AccountBalanceIcon className='text-[#e97272]'/>
        <div>
        <Stack  direction="column">
        <span className='font-bold'>$678k</span>
       <span className='text-gray-400 text-sm'>Total Income</span>
       </Stack>
        </div>
        </div>
      </CardContent>
    </Card>
    <Card  sx={{ maxWidth: 99 + '%',height:70 }}>
      <CardContent className='bg-[#b4cffa]'>
        <div className='flex items-center gap-4 '>
        <AccountBalanceIcon className='text-[#dd57a6]'/>
        <div>
        <Stack  direction="column">
        <span className='font-bold'>$998k</span>
       <span className='text-gray-400 text-sm'>Total Income</span>
       </Stack>
        </div>
        </div>
      </CardContent>
    </Card>
    </Stack>
    </Grid>
    </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}  sm={12} lg={8} md={7}>
        <Card sx={{ height: 60 + 'vh' ,maxWidth:99 + '%' }}>
      <CardContent>
        <ChartDash/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12}  sm={12} lg={4} md={5}>
        <Card sx={{ height: 60 + 'vh',maxWidth:99 + '%' }}>
      <CardContent>
        <Typography variant='h6' className='text-center' sx={{fontWeight:'600'}}>
        Popular Product
        </Typography>
        <AccordianDash/>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
    </Box>
      </Box>
    </div>
    
      
    </>
  )
}

export default Home



