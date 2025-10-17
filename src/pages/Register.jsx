import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    password: "",
    role: "owner",
  });

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Owner Registered:", form);
    navigate("/login");
  };

  return (
    <div className="register-page d-flex align-items-center justify-content-center">
      <div className="register-card shadow-lg p-4 animate-fade">
        <h2 className="text-center mb-3"> Pet Owner Registration</h2>
        <p className="text-center text-muted mb-4">
          Create your account to manage your pets and explore services
        </p>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              value={form.contactNumber}
              onChange={(e) =>
                setForm({ ...form, contactNumber: e.target.value })
              }
              placeholder="Enter contact number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Address</label>
            <input
              type="text"
              className="form-control"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 animate-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}





