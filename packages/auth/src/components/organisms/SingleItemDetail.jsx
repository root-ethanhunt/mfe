import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Box, Rating, IconButton, TextField, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
// import { useSpring, animated } from 'react-spring';

const product = {
  title: "Demon Slayer Front & Back Group Hoodie",
  price: 60.0,
  rating: 4.5,
  reviews: 117,
  color: "Stone",
  sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
  description: "The Violet Jujitsu Kaisen Short Sleeve Tee offers a standard fit with a classic crew neck and short sleeves, adorned with captivating front and back prints. Perfect for expressing your love for the series in style.",
  image: "https://i.imgur.com/QkIa5tT.jpeg",
  similarProducts: [
    { title: "Casper Cargo Pocket Trackpant", price: 65.0, image: "https://i.imgur.com/QkIa5tT.jpeg" },
    { title: "Miley Ripped Short", price: 45.0, image: "https://i.imgur.com/QkIa5tT.jpeg" },
    { title: "Gudetama Oversized Tee", price: 35.0, image: "https://i.imgur.com/QkIa5tT.jpeg" },
    { title: "My Melody Bow Oversized Hoodie", price: 55.0, image: "https://i.imgur.com/QkIa5tT.jpeg" }
  ]
};

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  // const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1000 } });

  const handleQuantityChange = (increment) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + increment));
  };

  return (
    // <animated.div style={fadeIn}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              ${product.price}
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {product.reviews} reviews
              </Typography>
            </Box>
            <Typography variant="h6" gutterBottom>Color: {product.color}</Typography>
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              {product.sizes.map(size => (
                <Chip key={size} label={size} variant="outlined" clickable sx={{ mr: 1 }} />
              ))}
            </Box>
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <IconButton onClick={() => handleQuantityChange(-1)}>
                <Remove />
              </IconButton>
              <TextField size="small" value={quantity} sx={{ width: '50px', mx: 1 }} inputProps={{ readOnly: true }} />
              <IconButton onClick={() => handleQuantityChange(1)}>
                <Add />
              </IconButton>
            </Box>
            <Button variant="contained" color="primary" sx={{ mb: 2 }}>
              Add to Cart
            </Button>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Similar Products
          </Typography>
          <Grid container spacing={4}>
            {product.similarProducts.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                  />
                  <CardContent>
                    <Typography variant="body1" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      ${item.price}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth>
                      View
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    // </animated.div>
  );
};

export default ProductPage;
