import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';

const categories = [
  { id: 1, label: 'Electronics' },
  { id: 2, label: 'Fashion' },
  { id: 3, label: 'Home & Kitchen' },
  { id: 4, label: 'Books' },
  { id: 5, label: 'Sports & Outdoors' },
  { id: 6, label: 'Beauty & Personal Care' },
  { id: 7, label: 'Toys & Games' },
];

const SubHeader = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // You can add logic here to handle category changes, such as fetching data or updating state
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="product categories"
        sx={{ '& .MuiTabs-scroller': { overflowX: 'auto' }, '& .MuiTab-root': { minWidth: 'auto', textTransform: 'capitalize' } }}
      >
        {categories.map((category) => (
          <Tab key={category.id} label={category.label} sx={{ fontSize: '1rem', fontWeight: '600', padding: '10px 20px', color: 'rgba(0, 0, 0, 0.7)' }} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default SubHeader;
