import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [techniques, setTechniques] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingTechniques, setLoadingTechniques] = useState(false);
  const [profileError, setProfileError] = useState(null);
  const [techError, setTechError] = useState(null);

  // Fetch user profile (GET request)
  const fetchUserProfile = async () => {
    setLoadingProfile(true);
    setProfileError(null); // Reset error before fetching
    try {
      const response = await fetch("http://localhost:5000/api/user/profile");

      if (!response.ok) {
        throw new Error(`Profile Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setUserProfile(result);
    } catch (err) {
      setProfileError(err.message);
    } finally {
      setLoadingProfile(false);
    }
  };

  // Update user profile (PUT request)
  const updateUserProfile = async () => {
    if (!userProfile) return;

    const updatedProfile = { ...userProfile, name: "Updated Name" };

    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      if (!response.ok) {
        throw new Error(`Update Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setUserProfile(result);
    } catch (err) {
      setProfileError(err.message);
    }
  };

  // Fetch techniques (GET request)
  const fetchTechniques = async () => {
    setLoadingTechniques(true);
    setTechError(null); // Reset error before fetching
    try {
      const response = await fetch("http://localhost:5000/api/tech");

      if (!response.ok) {
        throw new Error(`Techniques Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setTechniques(result);
    } catch (err) {
      setTechError(err.message);
    } finally {
      setLoadingTechniques(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    fetchTechniques();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* User Profile Section */}
      <h2>User Profile</h2>
      {loadingProfile && <p>Loading profile...</p>}
      {profileError && <p style={{ color: "red" }}>{profileError}</p>}
      {userProfile && (
        <div>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <button onClick={updateUserProfile}>Update Profile</button>
        </div>
      )}

      {/* Techniques Section */}
      <h2>Techniques</h2>
      {loadingTechniques && <p>Loading techniques...</p>}
      {techError && <p style={{ color: "red" }}>{techError}</p>}
      {techniques.length > 0 ? (
        <ul>
          {techniques.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      ) : (
        !loadingTechniques && <p>No techniques found.</p>
      )}
    </div>
  );
};

export default Dashboard;
