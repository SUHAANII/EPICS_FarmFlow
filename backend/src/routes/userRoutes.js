const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Get user profile
router.get("/profile", authMiddleware, getUserProfile);

// Update user profile
router.put("/profile", authMiddleware, updateUserProfile);

module.exports = router;
