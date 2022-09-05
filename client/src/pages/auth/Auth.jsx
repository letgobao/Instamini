import React from "react";
import "./index.css";
import logo from "../../imgs/UI.png";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
const Auth = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="demo">
          <img src={logo} alt="demo" />
        </div>
        <Box
          component={Paper}
          sx={{
            width: "400px",
            height: "600px",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h3">Instamini</Typography>
        </Box>
      </div>
    </div>
  );
};

export default Auth;
