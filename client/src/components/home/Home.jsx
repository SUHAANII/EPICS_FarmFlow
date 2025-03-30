import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Image from "../../data/HeroPage.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image2 from "../../data/RainWater.jpg";
import { useNavigate } from "react-router-dom";


// 🌟 Hero Section Component
const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <Box id="home"
      sx={{
        width:"100%",
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${Image})`,
        background: "linear-gradient(rgba(8,0,58,.7), rgba(8,0,58,0.7)), ",   //`url(${Image})`, // 🔄 Replace with your actual image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        textAlign: "center",
        // px: 2,

        
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(201, 134, 134, 0)", // Slight transparency
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "1200px",
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="rgba(255, 255, 255, 0.8)">
          Empowering People To Conserve Water With Smart Rainwater Harvesting Techniques
        </Typography>
        <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" sx={{ mt: 2 }}>
          Find the best methods for collecting and conserving rainwater based on your unique location,
          area, and weather conditions.
        </Typography>
        <Button
          onClick={() => navigate("/techniques")}
          variant="outlined"
          sx={{
            mt: 3,
            px: 4,
            py: 1,
            fontSize: "16px",
            borderRadius: "25px",
            borderColor: "white",
            color: "white",
          }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
};

// 🌟 Features Section
const features = [
  {
    title: "Chatbot Assistance",
    icon: "💬",
    description: "Instantly get answers to your queries with our AI-powered chatbot.",
    bgColor: "#6aaf50",
  },
  {
    title: "Recommended Techniques",
    icon: "🔍",
    description: "Get expert-backed farming techniques suited for your needs.",
    bgColor: "#b0d56f",
  },
  {
    title: "Deep Learning Hub",
    icon: "📚",
    description: "Explore and understand each technique in detail for better decision-making.",
    bgColor: "#6aaf50",
  },
];

const FeaturesSection = () => {

  

  return (
    <Box sx={{ backgroundColor: "#4c2420", py: 5, textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              width: "300px",
              height: "200px",
              backgroundColor: feature.bgColor,
              borderRadius: "15px",
              boxShadow: 3,
              textAlign: "center",
            }}
          >
            <CardContent>
              {feature.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

// 🌟 Rainwater Section
const RainwaterSection = () => {
  return (
    <Box sx={{ backgroundColor: "#2f7d32", color: "white", py: 5, px: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Left Side - Image */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img 
            src={Image2} 
            alt="Rainwater Harvesting" 
            style={{ 
              width: "100%", 
              maxWidth: "700px", 
              borderRadius: "10px",
              boxShadow: "5px 5px 15px rgba(0,0,0,0.3)" 
            }} 
          /> 
        </Box>

        {/* Right Side - Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
            Why Rainwater Harvesting Matters
          </Typography>

          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <CheckCircleIcon sx={{ color: "#FFD700", mr: 1 }} />
            Saves water for drought-prone seasons.
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <CheckCircleIcon sx={{ color: "#FFD700", mr: 1 }} />
            Reduces dependency on groundwater.
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <CheckCircleIcon sx={{ color: "#FFD700", mr: 1 }} />
            Enhances crop yield and soil health.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};



// 🌟 Complete Home Page Component
const Home = () => {
  return (
    <Box>
      <HeroSection />
      <FeaturesSection />
      <RainwaterSection />
    </Box>
  );
};

export default Home;
