const Technique = require("../models/Technique");

exports.createTechnique = async (req, res) => {
  try {
    const { coverImage, title, subtitle, description, tags } = req.body;
    const technique = new Technique({ user: req.user.id, coverImage, title, subtitle, description, tags });
    await technique.save();
    res.json(technique);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getTechniques = async (req, res) => {
  try {
    const techniques = await Technique.find().populate("user", "firstName lastName");
    res.json(techniques);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
