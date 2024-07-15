// Import necessary dependencies from Material-UI
import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar ,Divider} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartItem from './CartItem';

// Define the Cart component
const Cart = ({ items, onRemoveItem, onQuantityChange }) => {
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  
    return (
      <Box sx={{ maxWidth: 1200, margin: 'auto', mt: 4, padding: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Shopping Cart
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <List>
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <CartItem item={item} onRemove={onRemoveItem} onQuantityChange={onQuantityChange} />
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
              <Typography variant="h6" component="div" gutterBottom>
                Order Summary
              </Typography>
              <Typography variant="body1" gutterBottom>
                Subtotal ({items.length} items): ${totalPrice}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Proceed to Checkout
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };

export default Cart;
