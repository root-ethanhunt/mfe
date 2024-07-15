import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Banner = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: 'grey.300', p: 2, textAlign: 'center' }}>
            <Typography variant="h4">FASHION FRENZY</Typography>
            <Typography variant="h1">30% OFF FULL PRICE</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
