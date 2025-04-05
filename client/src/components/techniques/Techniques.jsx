import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, TextField, Grid, Box, Card, CardContent, CardMedia, Container, InputAdornment, Paper, Fade } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const recommendations = [
  {
    title: "Contour Bunding",
    image: "https://storage.googleapis.com/a1aa/image/LXgNJXH-a5cciUZufzP__iEq4_o4qRjNBft9bNwIwM8.jpg",
    description: "Embankments constructed along the contours of sloping land to prevent soil erosion and improve water retention in agricultural areas.",
  },
  {
    title: "Rooftop Rainwater Harvesting",
    image: "https://storage.googleapis.com/a1aa/image/dbW-kGQuBpvNgu6VIcJM20PvJEk3k0V_K2FegshVkzY.jpg",
    description: "Collects rainwater from rooftops and channels it into storage tanks, reservoirs, or recharge pits for domestic or agricultural use.",
  },
  {
    title: "Check Dams",
    image: "https://storage.googleapis.com/a1aa/image/K6NIx94pFyd7eQYr8lJJU-xJVLzttihS7UOpiVWwCEc.jpg",
    description: "Small barriers built across streams or drainage channels to capture and store rainwater, reducing runoff velocity and increasing groundwater recharge.",
  },
];

const Techniques = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={0} sx={{ textAlign: "center", p: 4, borderRadius: 3, background: "linear-gradient(to right, #e0f7fa, #ffffff)", mb: 4 }}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <WaterDropIcon sx={{ fontSize: 40, color: "#0288d1", mr: 1 }} />
          <Typography variant="h3" fontWeight="bold" sx={{ color: "#0288d1", letterSpacing: 1, fontFamily: "'Poppins', sans-serif" }}>
            Rainwater Harvesting
          </Typography>
        </Box>

        <Typography variant="h5" color="textSecondary" mb={4} fontFamily="'Roboto Slab', serif" fontWeight="light">
          Sustainable techniques tailored to your needs
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70%", margin: "0 auto", mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search water harvesting techniques..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              backgroundColor: "white", borderRadius: "50px",
              "& .MuiOutlinedInput-root": { borderRadius: "50px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", paddingRight: 14 }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" sx={{
            backgroundColor: "#0288d1", color: "white", fontWeight: "bold", borderRadius: "50px", ml: -12, px: 3, py: 1.5,
            textTransform: "none", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", "&:hover": { backgroundColor: "#01579b" }, marginRight: 1
          }}>
            Search
          </Button>
        </Box>
      </Paper>

      <Typography variant="h4" align="center" mb={4} fontWeight="medium" color="#01579b" sx={{ position: "relative", display: "inline-block", left: "50%", transform: "translateX(-50%)" }}>
        Recommended Techniques
        <Box sx={{ height: 3, width: "40%", backgroundColor: "#0288d1", mt: 1, borderRadius: 2, position: "absolute", bottom: -10, left: "30%" }} />
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {recommendations.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Fade in={true} timeout={500 + index * 300}>
              <Card sx={{
                height: "100%", display: "flex", flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s", borderRadius: 3,
                overflow: "hidden", boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                "&:hover": { transform: "translateY(-8px)", boxShadow: "0 16px 32px rgba(0,0,0,0.15)" }
              }}>
                <CardMedia component="img" height="200" image={item.image} alt={item.title} />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold" color="#01579b">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" mb={2} sx={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                  <Button component={Link} to="/blog" variant="outlined" color="primary" sx={{ mt: 2, borderRadius: 2, textTransform: "none", fontWeight: "medium", px: 3 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Techniques;
