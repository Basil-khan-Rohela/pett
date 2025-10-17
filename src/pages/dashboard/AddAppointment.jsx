// src/pages/dashboard/AddAppointment.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./AddAppointment.css";

export default function AddAppointment() {
  const [form, setForm] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    status: "Pending",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Appointment Added!");
    navigate("/dashboard/appointment");
  };

  return (
    <Layout>
      <div className="addappointment-page container py-4">
        <h3 className="page-title">➕ Add Appointment</h3>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="pet"
            placeholder="Pet Name"
            value={form.pet}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="owner"
            placeholder="Owner Name"
            value={form.owner}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button type="submit" className="btn-submit">
            Save Appointment
          </button>
        </form>
      </div>
    </Layout>
  );
}
