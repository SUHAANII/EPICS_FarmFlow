import React, { useState } from "react";
import axios from "axios";

const UpdateData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/data/${id}/`, { name });
      alert("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h2>Update Data</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter updated name"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateData;
