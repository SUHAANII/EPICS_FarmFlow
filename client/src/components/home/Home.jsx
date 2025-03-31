import React, { useEffect } from "react";
import { Box, Typography, Button, Card, CardContent, Container, Grid, Fade } from "@mui/material";
import Image from "../../data/HeroPage.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image2 from "../../data/RainWater.jpg";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// 🌟 Hero Section Component with parallax effect
const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElement = document.getElementById("parallax-hero");
      if (heroElement) {
        heroElement.style.backgroundPositionY = `${scrollValue * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      id="parallax-hero"
      sx={{
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        background: `linear-gradient(rgba(62, 52, 115, 0.7), rgba(8,0,58,0.7)), url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        textAlign: "center",
        overflow: "hidden"
      }}
    >
      <Fade in={true} timeout={1500}>
        <Box
          sx={{
            borderRadius: "10px",
            padding: { xs: "15px", md: "40px" },
            maxWidth: "1200px",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{
              textShadow: "2px 2px 15px rgba(0,0,0,0.5)",
              mb: 4,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" }
            }}
          >
            💧 Smart Rainwater Harvesting
          </Typography>

          <Typography
            variant="h5"
            color="white"
            sx={{
              mt: 2,
              lineHeight: 1.5,
              textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
              maxWidth: "800px",
              mx: "auto",
              mb: 4
            }}
          >
            Empowering People To Conserve Water With Intelligent Techniques Tailored To Your Environment
          </Typography>

          <Typography
            variant="body1"
            color="rgba(255, 255, 255, 0.9)"
            sx={{ mt: 2, mb: 4, maxWidth: "700px", mx: "auto" }}
          >
            Find the best methods for collecting and conserving rainwater based on your unique location,
            area, and weather conditions.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
            <Button
              onClick={() => navigate("/techniques")}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontSize: "16px",
                borderRadius: "50px",
                backgroundColor: "#2E7D32",
                color: "white",
                boxShadow: "0 4px 14px rgba(46, 125, 50, 0.4)",
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(46, 125, 50, 0.6)",
                  backgroundColor: "#1B5E20"
                }
              }}
            >
              Explore Techniques
            </Button>

            {/* <Button
              variant="outlined"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontSize: "16px",
                borderRadius: "50px",
                borderColor: "white",
                borderWidth: "2px",
                color: "white",
                backdropFilter: "blur(5px)",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "#3BB4F2",
                  color: "#3BB4F2",
                  transform: "translateY(-5px)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)"
                }
              }}
            >
              Learn More
            </Button> */}
          </Box>
        </Box>
      </Fade>

      {/* Animated down arrow */}
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
            "40%": { transform: "translateY(-20px)" },
            "60%": { transform: "translateY(-10px)" }
          }
        }}
      >
        <Typography
          color="white"
          sx={{
            textShadow: "2px 2px 5px rgba(0,0,0,0.6)"
          }}
        >
          Scroll to discover more
        </Typography>
      </Box>
    </Box>
  );
};

// 🌟 Enhanced Features Section
const features = [
  {
    title: "Chatbot Assistance",
    icon: "💬",
    description: "Instantly get answers to your queries with our AI-powered chatbot.",
    bgColor: "linear-gradient(135deg, #6aaf50 0%, #4B9E39 100%)",
  },
  {
    title: "Recommended Techniques",
    icon: "🔍",
    description: "Get expert-backed farming techniques suited for your specific environmental conditions.",
    bgColor: "linear-gradient(135deg, #b0d56f 0%, #95BD4E 100%)",
  },
  {
    title: "Deep Learning Hub",
    icon: "📚",
    description: "Explore and understand each technique in detail for better decision-making.",
    bgColor: "linear-gradient(135deg, #6aaf50 0%, #4B9E39 100%)",
  },
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #4c2420 0%, #733B36 100%)",
        py: 8,
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
          sx={{
            mb: 6,
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#b0d56f",
              borderRadius: "2px"
            }
          }}
        >
          🌱 Our Smart Solutions
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} style={{ transitionDelay: `${index * 200}ms` }}>
                <Card
                  sx={{
                    height: "280px",
                    background: feature.bgColor,
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    },
                    position: "relative"
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "0 0 0 40px",
                      p: 2,
                      fontSize: "2rem"
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="white"
                      sx={{ mb: 3 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{
                        opacity: 0.9,
                        lineHeight: 1.6,
                        fontSize: "1rem"
                      }}
                    >
                      {feature.description}
                    </Typography>

                    {/* Hidden "learn more" that appears on hover */}
                    <Box
                      sx={{
                        mt: 3,
                        opacity: 0,
                        transition: "all 0.3s",
                        ".MuiCard-root:hover &": { opacity: 1 }
                      }}
                    >
                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                          fontSize: "0.9rem",
                          borderBottom: "2px solid white",
                          borderRadius: 0,
                          pb: 0.5
                        }}
                        endIcon={<ArrowForwardIcon />}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// 🌟 Enhanced Rainwater Section
const RainwaterSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2f7d32 0%, #1B5E20 100%)",
        color: "white",
        py: 8,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Image with animation */}
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1000}>
              <Box
                sx={{
                  position: "relative",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    width: "100px",
                    height: "100px",
                    borderTop: "4px solid rgba(255,255,255,0.3)",
                    borderLeft: "4px solid rgba(255,255,255,0.3)",
                    zIndex: 1
                  },
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    borderBottom: "4px solid rgba(255,255,255,0.3)",
                    borderRight: "4px solid rgba(255,255,255,0.3)",
                    zIndex: 1
                  }
                }}
              >
                <img
                  src={Image2}
                  alt="Rainwater Harvesting"
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                    borderRadius: "10px",
                    boxShadow: "10px 10px 30px rgba(0,0,0,0.3)",
                    position: "relative",
                    zIndex: 2
                  }}
                />
              </Box>
            </Fade>
          </Grid>

          {/* Right Side - Content with animation */}
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1000} style={{ transitionDelay: "500ms" }}>
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    mb: 4,
                    position: "relative",
                    display: "inline-block",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-10px",
                      left: 0,
                      width: "60px",
                      height: "4px",
                      backgroundColor: "#FFD700",
                      borderRadius: "2px"
                    }
                  }}
                >
                  Why Rainwater Harvesting Matters
                </Typography>

                <Grid container spacing={3}>
                  {[
                    "Saves water for drought-prone seasons",
                    "Reduces dependency on groundwater",
                    "Enhances crop yield and soil health",
                    "Contributes to sustainable water management"
                  ].map((benefit, index) => (
                    <Grid item xs={12} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          backgroundColor: "rgba(0,0,0,0.1)",
                          p: 2,
                          borderRadius: "10px",
                          transition: "all 0.3s",
                          "&:hover": {
                            transform: "translateX(10px)",
                            backgroundColor: "rgba(0,0,0,0.2)"
                          }
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#FFD700",
                            mr: 2,
                            fontSize: 28,
                            flexShrink: 0
                          }}
                        />
                        <Typography variant="body1" sx={{ fontWeight: "500" }}>
                          {benefit}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    backgroundColor: "#FFD700",
                    color: "#1B5E20",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    "&:hover": {
                      backgroundColor: "#E6C200"
                    }
                  }}
                >
                  Start Harvesting Today
                </Button> */}
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Decorative water drop emojis */}
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            fontSize: `${30 + Math.random() * 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1,
            transform: "rotate(45deg)",
            zIndex: 0
          }}
        >
          💧
        </Box>
      ))}
    </Box>
  );
};

// 🌟 Statistics Section (New)
const StatisticsSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #2C3E50 0%, #1A2530 100%)",
        color: "white"
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Our Impact
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            { figure: "0", label: "Farms Helped", color: "#2E7D32" },
            { figure: "0%", label: "Water Savings", color: "#3BB4F2" },
            { figure: "0", label: "Gallons Conserved", color: "#b0d56f" },
            { figure: "0%", label: "Customer Satisfaction", color: "#FFD700" }
          ].map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Fade in={true} style={{ transitionDelay: `${i * 200}ms` }}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      color: stat.color,
                      mb: 1
                    }}
                  >
                    {stat.figure}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.9)"
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// 🌟 Call to Action Section (New)
const CallToActionSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(rgba(35, 74, 18, 0.92), rgba(35, 74, 18, 0.92)), url(${Image})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: "white",
        textAlign: "center"
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          Ready to Start Your Rainwater Journey?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 5,
            maxWidth: "700px",
            mx: "auto",
            color: "rgba(255,255,255,0.9)"
          }}
        >
          Join thousands of people who are making a difference with smarter water conservation techniques.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/login")}
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: "white",
              color: "#2E7D32",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: "50px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)"
              }
            }}
          >
            Get Started Now
          </Button>

          {/* <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderColor: "white",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: "50px",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.1)"
              }
            }}
          >
            Learn More
          </Button> */}
        </Box>
      </Container>
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
      <StatisticsSection />
      <CallToActionSection />
    </Box>
  );
};

export default Home;