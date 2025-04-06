import React, { useReducer } from "react";
import {
  Container, TextField, Button, Box, Chip, Typography, Stack
} from "@mui/material";
import { blogReducer, INITIAL_STATE } from "../../reducers/blogReducer";
import newRequest from "../../utils/newRequest";
import { useMutation, } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


const PostTechnique = () => {
  const [state, dispatch] = useReducer(blogReducer, INITIAL_STATE);
  const [tagInput, setTagInput] = React.useState("");

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (technique) => {
      const token = localStorage.getItem("token");
      return newRequest.post("/techniques", technique, {
        headers: {
          "x-auth-token": token,
        },
        withCredentials: true, // if you also use cookies
      });
    }
  });

  
  

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      dispatch({ type: "ADD_TAGS", payload: tagInput.trim() });
      setTagInput("");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "FarmFlow");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dwk5hmz2o/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      dispatch({
        type: "ADD_IMAGES",
        payload: { cover: data.secure_url, images: [] },
      });
      console.log("Image uploaded successfully:", data.secure_url);      
    } catch (err) {
      console.error("Image upload failed:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/techniques");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await newRequest.post("/techniques", {
  //       title: state.title,
  //       subtitle: state.subtitle,
  //       description: state.description,
  //       tags: state.tags,
  //       coverImage: state.cover,
  //     }, {

  //       withCredentials: true,
  //     });
  //     alert("Technique posted successfully!");
  //     // Clear form or redirect
  //   } catch (err) {
  //     console.error("Error posting technique:", err);
  //   }
  // };

  return (
    <Container maxWidth="md" sx={{ mt: 4, fontFamily: "'Inter', sans-serif" }}>
      <Typography variant="h4" mb={4} fontWeight="bold">
        Post a New Technique
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          fullWidth
          value={state.title}
          onChange={handleChange}
          sx={{ mb: 3 }}
          required
        />
        <TextField
          name="subtitle"
          label="Subtitle"
          fullWidth
          value={state.subtitle}
          onChange={handleChange}
          sx={{ mb: 3 }}
          required
        />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={5}
          fullWidth
          value={state.description}
          onChange={handleChange}
          sx={{ mb: 3 }}
          required
        />

        {/* Tag Input */}
        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <TextField
            label="Add Tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            size="small"
          />
          <Button onClick={handleAddTag} sx={{ ml: 2 }} variant="outlined">
            Add
          </Button>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          {state.tags.map((tag, idx) => (
            <Chip key={idx} label={tag} color="primary" />
          ))}
        </Stack>

        {/* Image Upload */}
        <Box sx={{ mb: 3 }}>
          <Button variant="contained" component="label">
            Upload Cover Image
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
          {state.cover && (
            <Box mt={2}>
              <img src={state.cover} alt="Cover" style={{ width: "100%", borderRadius: "10px" }} />
            </Box>
          )}
        </Box>

        <Button type="submit" variant="contained" size="large">
          Submit Technique
        </Button>
      </Box>
    </Container>
  );
};

export default PostTechnique;
