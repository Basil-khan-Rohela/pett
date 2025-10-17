import React, { useState } from "react";
import "./Veterinarian.css";
import { useNavigate } from "react-router-dom";

export default function Veterinarian() {
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    specialization: "",
    experience: "",
    availableTimeSlots: "",
    password: "",
    role: "vet",
  });

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const finalForm = {
      ...form,
      availableTimeSlots: form.availableTimeSlots
        .split(",")
        .map((slot) => slot.trim()),
    };

    console.log("Veterinarian Registered:", finalForm);
    navigate("/");
  };

  return (
    <div className="veterinarian-page d-flex align-items-center justify-content-center">
      <div className="veterinarian-card shadow-lg p-4">
        <h2 className="text-center mb-3"> Veterinarian Registration</h2>
        <p className="text-center text-muted mb-4">
          Register to manage treatments, appointments & pet health
        </p>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your name"
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
            <input
              type="text"
              className="form-control"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Enter address"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Specialization</label>
            <input
              type="text"
              className="form-control"
              value={form.specialization}
              onChange={(e) =>
                setForm({ ...form, specialization: e.target.value })
              }
              placeholder="E.g. Surgery, Vaccination, General Care"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Experience</label>
            <input
              type="text"
              className="form-control"
              value={form.experience}
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
              placeholder="e.g. 5 years"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Available Time Slots</label>
            <input
              type="text"
              className="form-control"
              value={form.availableTimeSlots}
              onChange={(e) =>
                setForm({ ...form, availableTimeSlots: e.target.value })
              }
              placeholder="E.g. 9am-12pm, 2pm-5pm"
              required
            />
            <small className="text-muted">
              Separate multiple slots with commas
            </small>
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

          <button type="submit" className="btn btn-primary w-100">
            Register Veterinarian
          </button>
        </form>
      </div>
    </div>
  );
}
