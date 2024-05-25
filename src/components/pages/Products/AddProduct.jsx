import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MenuItem from '@mui/material/MenuItem';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box, Button, Grid, IconButton,InputAdornment, TextField, Typography } from '@mui/material'
import { collection , addDoc , getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/FirebaseConfig';
import Swal from 'sweetalert2';
import { useAppStore } from '../../AppStore';

const currencies = [
    {
      value: 'Mobail',
      label: 'Mobail',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Keyboard',
      label: 'Keyboard',
    },
    {
      value: 'Blututh',
      label: 'Blututh',
    },
  ];

  


const AddProduct = ({CloseEvent}) => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState(0)
    const [catagory,setCatagory] = useState('');

    // const [rows, setRows] = useState([]);
    const setRows = useAppStore((state)=>state.setRows);
    const empcollectionRef = collection(db,'Products')
    const handalNameChange = (e) =>{
        setName(e.target.value)
    }
    const handalPriceChange = (e) =>{
        setPrice(e.target.value)
    }
    const handalCatagoryChange = (e) =>{
        setCatagory(e.target.value)
    }

    const createUser = async()=>{
        await addDoc(empcollectionRef,{
            name:name,
            price:Number(price),
            catagory:catagory,
            date:String(new Date()),
        }
    )
    getUsers();
    CloseEvent();
    Swal.fire("Submitted!","Your File has been submitted.","success")
    }

    const getUsers = async()=>{
        const data = await getDocs(empcollectionRef);
        setRows(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      };

  

  return (
    <>
      <Box sx={{m:2}}/>
        <Typography>
            Add Product
        </Typography>
        <Box sx={{height:20}}/>
        <IconButton onClick={CloseEvent} sx={{position:'absolute',top:'0',right:'0'}}><CloseIcon/>
        </IconButton>
        <Grid container spacing={2}> 
        <Grid item xs={12}>
            <TextField onChange={handalNameChange} value={name} className='w-full' id="outlined-basic" label="Name" variant="outlined" size='small' />
        </Grid>
        <Grid item xs={6}>
            <TextField 
            onChange={handalPriceChange} 
            value={price} 
            className='w-full' 
            id="outlined-basic"
            type='number' 
            label="Price"
           
            variant="outlined"
            size='small' 
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                        <CurrencyRupeeIcon />
                    </InputAdornment>
                ),
            }} />
        </Grid>
        <Grid item xs={6}>
         <TextField
         className='w-full' variant='outlined' 
         size='small'
         onChange={handalCatagoryChange}
         value={catagory}
          id="outlined-select-currency"
          select
          label="Catagory"
          defaultValue="EUR"
          helperText="Please select your Catagory"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h5' align='center' >
                <Button onClick={createUser} variant='contained'>Submit</Button>
            </Typography>
        </Grid>
        </Grid>
        <Box sx={{m:4}}/>
    </>
  )
}

export default AddProduct
