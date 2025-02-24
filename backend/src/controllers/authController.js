const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    console.log("📌 Register request received"); // Debug log

    const { firstName, lastName, email, password, phone } = req.body;

    if (!firstName || !email || !password || !phone) {
      console.log("❌ Missing fields");
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    let user = await User.findOne({ email });
    if (user) {
      console.log("❌ User already exists");
      return res.status(400).json({ msg: "User already exists" });
    }

    console.log("🔒 Hashing password...");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("📝 Creating user...");
    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
    });

    await user.save();
    console.log("✅ User saved successfully");

    console.log("🔑 Generating JWT Token...");
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    console.log("🚀 Registration successful!");
    res.status(201).json({ token, user });
  } catch (error) {
    console.error("❌ Server error:", error.message);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};



exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
