import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '../atom/TextField'
import ToggleButtonGroup from "../molecules/ToggleButtonGroup"
import BedtimeIcon from '@mui/icons-material/Bedtime';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// }));

export default function AutoGrid() {
  return (
    // <Box sx={{ flexGrow: 1 }}  alignItems="center">
      <Grid container spacing={3} direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <h3>Logo</h3>
        </Grid>
        <Grid item>
          <TextField/>
        </Grid>
        <Grid item>
            {/* <Grid container spacing={5} > */}
            <Grid>
                {/* <Box sx={{padding: 0.8, border: 1, borderRadius:1}}>
                <BedtimeIcon/>
                </Box> */}
                {/* <BedtimeIcon/> */}
            </Grid>
            <Grid>
                <ToggleButtonGroup/>
            </Grid>
            {/* </Grid> */}
            {/* <Grid item xs>
                Some
            </Grid>
            <Grid item xs>
                <ToggleButtonGroup/>
            </Grid> */}
        </Grid>
      </Grid>
    //  </Box>
  );
}
