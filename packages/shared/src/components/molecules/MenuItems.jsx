import * as React from "react";
import {MenuItem, Menu} from '@mui/material';


export default function MenuItems({anchorEl, open, handleClose}) {
  
  return (
    <div>
      <Menu
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
