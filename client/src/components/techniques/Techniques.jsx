import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, TextField, Grid, Box, Card, CardContent, CardMedia } from "@mui/material";


const recommendations = [
    {
        title: "Contour Bunding",
        image: "https://storage.googleapis.com/a1aa/image/LXgNJXH-a5cciUZufzP__iEq4_o4qRjNBft9bNwIwM8.jpg",
        description: "Embankments constructed along the contours of sloping land.",
    },
    {
        title: "Rooftop Rainwater Harvesting",
        image: "https://storage.googleapis.com/a1aa/image/dbW-kGQuBpvNgu6VIcJM20PvJEk3k0V_K2FegshVkzY.jpg",
        description: "Collects rainwater from rooftops and channels it into storage tanks, reservoirs, or recharge pits.",
    },
    {
        title: "Check Dams",
        image: "https://storage.googleapis.com/a1aa/image/K6NIx94pFyd7eQYr8lJJU-xJVLzttihS7UOpiVWwCEc.jpg",
        description: "Small barriers built across streams or drainage channels to capture and store rainwater.",
    },
];

const Techniques = () => {
    return (
        <Box sx={{  textAlign: "center", mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Rain Water Harvesting Techniques
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                "Discover methods tailored to your needs"
            </Typography>

            <Box
                className="search-container"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    background: "linear-gradient(135deg, #8D6E63, #A1887F)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "50%",
                    margin: "20px auto",
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search Techniques"
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        width: "100%",
                    }}
                />
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#6D4C41", color: "white", fontWeight: "bold" }}
                >
                    Search
                </Button>
            </Box>


            <Box marginTop={6} style={{background: "linear-gradient(135deg, #8D6E63, #A1887F)"}}>
                

                <Grid paddingLeft={10} paddingBottom={5} container spacing={3} justifyContent="center">
                    {recommendations.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                                    <Button component={Link} to="/blog" sx={{ mt: 1 }}>
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Techniques;
