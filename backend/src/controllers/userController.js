const User = require("../models/User");

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { name, phone, email, location, farmArea, weather } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { personalInfo: { name, phone, email, location, farmArea, weather } },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
