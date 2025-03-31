import React from "react";
import { 
  Container, 
  Typography, 
  Divider, 
  Grid, 
  Card, 
  CardMedia,  
  Box,
  Button,
  Chip,
  Avatar
} from "@mui/material";
import sunset from "../../data/sunset.jpeg";
import scenic from "../../data/scenic.jpeg";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  transition: "transform 0.3s ease-in-out",
  '&:hover': {
    transform: "scale(1.02)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
  }
});

const CategoryChip = styled(Chip)({
  position: "absolute",
  top: 16,
  right: 16,
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "white",
  fontWeight: "bold"
});

const BlogPage = () => {
    return (
        <Container maxWidth="lg" sx={{ fontFamily: "'Inter', sans-serif", mb: 6, mt: 4 }}>
            {/* Header with date and category */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="subtitle1" color="textSecondary">
                    {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </Typography>
                
            </Box>

            {/* Featured Post */}
            <Box position="relative" mb={6}>
                <StyledCard>
                    <CategoryChip label="Featured" />
                    <CardMedia
                        component="img"
                        height="500"
                        image={sunset}
                        alt="Sunset view"
                        sx={{ objectPosition: "center 30%" }}
                    />
                </StyledCard>
                <Box mt={3}>
                    <Typography variant="h3" fontWeight="bold" mb={2}>
                        The Future of Digital Business in 2023
                    </Typography>
                    <Box display="flex" alignItems="center" mb={3}>
                        <Avatar sx={{ width: 40, height: 40, mr: 2 }}>JD</Avatar>
                        <Typography variant="subtitle1" color="textSecondary">
                            John Doe • 5 min read
                        </Typography>
                    </Box>
                    <Typography variant="body1" paragraph fontSize="1.1rem" lineHeight="1.8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Read More
                    </Button>
                </Box>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Recent Articles */}
            <Typography variant="h4" fontWeight="bold" mb={4}>
                Recent Articles
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            height="200"
                            image={scenic}
                            alt="Scenic view"
                        />
                        <Box p={3}>
                            <Typography variant="overline" color="primary" display="block" mb={1}>
                                BUSINESS STRATEGY
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                How to Scale Your Startup
                            </Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
                            </Typography>
                            <Button variant="text" color="primary" size="small">
                                Continue Reading
                            </Button>
                        </Box>
                    </StyledCard>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            height="200"
                            image={sunset}
                            alt="Sunset view"
                        />
                        <Box p={3}>
                            <Typography variant="overline" color="primary" display="block" mb={1}>
                                MARKETING
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                Social Media Trends 2023
                            </Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
                            </Typography>
                            <Button variant="text" color="primary" size="small">
                                Continue Reading
                            </Button>
                        </Box>
                    </StyledCard>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            height="200"
                            image={scenic}
                            alt="Scenic view"
                        />
                        <Box p={3}>
                            <Typography variant="overline" color="primary" display="block" mb={1}>
                                TECHNOLOGY
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                AI in Business Operations
                            </Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
                            </Typography>
                            <Button variant="text" color="primary" size="small">
                                Continue Reading
                            </Button>
                        </Box>
                    </StyledCard>
                </Grid>
            </Grid>

            <Box textAlign="center" mt={6}>
                <Button variant="outlined" size="large" sx={{ px: 6 }}>
                    View All Articles
                </Button>
            </Box>

            <Divider sx={{ my: 6 }} />

            {/* Newsletter Subscription */}
            <Box textAlign="center" p={4} sx={{ backgroundColor: "#f8f9fa", borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Stay Updated
                </Typography>
                <Typography variant="body1" color="textSecondary" maxWidth="600px" mx="auto" mb={3}>
                    Subscribe to our newsletter to receive the latest business insights and articles directly in your inbox.
                </Typography>
                <Box display="flex" justifyContent="center" gap={2}>
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        style={{
                            padding: "12px 16px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            width: "300px",
                            fontSize: "1rem"
                        }}
                    />
                    <Button variant="contained" color="primary" size="large">
                        Subscribe
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default BlogPage;