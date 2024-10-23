import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // TODO: Implement actual login logic here
    console.log("Login attempt with:", { email, password });
    // For demo purposes, we'll just redirect to the account page
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/account");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/register">Don't have an account? Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
