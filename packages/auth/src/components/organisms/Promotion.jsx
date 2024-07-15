import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Promotion = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: 'grey.300', p: 2, textAlign: 'center' }}>
            <Typography variant="h5">Get Your Frenzy Fix</Typography>
            <Typography variant="body1">ONLINE ONLY | ENDS THURSDAY</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ backgroundColor: 'grey.200', p: 2, textAlign: 'center' }}>
            <Typography variant="h6">LAYERS ON LAYERS</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ backgroundColor: 'grey.200', p: 2, textAlign: 'center' }}>
            <Typography variant="h6">HELLO KITTY & FRIENDS</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ backgroundColor: 'grey.200', p: 2, textAlign: 'center' }}>
            <Typography variant="h6">JUST LANDED!</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ backgroundColor: 'grey.200', p: 2, textAlign: 'center' }}>
            <Typography variant="h6">LIFE IS BETTER IN 2D</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Promotion;
