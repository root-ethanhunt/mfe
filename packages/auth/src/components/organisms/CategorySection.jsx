import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const SubcategorySection = () => {
  const subcategories = [
    { title: 'Electronics', description: 'Latest gadgets and devices' },
    { title: 'Fashion', description: 'Trendy clothing and accessories' },
    { title: 'Home & Kitchen', description: 'Essentials for your home' },
    { title: 'Books', description: 'Wide range of genres and authors' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Explore Our Categories
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {subcategories.map((subcategory, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  {subcategory.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {subcategory.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SubcategorySection;
