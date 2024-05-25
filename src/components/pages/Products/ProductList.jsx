import * as React from 'react';
import { useState,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider, Typography } from '@mui/material';
import { db } from '../../../Firebase/FirebaseConfig';

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import AddProduct from './AddProduct';
import { useAppStore } from '../../AppStore';
import EditProduct from './EditProduct';
import Skeleton from '@mui/material/Skeleton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
 



const ProductList = () => {
    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [rows, setRows] = useState([]);
  const setRows = useAppStore((state)=>state.setRows);
  const rows = useAppStore((state)=>state.rows);
  const empCollectionRef = collection(db,'Products');
  const [formId,setFormId] = useState('')

//   modal
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // edit
  const [editOpen,setEditOpen] = useState(false)
  const handleEditOpen = () => setEditOpen(true)
  const handaleEditClose = () => setEditOpen(false)

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers = async()=>{
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id)=>{
    Swal.fire({
        title:"Are You Sure?",
        text:"You Won't be able to revert this!",
        icon:"warning",
        showCancelButton:true,
        confirmButtonColor:'#ea382b',
        cancelButtonColor:'#28b626',
        confirmButtonText:'Yes,Delete it!',
    }).then((result)=>{
        if(result.value){
            deleteApi(id);
        }
    });
};

const deleteApi = async (id) => {
    const userDoc = doc(db,'Products',id);
    await deleteDoc(userDoc);
    Swal.fire('Deleted!','Your file has been deleted.',"success");
    getUsers();
}

const filterData = (v) => {
    if (v) {
      setRows([v]);
     
    } else {
        setRows([]);
      getUsers();
    }
  };

  const editData = (id,name,price,catagory)=>{
    const data = {
        id:id,
        name:name,
        price:price,
        catagory:catagory
    }
  setFormId(data);
  handleEditOpen()

  }

  return (
    <>
  
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography className='text-[#7D90AF]'
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" , fontWeight:'600'}}
          >
            Products List
          </Typography>
          <Divider/>
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button onClick={handleOpen} variant="contained" endIcon={<AddCircleIcon />}>
              Add
            </Button>
              {/* Modal start */}
              {/* add Modal start*/}
            <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddProduct CloseEvent={handleClose} />
        </Box>
           </Modal>
           {/* add modal end */}
            {/* edit modal start */}
            <Modal
        open={editOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditProduct CloseEvent={handaleEditClose} fid={formId} />
        </Box>
           </Modal>
            {/* edit modal end */}
           {/* Modal end */}
          </Stack>
          <Box height={10} />
         
          
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                  Name
                </TableCell>
                <TableCell
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                  Price
                </TableCell>
                <TableCell
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                   Category
                </TableCell>
                <TableCell
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                  Date
                </TableCell>
                <TableCell
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                  Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <TableRow hover role="checkbox" tabIndex={-1} >
                        <TableCell key={row.id} align={'left'}>
                          {row.name}
                        </TableCell>
                        <TableCell key={row.id} align={'left'}>
                          {row.price}
                        </TableCell>
                        <TableCell key={row.id} align={'left'}>
                          {row.catagory}
                        </TableCell>
                        <TableCell key={row.id} align={'left'}>
                          {row.date}
                        </TableCell>
                        <TableCell  align={'left'}>
                            <Stack spacing={2} direction={'row'}>
                          <EditIcon  onClick={()=> { editData(row.id,row.name,row.price,row.catagory)}} className='text-[20px] text-[blue] cursor-pointer'/>
                          <DeleteIcon onClick={()=>deleteUser(row.id)} className='text-[20px] text-[red] cursor-pointer'/>
                          </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    {rows.length == 0 && (
        <>
        <Paper sx={{width:'98%',overflow:'hidden' ,padding:'12px'}}>
            <Box height={20} />
            <Skeleton variant='rectangular' width={'100%'} height={30}/>
            <Box height={40} />
            <Skeleton variant='rectangular' width={'100%'} height={60}/>
            <Box height={20} />
            <Skeleton variant='rectangular' width={'100%'} height={60}/>
            <Box height={20} />
            <Skeleton variant='rectangular' width={'100%'} height={60}/>
            <Box height={20} />
            <Skeleton variant='rectangular' width={'100%'} height={60}/>
            <Box height={20} />
            <Skeleton variant='rectangular' width={'100%'} height={60}/>
            <Box height={20} />
        </Paper>
        </>
    )}
    </>
  )
}

export default ProductList;

