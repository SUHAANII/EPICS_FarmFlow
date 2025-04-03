import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import logo from "../../data/logo.png";

import newRequest from "../../utils/newRequest";

// Styled AppBar
const StyledAppBar = styled(AppBar)({
  background: "transparent",
  boxShadow: "none",
  padding: "0.2px 20px",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: "1000",
  transition: "background 0.3s ease-in-out",
});

// Styled Navigation Links
const StyledLink = styled(Link)(({ isHomePage }) => ({
  color: isHomePage ? "white" : "black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  marginRight: "30px",
  "&:hover": {
    color: "rgb(69, 110, 167)",
    textDecoration: "underline",
  },
}));

// Styled Buttons
const AuthButton = styled(Button)({
  background: "#2E7D32",
  color: "white",
  borderRadius: "15px",
  padding: "8px 15px",
  marginLeft: "10px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#1B5E20",
  },
});

// Logout Button Styling
const LogoutButton = styled(Button)({
  background: "#2E7D32",
  color: "white",
  borderRadius: "15px",
  padding: "8px 15px",
  marginLeft: "10px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#1B5E20",
  },
});

const Logo = styled("img")({
  height: "50px",
  width: "50px",
  cursor: "pointer",
  borderRadius: "50px",
});

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll event listener for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.removeItem("currentUser");
      navigate("/");
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <StyledAppBar
      position="static"
      sx={{
        background: sticky
          ? "linear-gradient(to left,rgb(35, 74, 18) 11%, #7D7E7E 76%, #131516 100%)"
          : "transparent",
        boxShadow: sticky ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        padding: sticky ? ".2px 20px" : "12px 20px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo & Title */}
        <Box onClick={() => navigate("/")} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Logo src={logo} alt="FarmFlow Logo" />
          <Typography
            variant="h6"
            sx={{
              marginLeft: "10px",
              fontWeight: "bold",
              color: isHomePage ? "white" : "black",
            }}
          >
            FARMFlow
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <StyledLink to="/" isHomePage={isHomePage}>Home</StyledLink>
          <StyledLink to="/techniques" isHomePage={isHomePage}>Techniques</StyledLink>
          <StyledLink to="/userinfo" isHomePage={isHomePage}>User Info</StyledLink>
        </Box>

        {/* Authentication Buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {currentUser ? (
            <>
              <Typography sx={{ color: "white", fontWeight: "bold", marginRight: "10px" }}>
                {currentUser.username}
              </Typography>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </>
          ) : (
            <>
              <AuthButton onClick={() => navigate("/login")}>Login</AuthButton>
              <AuthButton onClick={() => navigate("/register")}>Register</AuthButton>
            </>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
