import React from "react";
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SavedTechniqueCard = ({ item }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
        }
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" height="140" image={item.coverImage} alt={item.title} />
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" }
          }}
          aria-label="Favorite"
        >
          <Favorite sx={{ color: "#f44336" }} />
        </IconButton>
      </Box>
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", color: "#36A142" }}>{item.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>{item.subtitle}</Typography>
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#36A142",
            "&:hover": { backgroundColor: "#2D8A37" },
            borderRadius: 6,
            textTransform: "none",
            fontWeight: "bold"
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default SavedTechniqueCard;
