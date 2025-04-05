import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";  
import { Login } from "./components/login/Login";
import Register from "./components/register/Register";
import Techniques from "./components/techniques/Techniques";
import UserInfo from "./components/user/UserInfo";
import BlogPage from "./components/blogs/blog";

// Main app component
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <MainContent />
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

// Handles route-based layout and style
function MainContent() {
  const location = useLocation();
  const whiteTextPages = ["/"];
  const textColor = whiteTextPages.includes(location.pathname) ? "white" : "black";

  return (
    <main style={{ 
      paddingTop: location.pathname !== "/" ? "80px" : "0px",
      color: textColor
    }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
