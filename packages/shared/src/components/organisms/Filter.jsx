// Import necessary dependencies from Material-UI
import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Slider, Typography, Grid, Button } from '@mui/material';

// Define the FilterSection component
const Filter = ({ onApplyFilters }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([20, 50]);
  const [rating, setRating] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brands] = useState(['Brand A', 'Brand B', 'Brand C', 'Brand D']); // Replace with dynamic data if needed

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleBrandChange = (event) => {
    const brand = event.target.name;
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({ category, priceRange, rating, selectedBrands });
  };

  return (
    <Box sx={{ width: 250, padding: 2, borderRight: '1px solid #ddd' }}>
      <Typography variant="h6" component="div" gutterBottom>
        Filters
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="clothing">Clothing</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
          <MenuItem value="home">Home</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="subtitle1" component="div" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={0}
        max={100}
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="rating-select-label">Rating</InputLabel>
        <Select
          labelId="rating-select-label"
          id="rating-select"
          value={rating}
          label="Rating"
          onChange={handleRatingChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={1}>1 Star & above</MenuItem>
          <MenuItem value={2}>2 Stars & above</MenuItem>
          <MenuItem value={3}>3 Stars & above</MenuItem>
          <MenuItem value={4}>4 Stars & above</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="subtitle1" component="div" gutterBottom>
        Brand
      </Typography>
      {brands.map((brand) => (
        <FormControlLabel
          key={brand}
          control={
            <Checkbox
              checked={selectedBrands.includes(brand)}
              onChange={handleBrandChange}
              name={brand}
            />
          }
          label={brand}
        />
      ))}
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </Box>
  );
};


export default Filter;