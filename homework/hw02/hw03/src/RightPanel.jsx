import { useEffect, useState } from "react";
import { getAccessToken } from "../js/utilities"; // Adjust path if needed

const RightPanel = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken();
        const response = await fetch("/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="right-panel">
      <h2>User Profile</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : !profile ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Username:</strong> {profile.username}</p>
        </div>
      )}
    </div>
  );
};

export default RightPanel;
