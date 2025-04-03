import React, { useState } from "react";
import { 
  Box, Typography, TextField, Button, Paper, 
  InputAdornment, IconButton, Fade, Grid 
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { 
  Person, Email, Lock, Visibility, 
  VisibilityOff, Phone, AccountCircle 
} from "@mui/icons-material";

import newRequest from "../../utils/newRequest";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/auth/register", user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box 
      sx={{ 
        background: "linear-gradient(135deg, #36A142 0%, #2D8A37 100%)", 
        minHeight: "100vh", display: "flex", alignItems: "center", 
        justifyContent: "center", padding: 2, position: "relative", overflow: "hidden" 
      }}
    >
      {/* Decorative Circles */}
      <Box sx={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.1)", top: "-100px", left: "-100px" }} />
      <Box sx={{ position: "absolute", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.07)", bottom: "50px", right: "80px" }} />

      <Fade in={true} timeout={800}>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={10}
          sx={{
            padding: 5,
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            maxWidth: 500,
            width: "100%",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            position: "relative",
            zIndex: 1,
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "translateY(-5px)" }
          }}
        >
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3} sx={{ color: "#36A142", letterSpacing: 1 }}>
            CREATE ACCOUNT
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                label="First Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Person sx={{ color: "#36A142" }} /></InputAdornment>,
                }}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                label="Last Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start"><AccountCircle sx={{ color: "#36A142" }} /></InputAdornment>,
                }}
                sx={textFieldStyles}
              />
            </Grid>
          </Grid>

          <TextField
            name="email"
            value={user.email}
            onChange={handleChange}
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start"><Email sx={{ color: "#36A142" }} /></InputAdornment>,
            }}
            sx={textFieldStyles}
          />

          <TextField
            name="password"
            value={user.password}
            onChange={handleChange}
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start"><Lock sx={{ color: "#36A142" }} /></InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={textFieldStyles}
          />

          <TextField
            name="phone"
            value={user.phone}
            onChange={handleChange}
            label="Phone Number"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start"><Phone sx={{ color: "#36A142" }} /></InputAdornment>,
            }}
            sx={textFieldStyles}
          />

          <Box textAlign="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                backgroundColor: "#36A142",
                borderRadius: 10,
                boxShadow: "0 4px 12px rgba(54, 161, 66, 0.3)",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#2D8A37",
                  boxShadow: "0 6px 16px rgba(54, 161, 66, 0.4)",
                }
              }}
            >
              CREATE ACCOUNT
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 3 }}>
            <Box sx={{ height: "1px", backgroundColor: "#ddd", flex: 1 }} />
            <Typography variant="body2" sx={{ px: 2, color: "#777" }}>OR</Typography>
            <Box sx={{ height: "1px", backgroundColor: "#ddd", flex: 1 }} />
          </Box>

          <Typography variant="body2" textAlign="center" mt={2}>
            Already have an account?{" "}
            <RouterLink to="/login" style={{ color: "#36A142", fontWeight: "bold", textDecoration: "none" }}>
              Login
            </RouterLink>
          </Typography>
        </Paper>
      </Fade>
    </Box>
  );
};

// Styles for all text fields
const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    "&:hover fieldset": { borderColor: "#36A142" },
    "&.Mui-focused fieldset": { borderColor: "#36A142" }
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#36A142" }
};

export default RegisterPage;
