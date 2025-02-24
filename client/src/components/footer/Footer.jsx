import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  background: "#131516",
  color: "white",
  padding: "40px 20px",
  textAlign: "center",
  marginTop: "auto",
});

const FooterGrid = styled(Grid)({
  maxWidth: "1200px",
  margin: "auto",
  textAlign: "left",
});

const FooterSection = styled(Box)({
  padding: "10px",
});

const SocialIcons = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "20px",
  
});

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  display: "block",
  fontSize: "16px",
  
});

const Footer = () => {


  return (
    <FooterContainer id="footer">
      <FooterGrid container spacing={3}>
        {/* About Us */}
        <Grid item xs={12} md={4}>
          <FooterSection>
            <Typography variant="h6" fontWeight="bold">About Us</Typography>
            <Typography>Empowering Farmers with Water Solutions</Typography>
          </FooterSection>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <FooterSection>
            <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/techniques">Techniques</StyledLink>
            <StyledLink href="/userinfo">User Info</StyledLink>
            <StyledLink href="/contactus">Contact Us</StyledLink>
          </FooterSection>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <FooterSection>
            <Typography variant="h6" fontWeight="bold">Contact Info</Typography>
            <Typography>Email: support@farmflow.com</Typography>
            <Typography>Phone: +91 1234567890</Typography>
            <Typography>Address: VIT Bhopal University, Sehore</Typography>
          </FooterSection>
        </Grid>
      </FooterGrid>

      {/* Social Media Icons */}
      <SocialIcons>
        <IconButton href="#" sx={{ color: "white" }}>
          <Facebook />
        </IconButton>
        <IconButton href="#" sx={{ color: "white" }}>
          <Twitter />
        </IconButton>
        <IconButton href="#" sx={{ color: "white" }}>
          <Instagram />
        </IconButton>
      </SocialIcons>

      {/* Copyright Section */}
      <Typography variant="body2" sx={{ marginTop: "20px" }}>
        © 2025 RainWater Solutions. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
