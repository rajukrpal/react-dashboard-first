import React from 'react'
import SideNav from '../SideNav/SideNav'
import Navbar from '../Navbar/Navbar';
import { Box, Card, CardContent, Typography  } from '@mui/material'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BarChartAnaliy from '../Chart/BarChartAnaliy';
import GeoChart from '../Chart/GeoChart';
import PieChart from '../Chart/PieChart';
import CountUp from 'react-countup';


const Analysis = () => {
  return (
    <>
<div className=''>
    <Navbar />
    <Box height={65} />
      <Box sx={{ display: 'flex' }}>
      <SideNav/>
      <Box sx={{ flexGrow: 1,p:2}} className='bg-[#cccccc]'>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={7}>
      <Stack spacing={2} direction="row">
      <Card  sx={{ minWidth: 49 + '%',height:155  }}>
      <CardContent className='bg-[#8e7cc3]'>
        <div className='text-white'>
          {/* <CreditCardIcon  sx={{fontSize:'30px'}} className=''/> */}
          <Typography variant='p'>
            Visitors
          </Typography>
          <div className='my-5'>
            <Stack spacing={2} direction="column">
            <CountUp className='text-2xl' delay={0.2} end={45050}  duration={3} ></CountUp>
            <span className='text-sm '>Total Earning</span>
            </Stack>
          </div>
        </div>        
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 49 + '%',height:155 }}>
    <CardContent className='bg-[#4c4cff]'>
        <div className='text-white'>
          {/* <LocalMallIcon  sx={{fontSize:'30px'}} className=''/> */}
          <Typography variant='p'>
            Visitors
          </Typography>
          <div className='my-5'>
            <Stack spacing={1} direction="column">
            <CountUp className='text-2xl' delay={0.2} end={24670}  duration={2.5} ></CountUp>
            <span className='text-sm '>Total Earning</span>
            </Stack>
          </div>
        </div>        
        
      </CardContent>
    </Card>
    </Stack>
    <Box className='mt-6' />
    <Stack className='' direction={'row'} spacing={2} >
    <Card  sx={{ minWidth: 49 + '%',height:155  }} >
      <CardContent className='bg-[#8e7cc3]'>
        <div className='text-white'>
          {/* <CreditCardIcon  sx={{fontSize:'30px'}} className=''/> */}
          <Typography variant='p'>
            Visitors
          </Typography>
          <div className='my-5'>
            <Stack spacing={1} direction="column">
            <CountUp className='text-2xl' delay={0.2} end={65398}  duration={4} ></CountUp>
            <span className='text-sm '>Total Earning</span>
            </Stack>
          </div>
        </div>        
      </CardContent>
    </Card>
    <Card  sx={{ minWidth: 49 + '%',height:155  }}>
      <CardContent className='bg-[#8e7cc3]'>
        <div className='text-white'>
          {/* <CreditCardIcon  sx={{fontSize:'30px'}} className=''/> */}
          <Typography variant='p'>
            Visitors
          </Typography>
          <div className='my-5'>
            <Stack spacing={1} direction="column">
            <CountUp className='text-2xl' delay={0.2} end={56457665}  duration={8} ></CountUp>
            <span className='text-sm '>Total Earning</span>
            </Stack>
          </div>
        </div>        
      </CardContent>
    </Card>
    </Stack>
    </Grid>
    <Grid item xs={12} md={5} sm={12}>
    <Card sx={{ height:335 }}>
      <CardContent>
        <BarChartAnaliy/>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <Card sx={{ height: 60 + 'vh' }}>
      <CardContent>
        <GeoChart/>
      </CardContent>
    </Card>
    
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ height: 60 + 'vh' }}>
      <CardContent>
        <PieChart/>
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

export default Analysis
