// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import TextField from '../atom/TextField'
// import ToggleButtonGroup from "../molecules/ToggleButtonGroup"
// import BedtimeIcon from '@mui/icons-material/Bedtime';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// }));

// export default function AutoGrid() {
//   return (
//     // <Box sx={{ flexGrow: 1 }}  alignItems="center">
//       <Grid container spacing={3} direction="row" justifyContent="space-evenly" alignItems="center">
//         <Grid item>
//           <h3>Logo</h3>
//         </Grid>
//         <Grid item>
//           <TextField/>
//         </Grid>
//         <Grid item>
//             {/* <Grid container spacing={5} > */}
//             <Grid>
//                 {/* <Box sx={{padding: 0.8, border: 1, borderRadius:1}}>
//                 <BedtimeIcon/>
//                 </Box> */}
//                 {/* <BedtimeIcon/> */}
//             </Grid>
//             <Grid>
//                 <ToggleButtonGroup/>
//             </Grid>
//             {/* </Grid> */}
//             {/* <Grid item xs>
//                 Some
//             </Grid>
//             <Grid item xs>
//                 <ToggleButtonGroup/>
//             </Grid> */}
//         </Grid>
//       </Grid>
//     //  </Box>
//   );
// }


import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuItems from "../molecules/MenuItems"
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  // width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.black,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cartItems = [
    {
      id: 1,
      name: 'Modern Living Room Set',
      quantity: 1,
      price: 1540.0,
      image: 'https://source.unsplash.com/50x50/?living-room',
    },
    {
      id: 2,
      name: 'Cozy Sofa',
      quantity: 1,
      price: 110.0,
      image: 'https://source.unsplash.com/50x50/?sofa',
    },
    {
      id: 3,
      name: 'Elegant Coffee Table',
      quantity: 1,
      price: 320.0,
      image: 'https://source.unsplash.com/50x50/?coffee-table',
    },
    {
      id: 4,
      name: 'Stylish Armchair',
      quantity: 1,
      price: 250.0,
      image: 'https://source.unsplash.com/50x50/?armchair',
    },
    {
      id: 5,
      name: 'Modern Dining Set',
      quantity: 1,
      price: 1200.0,
      image: 'https://source.unsplash.com/50x50/?dining-set',
    }
];


  const drawerList = () => (
    <Box sx={{ width: 350 }} role="presentation">
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Cart</Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemAvatar>
              <Avatar src={item.image} variant="square" sx={{ width: 60, height: 60 }} />
            </ListItemAvatar>
            <Box sx={{ flex: 1, ml: 2 }}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">{`1 x $${item.price}`}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconButton size="small">
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                <IconButton size="small">
                  <AddIcon />
                </IconButton>
                <IconButton size="small" sx={{ ml: 1 }}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 1, backgroundColor: '#FF6600', '&:hover': { backgroundColor: '#FF6600' } }}
        >
          View Cart
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ backgroundColor: '#FF6600', '&:hover': { backgroundColor: '#FF6600' } }}
        >
          $1650.00
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(15px)',
          boxShadow: scrolled ? 4 : 'none',
          transition: 'background-color 0.3s, box-shadow 0.3s',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Apni Dukan
            {/* <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="Logo" style={{ height: '30px', marginRight: '10px' }} /> */}
          </Typography>
          <Search color="inherit">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            //  color="inherit"
              sx={{ color: '#363434' }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div>
            <IconButton
              size="large"
              aria-label="show cart items"
              sx={{ color: 'black' }}
              onClick={toggleDrawer(true)}
            >
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ color: 'black' }}
            >
              <AccountCircle />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Sign In</MenuItem>
              <MenuItem onClick={handleClose}>Cart</MenuItem>
              <MenuItem onClick={handleClose}>Wishlist</MenuItem>
            </Menu> */}
            <MenuItems anchorEl={anchorEl} open={open}  handleClose={handleClose}/>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Navbar;
