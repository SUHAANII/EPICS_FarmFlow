import React from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#36A142",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: "#fff",
          maxWidth: 400,
        //   color: "black",
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          USER LOGIN
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Username/Email"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            sx={{ borderRadius: 1 }}
          />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ width: "100px" }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Box textAlign="center" mt={2}>
          {/* <Link to="/forgot-password" >
            Forgot password?
          </Link> */}
          <Typography variant="body2" mt={1}>
            Don't have an account? <Link to="/register" style={{ color: "black" }}>Register</Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

const ForgotPasswordPage = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#36A142",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 2,
            backgroundColor: "#f44336",
            maxWidth: 400,
            color: "white",
          }}
        >
          <Typography variant="h5" textAlign="center" gutterBottom>
            FORGOT PASSWORD
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Enter your email"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: "white", borderRadius: 1 }}
            />
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                variant="contained"
                color="success"
                sx={{ width: "150px" }}
              >
                Reset Password
              </Button>
            </Box>
          </Box>
          <Box textAlign="center" mt={2}>
            <Link to="/login" style={{ color: "white", textDecoration: "underline" }}>
              Back to Login
            </Link>
          </Box>
        </Paper>
      </Box>
    );
  };
  
  export { Login, ForgotPasswordPage };
  


