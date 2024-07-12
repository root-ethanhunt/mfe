import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Button, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Select, MenuItem, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Define the CartItem component
const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          variant="square"
          src={item.image.replace(/[\[\]"]/g, '')}
          alt={item.title}
          sx={{ width: 80, height: 80 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={
          <>
            <Typography component="span" variant="body2" color="text.primary">
              Price: ${item.price}
            </Typography>
            <br />
            <FormControl sx={{ minWidth: 60 }}>
              <Select
                value={item.quantity}
                onChange={(e) => onQuantityChange(item.id, e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <MenuItem key={qty} value={qty}>{qty}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        }
      />
      <IconButton edge="end" aria-label="delete" onClick={() => onRemove(item.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;