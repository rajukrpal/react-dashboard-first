import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideNav from '../SideNav/SideNav'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LineChart from '../Chart/LineChart'
import LineChart2 from '../Chart/LineChart2';
import ChartDash from '../Chart/ChartDash';
import PieChart from '../Chart/PieChart';
import SpeedChart from '../Chart/SpeedChart';
import MarketChart from '../Chart/MarketChart';
import CountUp from 'react-countup';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Dashboard = () => {
  return (
    <>
        <div>
        <Navbar />
        <Box height={65} />
            <Box sx={{display:'flex'}} >
            <SideNav/>
            <Box sx={{flexGrow:1,p:2}} className='bg-[#cccccc]'>
                {/*  */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
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
          <AccountCircleIcon  sx={{fontSize:'30px'}} className=''/>
          <div className='my-5'>
            <Stack spacing={1} direction="column">
            <span className='text-2xl'>54647K</span>
            <span className='text-sm text-gray-400'>Total User</span>
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
          <BookmarkIcon  sx={{fontSize:'30px'}} className=''/>
          <div className='my-5'>
            <Stack spacing={1} direction="column">
            <span className='text-2xl'><CountUp  delay={0.3} end={8463.05} duration={3}></CountUp>K</span>
            <span className='text-sm text-gray-400'>Total Following</span>
            </Stack>
          </div>
        </div>        
        
      </CardContent>
    </Card>
    </Stack>
                  </Grid>
   
                   <Grid item xs={12} sm={12} lg={6} md={6}>
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
            <span className='text-sm text-gray-400'>Total investment</span>
            </Stack>
          </div>
        </div>        
        
      </CardContent>
    </Card>
    </Stack>
                  </Grid>
                </Grid>
                <Box height={20} />
                {/*  */}
                <Grid container spacing={2}>
        <Grid item xs={12}  sm={12} lg={7} md={7}>
        <Card sx={{ height: 60 + 'vh' ,maxWidth:99 + '%' }}>
      <CardContent>
        <LineChart/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12}  sm={12} lg={5} md={5}>
        <Card sx={{ height: 60 + 'vh',maxWidth:99 + '%' }}>
      <CardContent>
        <Typography variant='h6' className='text-center' sx={{fontWeight:'600'}}>
        Popular Product
        </Typography>
            <ChartDash/>
      </CardContent>
    </Card>
        </Grid>
                </Grid>
                <Box height={20} />
                <Grid container spacing={2}>
        <Grid item xs={12}  sm={12} lg={8} md={7}>
        <Card sx={{ height: 60 + 'vh' ,maxWidth:99 + '%' }}>
      <CardContent>
        <LineChart2/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12}  sm={12} lg={4} md={5}>
        <Card sx={{ height: 60 + 'vh',maxWidth:99 + '%' }}>
      <CardContent>
        <Typography variant='h6' className='text-center' sx={{fontWeight:'600'}}>
        Popular Product
        </Typography>
            <PieChart/>
      </CardContent>
    </Card>
        </Grid>
                </Grid>
                <Box height={20} />
                <Grid container spacing={2}>
        <Grid item xs={12}  sm={12} lg={5} md={7}>
        <Card sx={{ height: 60 + 'vh' ,maxWidth:99 + '%' }} >
      <CardContent className='flex justify-center items-center'>
        <Box >
      <SpeedChart />
        </Box>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12}  sm={12} lg={7} md={5}>
        <Card sx={{ height: 60 + 'vh',maxWidth:99 + '%' }}>
      <CardContent>
        <Typography variant='h6' className='text-center' sx={{fontWeight:'600'}}>
        Market Chart
        </Typography>
            <MarketChart/>
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

export default Dashboard



