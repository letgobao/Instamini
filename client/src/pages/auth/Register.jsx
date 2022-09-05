import "./index.css";
import Box from "@mui/material/Box";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Link from "@mui/material/Link";
const Register = () => {
  return (
    <div className="auth">
      <div className="container-register">
        <Box
          component={Paper}
          sx={{
            width: "400px",
            margin: "auto",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <div>
            <Typography className="logo" variant="h3">
              Instamini
            </Typography>
            <p className="des">Đăng ký để xem ảnh và video từ bạn bè.</p>
          </div>
          <form className="register-form">
            <TextField label="Số điện thoại hoặc email" variant="outlined" />
            <TextField label="Tên đầy đủ" variant="outlined" />
            <TextField label="Tên người dùng" variant="outlined" />
            <TextField label="Mật khẩu" type="password" variant="outlined" />
            <Button variant="contained">Đăng ký</Button>
          </form>
        </Box>
        <Box
          component={Paper}
          sx={{
            width: "400px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px auto",
          }}
        >
          Bạn đã có tài khoản?
          <Link
            href="/login"
            underline="none"
            fontWeight="600"
            sx={{
              marginLeft: "10px",
            }}
          >
            Đăng nhập
          </Link>
        </Box>
      </div>
    </div>
  );
};
export default Register;
