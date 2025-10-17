import React, { useState } from "react";
import "./Shelter.css";
import { useNavigate } from "react-router-dom";

export default function Shelter() {
  const [form, setForm] = useState({
    shelterName: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    address: "",
    password: "",
    role: "shelter",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Shelter Registered:", form);
    navigate("/");
  };

  return (
    <div className="shelter-page d-flex align-items-center justify-content-center">
      <div className="shelter-card shadow-lg p-4">
        <h2 className="text-center mb-3"> Animal Shelter Registration</h2>
        <p className="text-center text-muted mb-4">
          Register your shelter to manage pets and adoptions
        </p>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Shelter Name</label>
            <input
              type="text"
              className="form-control"
              value={form.shelterName}
              onChange={(e) =>
                setForm({ ...form, shelterName: e.target.value })
              }
              placeholder="Enter shelter name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Contact Person</label>
            <input
              type="text"
              className="form-control"
              value={form.contactPerson}
              onChange={(e) =>
                setForm({ ...form, contactPerson: e.target.value })
              }
              placeholder="Person in charge"
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
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Address</label>
            <textarea
              className="form-control"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Enter shelter address"
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

          <button type="submit" className="btn btn-success w-100">
            Register Shelter
          </button>
        </form>
      </div>
    </div>
  );
}
