import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main' }} />
        <Typography component="h1" variant="h4" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          We can't seem to find the page you're looking for.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
