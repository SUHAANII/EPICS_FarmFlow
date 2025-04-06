const Technique = require("../models/Technique");

// Create a new technique
// const createTechnique = async (req, res) => {
//   try {
//     const technique = new Technique(req.body);
//     const savedTechnique = await technique.save();
//     res.status(201).json(savedTechnique);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const createTechnique = async (req, res) => {
  try {
    const { title, subtitle, description, tags, coverImage } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and Description are required." });
    }

    const newTechnique = new Technique({
      user: req.user._id, // from authMiddleware
      title,
      subtitle,
      description,
      tags,
      coverImage,
    });

    const saved = await newTechnique.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Error in createTechnique:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


// Get all techniques
const getAllTechniques = async (req, res) => {
  try {
    const techniques = await Technique.find().sort({ createdAt: -1 });
    res.status(200).json(techniques);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get saved techniques by user
const getSavedTechniques = async (req, res) => {
  try {
    const techniques = await Technique.find({ user: req.params.userId });
    res.status(200).json(techniques);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search techniques
const searchTechniques = async (req, res) => {
  const { query } = req.query;
  try {
    const techniques = await Technique.find({
      $or: [
        { title: new RegExp(query, "i") },
        { subtitle: new RegExp(query, "i") },
        { tags: { $in: [new RegExp(query, "i")] } }
      ]
    }).select("title subtitle tags coverImage createdAt"); // Include coverImage and other essentials

    res.status(200).json(techniques);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Get recommended techniques
const getRecommendedTechniques = async (req, res) => {
  const { tags, excludeId } = req.query;

  try {
    if (!tags) {
      return res.status(400).json({ message: "Tags are required for recommendation." });
    }

    const tagArray = tags.split(","); // e.g., "water,conservation" => ["water", "conservation"]

    const recommended = await Technique.find({
      _id: { $ne: excludeId }, // exclude current blog if provided
      tags: { $in: tagArray },
    })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title subtitle tags coverImage createdAt");

    res.status(200).json(recommended);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Get a technique by ID
const getTechniqueById = async (req, res) => {
  try {
    const technique = await Technique.findById(req.params.id);
    if (!technique) {
      return res.status(404).json({ message: "Technique not found" });
    }
    res.status(200).json(technique);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  createTechnique,
  getAllTechniques,
  getSavedTechniques,
  searchTechniques,
  getRecommendedTechniques,
  getTechniqueById
};

