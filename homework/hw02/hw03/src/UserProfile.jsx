import { useEffect, useState } from "react";

export default function UserProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold">User Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Username:</strong> {profile.username}</p>
    </div>
  );
}
