import React from "react";
// import { Link as Scroll } from "react-scroll";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import logo from "../../data/logo.png";



const StyledAppBar = styled(AppBar)({
  background: "linear-gradient(to left, #FFFFFF 11%, #7D7E7E 76%, #131516 100%)",
  padding: "12px",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
});

const StyledLink = styled(Link)({
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  marginRight: "20px",
  "&:hover": {
    color: "rgb(69, 103, 167)",
    textDecoration: "underline",
  },
});

const LoginButton = styled(Button)({
  backgroundColor: "green",
  color: "white",
  borderRadius: "15px",
  padding: "10px 15px",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.2s ease",
  marginLeft: "10px", // Added margin between buttons
  "&:hover": {
    backgroundColor: "#62f562",
    color: "white",
  },
});

const Logo = styled("img")({
  height: "50px", // Adjust size as needed
  cursor: "pointer",
  borderRadius: "100%",
});

const Navbar = () => {
    
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Logo (Clickable - Redirects to Home) */}
        <Box onClick={() => navigate("/")} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Logo src={logo} alt="FarmFlow Logo" />
          <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
            FARMFlow
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/techniques">Techniques</StyledLink>
          <StyledLink to="/userinfo">User Info</StyledLink>
          {/* <StyledLink component={Scroll} to="home"  smooth duration={1000}>Contact Us</StyledLink> */}
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          <LoginButton onClick={() => navigate("/register")}>Register</LoginButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
