import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Select, MenuItem, FormControl, InputLabel, Rating } from '@mui/material';

// Define the ItemInfo component
const SingleItemDetail = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', mt: 4, padding: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box
            component="img"
            src={item.image.replace(/[\[\]"]/g, '')}
            alt={item.title}
            sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" component="div" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Price: ${item.price}
          </Typography>
          <Rating name="read-only" value={item.rating} readOnly />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {item.description}
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="size-select-label">Size</InputLabel>
            <Select
              labelId="size-select-label"
              id="size-select"
              value={selectedSize}
              label="Size"
              onChange={handleSizeChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {item.sizes.map((size) => (
                <MenuItem key={size} value={size}>{size}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="quantity-select-label">Quantity</InputLabel>
            <Select
              labelId="quantity-select-label"
              id="quantity-select"
              value={quantity}
              label="Quantity"
              onChange={handleQuantityChange}
            >
              {[1, 2, 3, 4, 5].map((qty) => (
                <MenuItem key={qty} value={qty}>{qty}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ mt: "auto", display: "flex", gap:2}}>
          <Button variant="contained" color="primary" sx={{ flexGrow: 2 }}>
            Add to Cart
          </Button>
          <Button variant="contained" color="secondary" sx={{ flexGrow: 2 }}>
            Buy Now
          </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleItemDetail