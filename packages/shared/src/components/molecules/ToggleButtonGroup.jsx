import * as React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import Avatar from "@mui/material/Avatar";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Menu from "../atom/Menu";

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      value={view}
      exclusive
      size="small"
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <NightsStayIcon />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list">
        <Grid container spacing={2}>
          <Grid item>
            {" "}
            <Menu />
          </Grid>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 20, height: 20 }}
            />
          </Grid>
        </Grid>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
