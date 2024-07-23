import * as React from "react";
import {MenuItem, Menu} from '@mui/material';


export default function MenuItems({anchorEl, open, handleClose, setAnchorEl}) {

    const handleClick = (e)=>{
        // console.log(e,"MenuList1")
        // console.log(e.target,"MenuList2")
        // console.log(e.target.name,"MenuList3")
        // console.log(e.target.getAttribute("name"), "MenuList3");

        setAnchorEl(null)
    }
  
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
        <MenuItem name="profile" onClick={handleClick}>Profile</MenuItem>
        <MenuItem onClick={handleClick}>My account</MenuItem>
        <MenuItem onClick={handleClick}>About</MenuItem>
        <MenuItem onClick={handleClick}>Cart</MenuItem>
        <MenuItem onClick={handleClick}>Wishlist</MenuItem>
        <MenuItem onClick={handleClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
