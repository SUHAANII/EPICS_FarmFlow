import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [techniques, setTechniques] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user profile (GET request)
  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/users/profile");

      if (!response.ok) throw new Error("Failed to fetch user profile");

      const result = await response.json();
      setUserProfile(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update user profile (PUT request)
  const updateUserProfile = async () => {
    if (!userProfile) return;

    const updatedProfile = { ...userProfile, name: "Updated Name" };

    try {
      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      if (!response.ok) throw new Error("Failed to update user profile");

      const result = await response.json();
      setUserProfile(result);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch techniques (GET request)
  const fetchTechniques = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/techniques");

      if (!response.ok) throw new Error("Failed to fetch techniques");

      const result = await response.json();
      setTechniques(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    fetchTechniques();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* User Profile Section */}
      {userProfile && (
        <div>
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <button onClick={updateUserProfile}>Update Profile</button>
        </div>
      )}

      {/* Techniques Section */}
      <h2>Techniques</h2>
      {techniques.length > 0 ? (
        <ul>
          {techniques.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      ) : (
        <p>No techniques found.</p>
      )}
    </div>
  );
};

export default Dashboard;
