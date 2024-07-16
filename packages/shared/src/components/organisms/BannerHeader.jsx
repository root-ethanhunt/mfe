import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const BannerHeader = ({ message }) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AppBar position="fixed"  sx={{ height: 40, backgroundColor:"#fff"}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 40 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#161515' }}>
          {"This importang message"}
        </Typography>
        <Typography variant="body2" sx={{ color: '#1a1919' }}>
          {getCurrentTime()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BannerHeader;
