import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Fade
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff, Person, Email, Lock } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #36A142 0%, #2D8A37 100%)",
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
            maxWidth: 400,
            width: "90%",
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
            USER LOGIN
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Username/Email"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "#36A142" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
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
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
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
                mb: 3,
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

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
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
                LOGIN
              </Button>
            </Box>
          </Box>

          <Box textAlign="center" mt={3} sx={{ position: "relative" }}>
            <Typography
              variant="body2"
              component={Link}
              to="/forgot-password"
              sx={{
                color: "#36A142",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline"
                }
              }}
            >
              Forgot password?
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2
              }}
            >
              <Box sx={{ height: "1px", backgroundColor: "#ddd", flex: 1 }} />
              <Typography variant="body2" sx={{ px: 2, color: "#777" }}>
                OR
              </Typography>
              <Box sx={{ height: "1px", backgroundColor: "#ddd", flex: 1 }} />
            </Box>

            <Typography variant="body2" mt={2} color="text.secondary">
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{
                  color: "#36A142",
                  fontWeight: "bold",
                  textDecoration: "none"
                }}
              >
                Register
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Fade>
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
        background: "linear-gradient(135deg, #36A142 0%, #2D8A37 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative elements */}
      <Box sx={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        top: "-100px",
        right: "-100px"
      }} />

      <Box sx={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.07)",
        bottom: "50px",
        left: "80px"
      }} />

      <Fade in={true} timeout={800}>
        <Paper
          elevation={10}
          sx={{
            padding: 5,
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            maxWidth: 400,
            width: "90%",
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
            RESET PASSWORD
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            mb={3}
            sx={{ color: "#666" }}
          >
            Enter your email address below and we'll send you a link to reset your password.
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#36A142" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
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

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
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
                SEND RESET LINK
              </Button>
            </Box>
          </Box>

          <Box textAlign="center" mt={4}>
            <Typography
              variant="body2"
              component={Link}
              to="/login"
              sx={{
                color: "#36A142",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline"
                }
              }}
            >
              ← Back to Login
            </Typography>
          </Box>
        </Paper>
      </Fade>
    </Box>
  );
};

export { Login, ForgotPasswordPage };