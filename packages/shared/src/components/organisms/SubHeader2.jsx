import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
import CottageIcon from '@mui/icons-material/Cottage';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BlenderIcon from '@mui/icons-material/Blender';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SpaIcon from '@mui/icons-material/Spa';

const categories = [
  { id: 1, label: 'Electronics', icon: <HeadphonesIcon /> },
  { id: 2, label: 'Fashion', icon: <CheckroomIcon /> },
  { id: 3, label: 'Home & Kitchen', icon: <BlenderIcon /> },
  { id: 4, label: 'Books', icon: <AutoStoriesIcon /> },
  { id: 5, label: 'Sports & Outdoors', icon: <SportsCricketIcon /> },
  { id: 6, label: 'Beauty & Personal Care', icon: <SpaIcon /> },
  { id: 7, label: 'Toys & Games', icon: <SportsEsportsIcon /> },
];

const SubHeader = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // You can add logic here to handle category changes, such as fetching data or updating state
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#363434', borderBottom: '1px solid #ddd' ,
      marginTop: '60px', 
      direction:"row",justifyContent: "center",
      alignItems: "center"
      }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="inherit"
         textColor="inherit"
        centered
        aria-label="product categories"
        sx={{ '& .MuiTabs-scroller': { overflowX: 'auto' }, '& .MuiTab-root': { minWidth: 'auto', textTransform: 'capitalize' } }}
      >
        {categories.map((category) => (
          <Tab key={category.id} label={category.label} icon={category.icon} sx={{ fontSize: '1rem', fontWeight: '600', padding: '10px 20px', color: 'rgba(239, 236, 236, 0.7)' }} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default SubHeader;
