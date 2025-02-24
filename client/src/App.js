import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";  
import {Login } from "./components/login/Login";
import Register from "./components/register/Register";
import Techniques from "./components/techniques/Techniques";
import UserInfo from "./components/user/UserInfo";
import BlogPage from "./components/blogs/blog";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: "84px" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />   */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
