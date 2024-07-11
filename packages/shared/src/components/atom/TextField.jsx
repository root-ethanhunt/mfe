import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
  return (
    <Box
      sx={{
        width: 300,
        maxWidth: '100%',
        // height: 20,
      }}
    >
      <TextField fullWidth label="Search..." id="fullWidth"  size="small"/>
    </Box>
  );
}
