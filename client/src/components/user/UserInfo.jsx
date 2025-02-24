import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Card, CardContent, CardMedia, Button } from "@mui/material";

const techniques = [
    {
        title: "Tanks",
        image: "https://storage.googleapis.com/a1aa/image/aBOUKGa7rAuhVC0_LxltGfJq6dHWB6qDMnMpRhTV_d4.jpg",
        description: "Tools to store collected rain water, reducing water wastage."
    },
    {
        title: "Check Dams",
        image: "https://storage.googleapis.com/a1aa/image/QEp2AWOKeIQfKkRaBRXK2c20g0h1IPJ7h1063m9lHUY.jpg",
        description: "Small barriers that slow down water flow, increasing groundwater recharge."
    },
    {
        title: "Percolation Pits",
        image: "https://storage.googleapis.com/a1aa/image/dc3AFKuUixNKI0iIZgktWRC9ia8mjvzS_WUfQ0SoL_c.jpg",
        description: "Small pits that allow rain water to percolate into the ground, increasing groundwater levels."
    }
];

const UserInfo = () => {
    return (
        <Container sx={{ textAlign: "center", mt: 4 , minWidth: "80%"}}>
            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    YOUR DATA
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    "Manage your inputs and get personalized recommendations."
                </Typography>
            </Box>

            {/* Personal Info Section */}
            <Box sx={{ bgcolor: "#F5F5F5", p: 4, borderRadius: 2, mb: 4, maxWidth: 600, mx: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Personal Info
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: "start" }}>
                    <Typography variant="body1"><strong>Name:</strong> John Doe</Typography>
                    <Typography variant="body1"><strong>Phone:</strong> 123-456-7890</Typography>
                    <Typography variant="body1"><strong>Email:</strong> john.doe@example.com</Typography>
                    <Typography variant="body1"><strong>Location:</strong> 123 Farm Lane</Typography>
                    <Typography variant="body1"><strong>Farm Area:</strong> 50 acres</Typography>
                    <Typography variant="body1"><strong>Weather:</strong> Sunny</Typography>
                </Box>
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button variant="contained" color="primary">Edit</Button>
                    <Button variant="contained" color="error">Delete</Button>
                </Box>
            </Box>

            {/* Saved Techniques Section */}
            <Box sx={{ bgcolor: "#6D4C41", p: 2}}>
                <Typography variant="h5" color="white" gutterBottom>
                    Saved Techniques
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
                    {techniques.map((tech, index) => (
                        <Card key={index} sx={{ maxWidth: 320,bgcolor: "#D7CCC8", color: "#3E2723" }}>
                            <CardMedia component="img" height="140" image={tech.image} alt={tech.title} />
                            <CardContent>
                                <Typography height={35} variant="h6">{tech.title}</Typography>
                                <Typography height={50} variant="body2">{tech.description}</Typography>
                                <Box>
                                    <Button component={Link} to="/blog" sx={{ mt: 2 , backgroundColor: "#6D4C41", color: "white" }} variant="contained" > 
                                        Learn More
                                    </Button>
                                </Box>
                                
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default UserInfo;
