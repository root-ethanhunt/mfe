import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const SimilarProducts = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                ${product.price}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SimilarProducts;
