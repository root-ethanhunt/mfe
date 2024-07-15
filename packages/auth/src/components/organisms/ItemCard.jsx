// Import necessary dependencies from Material-UI
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box, Rating  } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import the FavoriteIcon


// Define the ItemCard component
const ItemCard = ({ item }) => {
  const [isInWishlist, setIsInWishlist] = useState(false); // State to track wishlist status

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist); // Toggle wishlist status
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        margin: "auto",
        width:"80%",
        borderRadius: 2,
        // border:"none",
        transition: 'transform 0.3s ease-in-out', // Add transition for scale effect
        '&:hover': {
          transform: 'scale(1.01)', // Scale up on hover
        },
        boxShadow: '0 0 0 0 rgba(0,0,0,0.2)', // Add shadow for attractiveness '0 4px 8px 0 rgba(0,0,0,0.2)'
        '&:hover .MuiCardMedia-root': {
          transform: 'scale(1.1)', // Scale up image on hover
        },
      }}
    >
      <Box sx={{ position: 'relative', flexGrow: 1 }}>
        <IconButton
          aria-label="add to wishlist"
          onClick={toggleWishlist}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1,
            color: isInWishlist ? 'secondary.main' : 'default',
            // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust background color for contrast
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <CardMedia
          component="img"
          image={item.images[0].replace(/[\[\]"]/g, '')} // Replace with your item's image URL
          alt={item.title} // Replace with your item's title
          sx={{
            height: 'auto',
            objectFit: 'cover', // Cover the area while maintaining aspect ratio
            transition: 'transform 0.3s ease-in-out', // Add transition for image scale effect
            // borderRadius: 2
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom  component="div" color="text.primary">
          {item.title} {/* Replace with your item's title */}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {item.description} 
        </Typography> */}
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Price: ${item.price} {/* Replace with your item's price */}
        </Typography>
        <Rating
          name="read-only"
          value={3} // Replace with your item's rating
          readOnly
          precision={0.5}
          sx={{ alignSelf: 'flex-start', mt: 1 }} // Align the rating to the left bottom
        />
        {/* <Button variant="contained" color="primary" sx={{ mt: 1 }}>
          Add to Cart
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
