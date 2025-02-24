import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#36A142",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        // marginTop: "64px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: "10px",
          boxShadow: 3,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          REGISTER
        </Typography>

        <Box component="form">
          <TextField label="First Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Last Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
          <TextField label="Confirm Password" type="password" variant="outlined" fullWidth margin="normal" />
          <TextField label="Phone" type="tel" variant="outlined" fullWidth margin="normal" />

          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#4caf50", color: "white", "&:hover": { backgroundColor: "#388e3c" } }}
            >
              Register
            </Button>
          </Box>
        </Box>

        <Typography variant="body2" textAlign="center" mt={2}>
          Already have an account?{' '}
          <Link component={RouterLink} to="/login" sx={{ fontWeight: "bold" }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;