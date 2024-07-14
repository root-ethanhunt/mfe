import React from 'react';
import { Box, Grid, Typography, Link, IconButton,Container,Button } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#333', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              Learn more about our brand and our commitment to providing the best quality products.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Help & Information
            </Typography>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Delivery Information
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Returns & Exchanges
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Size Guide
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Gift Cards
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              Give the gift of choice with our versatile gift cards.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Join the Crew
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500', mb: 2 }}>
              Sign up for our newsletter to receive 20% off your first purchase and stay updated on the latest arrivals and promotions.
            </Typography>
            <Button variant="contained" color="primary">
              Join
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="grey.500">
            © 2024 Your Company. All rights reserved.
          </Typography>
          <Box>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
