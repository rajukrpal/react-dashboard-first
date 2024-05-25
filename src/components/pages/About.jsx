import React from 'react'
import SideNav from '../SideNav/SideNav'
import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography';
import Navbar from '../Navbar/Navbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import '../SideNav/StyleNavLink.css'



const About = () => {
  return (
    <div className=' w-full'>
      <Navbar />
    <Box height={65} className=''/>
      <Box sx={{ display: 'flex' }}>
      <SideNav/>
      <Box className='bg-[#ccccb3] p-4' >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8} >
        <Card sx={{ maxWidth:'full' , height: 35 + 'vh'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Raju Kumar Pal
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I am learning Reactjs. And now I am learned MUI documentation . Now I have read the documentation of Material UI.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth:'full' , height: 35 + 'vh'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Address
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Vill + Post = KESATH,<br></br>District - BUXAR ( BIHAR )<br></br>
          Police Station - Nawanagar <br></br>
          PinCode - 802125
        </Typography>
      </CardContent>
    
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ maxWidth:'full',height: 35 + 'vh' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contect Detail
        </Typography>
        <Typography variant="body2" color="text.secondary" className=''>
          +91 6209090900<br></br>
          +91 9534388800
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small" sx={{backgroundColor:'red' , ":hover":{backgroundColor:'#ff4d4d'}}} >Call</Button>
        <Button variant='contained' size="small" sx={{backgroundColor:'green', ":hover":{backgroundColor:'#006600'}}}>Massage</Button>
      </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
        <Card  sx={{
              minWidth: 'full',
              height: 35 + 'vh',
              '@media screen and (max-width: 1000px)': {
              height: 65 + 'vh',
            }
          }}>
      <CardContent className='flex justify-center items-center '>
      <FormControl component="form" className=''>
      <FormGroup >
        <FormLabel className='mb-[8px] text-center' sx={{fontWeight:'600',color:'black'}} >Enter Your Deatail</FormLabel>
        <div className=''>
        <Stack direction='row' spacing={2} className='stack-md stack-sm' sx={{
          minWidth: 'full',
          '@media screen and (max-width: 900px)': {
           flexDirection:'column',
           gap:'20px',
           alignItems: 'center', 
           textAlign: 'center' 
          }
        }}>
      <div className='pl-4'>
  <TextField className='w-max text-center' id="filled-basic" label="Name" type='text' variant="filled" />
  </div>
      <TextField className='w-max' id="filled-basic" label="Email" type='text' variant="filled" />
      <TextField className='w-max hiddinNUM' id="filled-basic" type="number" label="Contect No" variant="filled" />
    </Stack>
    </div>
      <div className='text-center my-5'>
      <Button variant='outlined' type="submit">Submit</Button>
      </div>
      </FormGroup>
    </FormControl>
      </CardContent>
        </Card>
        </Grid>
      </Grid>
      </Box>
      </Box>
      
    </div>
  )
}

export default About;

