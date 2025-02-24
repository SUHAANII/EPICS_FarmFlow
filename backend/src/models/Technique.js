const mongoose = require("mongoose");

const TechniqueSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  coverImage: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  tags: [String],
  comments: [{ user: String, text: String, date: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model("Technique", TechniqueSchema);
