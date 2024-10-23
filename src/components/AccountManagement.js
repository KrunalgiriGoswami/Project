import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountManagement = () => {
  const [user, setUser] = useState({ email: "", name: "", bio: "" });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Account Management</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                className="form-control"
                id="bio"
                name="bio"
                value={user.bio}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Name:</strong> {user.name || "Not set"}
            </p>
            <p>
              <strong>Bio:</strong> {user.bio || "Not set"}
            </p>
            <button
              className="btn btn-primary me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountManagement;
