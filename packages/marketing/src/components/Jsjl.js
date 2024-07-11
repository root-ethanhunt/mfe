import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Jsjl() {
  return (
    <div>
      <h1>This Is DashBoard</h1>
      {/* <Link to="/pricing"> */}
        <Button variant="text"> Pricing</Button>
      {/* </Link> */}
      {/* <Link to="/"> */}
        <Button variant="contained"> Landing</Button>
      {/* </Link> */}
    </div>
  );
}
