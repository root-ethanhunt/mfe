import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Menu from "../atom/Menu"



export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      // orientation="vertical"
      value={view}
      exclusive
       size="small"
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        {/* <ViewListIcon /> */}
        {/* <PersonIcon/> */}
        <Menu/>
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        {/* <ViewModuleIcon /> */}
        {/* <PersonIcon/> */}
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sx={{ width: 24, height: 24 }}/>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
