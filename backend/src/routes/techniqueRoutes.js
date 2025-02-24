const express = require("express");
const { createTechnique, getTechniques } = require("../controllers/techniqueController");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.post("/", authMiddleware, createTechnique);
router.get("/", getTechniques);

module.exports = router;
