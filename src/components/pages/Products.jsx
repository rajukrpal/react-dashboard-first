import React from 'react'
import SideNav from '../SideNav/SideNav'
import Navbar from '../Navbar/Navbar';
import { Box } from '@mui/material'
import ProductList from './Products/ProductList';




const Products = () => {
  return (
    <>
    <div className='bg-[#cccccc]'>
    <Navbar />
    <Box height={70} />
      <Box sx={{ display: 'flex' }}>
      <SideNav/>
      <Box sx={{ flexGrow: 1,p:2, height:'89vh'}}>
        <ProductList/>
      </Box>
      </Box>
    </div>
    
      
    </>
  )
}



export default Products
