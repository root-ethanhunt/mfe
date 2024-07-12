import HomeIcon from '@mui/icons-material/Home';
// import ElectronicsIcon from '@mui/icons-material/Electronics';
import FashionIcon from '@mui/icons-material/Checkroom';
import GroceryIcon from '@mui/icons-material/LocalGroceryStore';
// import BeautyIcon from '@mui/icons-material/Beauty';
import SportsIcon from '@mui/icons-material/Sports';
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar ,Divider} from '@mui/material';


// Define the Category component
const Category = ({ icon: Icon, label }) => (
  <Grid item>
    <IconButton>
      <Icon fontSize="large" />
    </IconButton>
    <Typography variant="body2" align="center">
      {label}
    </Typography>
  </Grid>
);

// Define the CategoriesSection component
const CategoriesSection = () => {
  const categories = [
    { label: 'Home', icon: HomeIcon },
    // { label: 'Electronics', icon: ElectronicsIcon },
    { label: 'Fashion', icon: FashionIcon },
    { label: 'Grocery', icon: GroceryIcon },
    // { label: 'Beauty', icon: BeautyIcon },
    // { label: 'Sports', icon: SportsIcon },
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Category key={index} icon={category.icon} label={category.label} />
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection