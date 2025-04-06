import React, { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Divider,
    Grid,
    Card,
    CardMedia,
    Box,
    Button,
    Chip
} from "@mui/material";
import { styled } from "@mui/system";
import newRequest from "../../utils/newRequest";
import { INITIAL_STATE, blogReducer } from "../../reducers/blogReducer";
import TechniqueCard from "../techniques/techniqueCard";


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
    const [state, dispatch] = useReducer(blogReducer, INITIAL_STATE);
    const { id } = useParams();
    const [blog, setBlog] = useState(null); // Add this state to store the blog


    const [recommendations, setRecommendations] = useState([]);


    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await newRequest.get(`/techniques/id/${id}`);
                const blogData = res.data;
    
                // Store blog for recommendations
                setBlog(blogData);
    
                // Update reducer state
                dispatch({ type: "CHANGE_INPUT", payload: { name: "title", value: blogData.title } });
                dispatch({ type: "CHANGE_INPUT", payload: { name: "subtitle", value: blogData.subtitle } });
                dispatch({ type: "CHANGE_INPUT", payload: { name: "description", value: blogData.description } });
                dispatch({ type: "ADD_IMAGES", payload: { cover: blogData.coverImage } });
    
                blogData.tags?.forEach(tag => {
                    dispatch({ type: "ADD_TAGS", payload: tag });
                });
    
            } catch (err) {
                console.error("Error fetching blog:", err);
            }
        };
    
        fetchBlog();
    }, [id]);

    useEffect(() => {
        const fetchRecommended = async () => {
            if (!blog) return;
    
            try {
                const res = await newRequest.get("/techniques/recommended", {
                    params: {
                        tags: blog.tags?.join(","),
                        excludeId: blog._id,
                    },
                });
                setRecommendations(res.data);
            } catch (err) {
                console.error("Failed to fetch recommended techniques:", err);
            }
        };
    
        fetchRecommended();
    }, [blog]);
    
    



    return (
        <Container maxWidth="lg" sx={{ fontFamily: "'Inter', sans-serif", mb: 6, mt: 4 }}>
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

            {/* Blog Content */}
            <Box position="relative" mb={6}>
                <StyledCard>
                    <CategoryChip label={state.tags.join(", ") || "General"} />
                    <CardMedia
                        component="img"
                        height="500"
                        image={state.coverImage || "https://via.placeholder.com/800x400"}
                        alt={state.title}
                        sx={{ objectPosition: "center 30%" }}
                    />
                </StyledCard>

                <Box mt={3}>
                    <Typography variant="h3" fontWeight="bold" mb={2}>
                        {state.title}
                    </Typography>

                    <Typography variant="body1" paragraph fontSize="1.1rem" lineHeight="1.8">
                        {state.subtitle}
                    </Typography>

                    <Typography variant="body2" paragraph mt={4} fontSize="1rem" lineHeight="1.7">
                        {state.description}
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ my: 6 }} />

            <Box textAlign="center" mt={6}>
                <Typography variant="h4" fontWeight="bold" mb={2}>
                    Recommended Techniques
                </Typography>

            </Box>
            {recommendations.length > 0 && (
                <Box mt={6}>

                    <Grid container spacing={4}>
                        {recommendations.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item._id}>
                                <TechniqueCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}


            <Divider sx={{ my: 6 }} />
        </Container>
    );
};

export default BlogPage;
