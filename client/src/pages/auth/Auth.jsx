import React from "react";
import "./index.css";
import logo from "../../imgs/UI.png";
import Box from "@mui/material/Box";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Link from "@mui/material/Link";
const Auth = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="demo">
          <img src={logo} alt="demo" />
        </div>
        <div className="login-content">
          <Box
            component={Paper}
            sx={{
              width: "400px",
              height: "400px",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            <div>
              <Typography className="logo" variant="h3">
                Instamini
              </Typography>
            </div>
            <form className="login-form">
              <TextField label="Tên người dùng hoặc email" variant="outlined" />
              <TextField label="Mật khẩu" type="password" variant="outlined" />
              <Button variant="contained">Đăng nhập</Button>
            </form>
            <div className="forgot">
              <Link href="#">Quên mật khẩu?</Link>
            </div>
          </Box>
          <Box
            component={Paper}
            sx={{
              width: "400px",
              height: "50px",
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Chưa có tài khoản?
            <Link
              href="#"
              underline="none"
              fontWeight="600"
              sx={{
                marginLeft: "10px",
              }}
            >
              Đăng ký
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Auth;
