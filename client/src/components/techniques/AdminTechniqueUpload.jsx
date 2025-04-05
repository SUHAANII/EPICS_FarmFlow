import React, { useState } from "react";
import {
  Box, Button, TextField, Typography, Grid, Paper, InputLabel
} from "@mui/material";
import upload from "../../utils/upload"; // your Cloudinary upload.js
import axios from "axios";

const AdminTechniqueUpload = () => {
  const [inputs, setInputs] = useState({
    title: "",
    subtitle: "",
    description: "",
    tags: "",
  });
  const [coverImage1, setCoverImage1] = useState(null);
  const [coverImage2, setCoverImage2] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user")); // must store user as JSON string in login
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !token) return alert("Please login as admin first.");

    try {
      setLoading(true);
      const imageUrl1 = await upload(coverImage1);
      const imageUrl2 = await upload(coverImage2);

      const techniqueData = {
        ...inputs,
        tags: inputs.tags.split(",").map(tag => tag.trim()),
        coverImage1: imageUrl1,
        coverImage2: imageUrl2,
        user: user._id,
      };

      await axios.post("http://localhost:5000/api/techniques", techniqueData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      alert("Technique uploaded successfully!");
      setInputs({ title: "", subtitle: "", description: "", tags: "" });
      setCoverImage1(null);
      setCoverImage2(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">Upload New Technique</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth name="title" label="Title" value={inputs.title} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth name="subtitle" label="Subtitle" value={inputs.subtitle} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth name="description" label="Description" multiline rows={4} value={inputs.description} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth name="tags" label="Tags (comma-separated)" value={inputs.tags} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Cover Image 1</InputLabel>
              <input type="file" accept="image/*" onChange={(e) => setCoverImage1(e.target.files[0])} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Cover Image 2</InputLabel>
              <input type="file" accept="image/*" onChange={(e) => setCoverImage2(e.target.files[0])} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                {loading ? "Uploading..." : "Upload Technique"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminTechniqueUpload;
