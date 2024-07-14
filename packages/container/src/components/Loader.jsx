import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

const Loader = ({ text = 'Loading...' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <CircularProgress size={50} style={{ marginBottom: '20px' }} />
      <Typography variant="body1">{text}</Typography>
    </div>
  );
};

export default Loader;
