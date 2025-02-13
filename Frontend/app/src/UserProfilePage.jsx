import React, { useState } from "react";

function UserProfilePage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    // Add other fields as needed
  });
  const [editing, setEditing] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings to backend here
    setEditing(false);
    setFeedback("Profile updated successfully!");
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">User Profile & Settings</h1>
      {feedback && <div className="alert alert-success">{feedback}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        {/* Add additional fields as needed */}
        <div className="d-flex justify-content-between">
          {!editing ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserProfilePage;
