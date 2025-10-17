import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="auth-card shadow-lg p-4">
        <h2 className="text-center mb-3">Login</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              className="form-control"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              className="form-control"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button className="btn btn-primary w-100 mb-3">Login</button>
        </form>

        <div className="text-center mt-3">
          <p className="fw-bold">New here? Register as:</p>
          <div className="d-flex flex-column gap-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/register")}
            >
              Pet Owner
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => navigate("/shelter")}
            >
               Animal Shelter
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => navigate("/veterinarian")}
            >
               Veterinarian
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

