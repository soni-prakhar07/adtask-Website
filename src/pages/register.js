import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup when unmounting
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://dev.adtask.ai/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          last_name,
          first_name,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.access_token;
        localStorage.setItem("access_token", token);

        // Verify token
        const verifyResponse = await fetch(
          `https://dev.adtask.ai/verify-token/${token}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (verifyResponse.ok) {
          navigate("/chat"); // Redirect if token is valid
        } else {
          setError("Token verification failed. Please try again.");
        }
      } else {
        setError(
          data.detail
            ? data.detail.map((err) => err.msg).join(", ")
            : "Registration failed"
        );
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "25rem" }}>
        <h2 className="text-center mb-4">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="string"
              className="form-control"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="string"
              className="form-control"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">login</a>
        </p>
      </div>
    </div>
  );
}
