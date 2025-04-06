import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Fade } from "@mui/material";
import { Link } from "react-router-dom";

const TechniqueCard = ({ item, index }) => {
  return (
    <Fade in={true} timeout={500}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s, box-shadow 0.3s",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardMedia component="img" height="200" image={item.coverImage} alt={item.title} />
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="#01579b">
            {item.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={2} sx={{ lineHeight: 1.6 }}>
            {item.subtitle}
          </Typography>
          <Button
            component={Link}
            to={`/technique/${item._id}`}
            variant="outlined"
            color="primary"
            sx={{
              mt: 2,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "medium",
              px: 3,
            }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default TechniqueCard;
