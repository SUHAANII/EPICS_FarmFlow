import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Typography, Box, Card, CardContent, CardMedia, Button, Paper, Avatar, Grid, Divider, Chip, IconButton, Fade } from "@mui/material";
import { Edit, Delete, Favorite, CloudQueue, Person, Phone, Email, LocationOn, Landscape, WbSunny, BookmarkAdded } from "@mui/icons-material";
import newRequest from "../../utils/newRequest";
import SavedTechniqueCard from "./savedtechniqueCard";



const UserInfo = () => {

  const { id } = useParams();

  const [savedTechniques, setSavedTechniques] = useState([]);

  useEffect(() => {
    const fetchSavedTechniques = async () => {
      try {
        const res = await newRequest.get(~`/techniques/saved/${id}`);
        setSavedTechniques(res.data);
      } catch (err) {
        console.error("Error fetching saved techniques:", err);
      }
    };
    fetchSavedTechniques();
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #36A142 0%, #2D8A37 100%)",
        minHeight: "100vh",
        pt: 4,
        pb: 8,
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
        right: "-100px",
        zIndex: 0
      }} />

      <Box sx={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.07)",
        bottom: "50px",
        left: "80px",
        zIndex: 0
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in={true} timeout={800}>
          {/* Header Section */}
          <Paper
            elevation={0}
            sx={{
              textAlign: "center",
              mb: 4,
              py: 3,
              px: 4,
              borderRadius: 4,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                color: "#36A142",
                letterSpacing: 1
              }}
            >
              YOUR DASHBOARD
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Manage your inputs and get personalized recommendations
            </Typography>
          </Paper>
        </Fade>

        <Grid container spacing={4}>
          {/* Personal Info Section */}
          <Grid item xs={12} md={5}>
            <Fade in={true} timeout={1000}>
              <Paper
                elevation={10}
                sx={{
                  borderRadius: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  height: "100%",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#36A142",
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "white",
                      color: "#36A142",
                      fontSize: 36,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    JD
                  </Avatar>
                  <Box>
                    <Typography variant="h5" fontWeight="bold" color="white">
                      John Doe
                    </Typography>
                    <Chip
                      label="Farmer"
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.85)",
                        color: "#36A142",
                        fontWeight: "bold",
                        mt: 1
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mb: 2, color: "#36A142" }}
                  >
                    Personal Information
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Person sx={{ color: "#36A142" }} />
                      <Typography variant="body1">John Doe</Typography>
                    </Box>
                    <Divider />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Phone sx={{ color: "#36A142" }} />
                      <Typography variant="body1">123-456-7890</Typography>
                    </Box>
                    <Divider />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Email sx={{ color: "#36A142" }} />
                      <Typography variant="body1">john.doe@example.com</Typography>
                    </Box>
                    <Divider />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <LocationOn sx={{ color: "#36A142" }} />
                      <Typography variant="body1">123 Farm Lane</Typography>
                    </Box>
                    <Divider />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Landscape sx={{ color: "#36A142" }} />
                      <Typography variant="body1">50 acres</Typography>
                    </Box>
                    <Divider />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <WbSunny sx={{ color: "#36A142" }} />
                      <Typography variant="body1">Sunny, 75°F</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<Edit />}
                      sx={{
                        backgroundColor: "#36A142",
                        boxShadow: "0 4px 12px rgba(54, 161, 66, 0.3)",
                        "&:hover": {
                          backgroundColor: "#2D8A37",
                        },
                        borderRadius: 8,
                        px: 3
                      }}
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Delete />}
                      sx={{
                        color: "#d32f2f",
                        borderColor: "#d32f2f",
                        "&:hover": {
                          backgroundColor: "rgba(211, 47, 47, 0.04)",
                          borderColor: "#b71c1c"
                        },
                        borderRadius: 8,
                        px: 3
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Fade>
          </Grid>

          {/* Saved Techniques Section */}
          <Grid item xs={12} md={7}>
            <Fade in={true} timeout={1200}>
              <Paper
                elevation={10}
                sx={{
                  borderRadius: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <Box sx={{
                  bgcolor: "#36A142",
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2
                }}>
                  <BookmarkAdded sx={{ color: "white", fontSize: 30 }} />
                  <Typography variant="h5" fontWeight="bold" color="white">
                    Saved Techniques
                  </Typography>
                </Box>

                <Grid item xs={12} md={7}>
                  <Fade in timeout={800}>
                    <div>
                      <Grid container spacing={3}>
                        {savedTechniques.length > 0 ? savedTechniques.map((item, index) => (
                          <Grid item xs={12} sm={6} md={6} key={item._id}>
                            <SavedTechniqueCard item={item} />
                          </Grid>
                        )) : (
                          <Typography variant="body1" color="textSecondary" sx={{ m: 5 }}>
                            You haven’t saved any techniques yet.
                          </Typography>
                        )}
                      </Grid>
                    </div>
                  </Fade>
                </Grid>
              </Paper>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UserInfo;