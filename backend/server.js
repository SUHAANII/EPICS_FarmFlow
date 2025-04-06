require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(cors({ origin: "https://epics-farm-flow-suhani-6t687rb7n.vercel.app/", methods: ["POST" , "GET"] ,credentials: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


// Connect to Database
connectDB();

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));
app.use("/api/techniques", require("./src/routes/techniqueRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
