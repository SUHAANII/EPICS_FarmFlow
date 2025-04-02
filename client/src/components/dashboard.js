import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [techniques, setTechniques] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingTechniques, setLoadingTechniques] = useState(false);
  const [profileError, setProfileError] = useState(null);
  const [techError, setTechError] = useState(null);

  // ✅ Fetch User Profile (GET request)
  const fetchUserProfile = async () => {
    setLoadingProfile(true);
    setProfileError(null);
    const token = localStorage.getItem("token"); // 🔥 Get token from localStorage

    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // 🔥 Attach token here
        },
      });

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

  // ✅ Update User Profile (PUT request)
  const updateUserProfile = async () => {
    if (!userProfile) return;
    const token = localStorage.getItem("token"); // 🔥 Get token

    const updatedProfile = { ...userProfile, name: "Updated Name" };

    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // 🔥 Attach token here
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

  // ✅ Fetch Techniques (GET request)
  const fetchTechniques = async () => {
    setLoadingTechniques(true);
    setTechError(null);
    const token = localStorage.getItem("token"); // 🔥 Get token

    try {
      const response = await fetch("http://localhost:5000/api/tech", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // 🔥 Attach token here
        },
      });

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

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token"); // 🔥 Remove token on logout
    window.location.href = "/login"; // Redirect to login page
  };

  useEffect(() => {
    fetchUserProfile();
    fetchTechniques();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* ✅ User Profile Section */}
      <h2>User Profile</h2>
      {loadingProfile && <p>Loading profile...</p>}
      {profileError && <p style={{ color: "red" }}>{profileError}</p>}
      {userProfile && (
        <div>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <button onClick={updateUserProfile}>Update Profile</button>
          <button onClick={handleLogout} style={{ marginLeft: "10px", color: "red" }}>Logout</button>
        </div>
      )}

      {/* ✅ Techniques Section */}
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
