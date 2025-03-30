import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Fade,
  Grid
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Phone,
  AccountCircle
} from "@mui/icons-material";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #36A142 0%, #2D8A37 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative circles */}
      <Box sx={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        top: "-100px",
        left: "-100px"
      }} />

      <Box sx={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.07)",
        bottom: "50px",
        right: "80px"
      }} />

      <Fade in={true} timeout={800}>
        <Paper
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
            "&:hover": {
              transform: "translateY(-5px)"
            }
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={3}
            sx={{
              color: "#36A142",
              letterSpacing: 1
            }}
          >
            CREATE ACCOUNT
          </Typography>

          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "#36A142" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover fieldset": {
                        borderColor: "#36A142",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#36A142",
                      }
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#36A142"
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle sx={{ color: "#36A142" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      "&:hover fieldset": {
                        borderColor: "#36A142",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#36A142",
                      }
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#36A142"
                    }
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#36A142" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mt: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&:hover fieldset": {
                    borderColor: "#36A142",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#36A142",
                  }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#36A142"
                }
              }}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#36A142" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&:hover fieldset": {
                    borderColor: "#36A142",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#36A142",
                  }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#36A142"
                }
              }}
            />

            <TextField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#36A142" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&:hover fieldset": {
                    borderColor: "#36A142",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#36A142",
                  }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#36A142"
                }
              }}
            />

            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone sx={{ color: "#36A142" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&:hover fieldset": {
                    borderColor: "#36A142",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#36A142",
                  }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#36A142"
                }
              }}
            />

            <Box textAlign="center" mt={3}>
              <Button
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
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 3
            }}
          >
            <Box sx={{ height: "1px", backgroundColor: "#ddd", flex: 1 }} />
            <Typography variant="body2" sx={{ px: 2, color: "#777" }}>
              OR
            </Typography>
            <Box sx={{ height: "1px", backgroundColor: "#ddd", flex: 1 }} />
          </Box>

          <Typography variant="body2" textAlign="center" mt={2}>
            Already have an account?{' '}
            <RouterLink
              to="/login"
              style={{
                color: "#36A142",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              Login
            </RouterLink>
          </Typography>
        </Paper>
      </Fade>
    </Box>
  );
};

export default RegisterPage;