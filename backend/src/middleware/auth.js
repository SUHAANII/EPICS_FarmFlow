// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   console.log("----- AUTH MIDDLEWARE START -----");
//   const token = req.header("x-auth-token");
//   console.log("Token from x-auth-token:", token);

//   if (!token) {
//     console.log("❌ No token found. Authorization denied.");
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("✅ Token verified. Decoded payload:", decoded);
//     req.user = decoded.user;
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     console.log("❌ Token verification failed:", err.message);
//     res.status(401).json({ msg: "Invalid token" });
//   }
// };


const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { _id: decoded.id }; // ✅ Fix: attach id as _id
    next();
  } catch (err) {
    console.error("❌ Invalid token:", err.message);
    res.status(401).json({ msg: "Invalid token" });
  }
};
