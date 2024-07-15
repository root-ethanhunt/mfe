// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import CottageIcon from '@mui/icons-material/Cottage';

// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //   ...theme.typography.body2,
// //   padding: theme.spacing(1),
// //   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// // }));

// export default function SubHeader() {
//   return (
//     // <Box sx={{ flexGrow: 1 }} >
//       <Grid container spacing={5}  direction="row" justifyContent="center" alignItems="flex-start">
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//         <Grid item >
//           <CottageIcon sx={{ fontSize: 50 }}/>
//           <Box>SomeText</Box>
//         </Grid>
//       </Grid>
//     //  </Box>
//   );
// }


import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
// import { Category as CategoryIcon, FashionOutlined as FashionIcon, HomeOutlined as HomeIcon, BookOutlined as BookIcon, SportsSoccerOutlined as SportsIcon, SpaOutlined as BeautyIcon, ToysOutlined as ToysIcon } from '@mui/icons-material';
import CottageIcon from '@mui/icons-material/Cottage';

const categories = [
  { id: 1, label: 'Electronics', icon: <CottageIcon /> },
  { id: 2, label: 'Fashion', icon: <CottageIcon /> },
  { id: 3, label: 'Home & Kitchen', icon: <CottageIcon /> },
  { id: 4, label: 'Books', icon: <CottageIcon /> },
  { id: 5, label: 'Sports & Outdoors', icon: <CottageIcon /> },
  { id: 6, label: 'Beauty & Personal Care', icon: <CottageIcon /> },
  { id: 7, label: 'Toys & Games', icon: <CottageIcon /> },
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
          <Tab
            key={category.id}
            label={category.label}
            icon={category.icon}
            sx={{
              fontSize: '1rem',
              fontWeight: '600',
              padding: '10px 20px',
              color: 'rgba(0, 0, 0, 0.7)',
              '& .MuiTab-wrapper': { display: 'flex', gap: '10px', alignItems: 'center' },
              '& .MuiSvgIcon-root': { fontSize: '1.5rem' },
            }}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default SubHeader;

