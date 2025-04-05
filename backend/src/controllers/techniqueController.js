const Technique = require("../models/Technique");

// Create a new technique
const createTechnique = async (req, res) => {
  try {
    const technique = new Technique(req.body);
    const savedTechnique = await technique.save();
    res.status(201).json(savedTechnique);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    });
    res.status(200).json(techniques);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get recommended techniques
const getRecommendedTechniques = async (req, res) => {
  try {
    const recommended = await Technique.find().limit(5).sort({ createdAt: -1 });
    res.status(200).json(recommended);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTechnique,
  getAllTechniques,
  getSavedTechniques,
  searchTechniques,
  getRecommendedTechniques
};

