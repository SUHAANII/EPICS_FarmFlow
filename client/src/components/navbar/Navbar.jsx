import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import logo from "../../data/logo.png";

// Styled AppBar (Remove sticky prop from styled)
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

const StyledLink = styled(Link)({
  color: "Black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  marginRight: "30px",
  "&:hover": {
    color: "rgb(69, 110, 167)",
    textDecoration: "underline",
  },
});

const LoginButton = styled(Button)({
  background: "#2E7D32",
  color: "white",
  borderRadius: "15px",
  padding: "10px 15px",
  marginLeft: "10px",
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
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);

  // Scroll event listener to detect sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledAppBar
      position="static"
      sx={{
        background: sticky
      ? "linear-gradient(to left,rgb(35, 74, 18) 11%, #7D7E7E 76%, #131516 100%)"
      : "transparent",
    boxShadow: sticky ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "all 0.3s ease-in-out", // Smooth transition
    padding: sticky ? ".2px 20px" : "12px 20px", // Reduce padding when sticky
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box onClick={() => navigate("/")} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Logo src={logo} alt="FarmFlow Logo" />
          <Typography variant="h6" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
            FARMFlow
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/techniques">Techniques</StyledLink>
          <StyledLink to="/userinfo">User Info</StyledLink>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          <LoginButton onClick={() => navigate("/register")}>Register</LoginButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;



