import React from "react";
import { Container, Typography, Divider, Grid, Card, CardMedia,  Box } from "@mui/material";
import sunset from "../../data/sunset.jpeg";
import scenic from "../../data/scenic.jpeg";

const BlogPage = () => {
    return (
        <Container  sx={{ fontFamily: "serif", color: "gray" , mb: 4 ,mt: 4}}>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={1} pb={1} mb={3}>
                <Typography variant="h6" fontWeight="bold">BUSINESS</Typography>
                <Typography variant="h6" fontWeight="bold">VOL. 7</Typography>
            </Box>

            {/* Main Image */}
            <Card sx={{ mb: 3 }}>
                <CardMedia
                    component="img"
                    height= "400px"
                    image= {sunset}
                    alt="Sunset view"
                />
            </Card>

            {/* Blog Title */}
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>ON THE BLOG</Typography>

            {/* Blog Content */}
            <Grid container spacing={3} textAlign="justify">
                <Grid item xs={12} md={4}>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Typography>
                </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* Secondary Image & Business Section */}
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={scenic}
                            alt="Scenic view"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" fontWeight="bold" mb={1}>BUSINESS</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Grid>
            </Grid>

            
        </Container>
    );
};

export default BlogPage;
