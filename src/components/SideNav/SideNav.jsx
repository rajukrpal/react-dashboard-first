import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppStore } from '../AppStore';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import '../SideNav/StyleNavLink.css'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

  
const SideNav = () => {
  // const theme = useTheme();
  const navigate = useNavigate();
    const open = useAppStore((state)=>state.dopen);

  return (
    <div>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
      <Box height={60} />
        <Divider />
        <List>
        <NavLink activeClassName='active' to={'/'} >
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/')} >
              <ListItemButton className='bg-black'
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <HomeIcon /> 
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink activeClassName='active' to={'/user'}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/user')}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <SupervisorAccountIcon /> 
                </ListItemIcon>
                <ListItemText primary='User' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
              </NavLink>
              <NavLink activeClassName='active' to={'/dashboard'}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/dashboard')}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <DashboardIcon /> 
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
              </NavLink>
              <NavLink to={'/products'}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/products')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <LocalGroceryStoreIcon /> 
                </ListItemIcon>
                <ListItemText primary='Products' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink to={'/analysis'}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/analysis')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}

                >
                 <AssessmentIcon /> 
                </ListItemIcon>
                <ListItemText primary='Analysis' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink to={'/setting'}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/setting')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <SettingsIcon /> 
                </ListItemIcon>
                <ListItemText primary='Setting' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </NavLink>
            <NavLink to={'/about'}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate('/about')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}

                >
                 <InfoIcon /> 
                </ListItemIcon>
                <ListItemText primary='About' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </NavLink>
        </List>
        {/* <Divider /> */}
      </Drawer>
    </Box>
    </div>
  )
}

export default SideNav;





