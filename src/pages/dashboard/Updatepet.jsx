// src/pages/dashboard/UpdatePet.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./UpdatePet.css";

export default function UpdatePet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Sample Pet",
    type: "Dog",
    age: 2,
    owner: "John Doe",
    status: "Healthy",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Pet ID ${id} updated successfully!`);
    navigate("/dashboard/pet");
  };

  return (
    <Layout>
      <div className="updatepet-page container py-4">
        <h3 className="page-title">✏️ Update Pet</h3>
        <form className="pet-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Pet Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Pet Type"
            value={form.type}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
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
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Healthy">Healthy</option>
            <option value="Checkup">Checkup</option>
            <option value="Sick">Sick</option>
          </select>
          <button type="submit" className="btn-submit">Update Pet</button>
        </form>
      </div>
    </Layout>
  );
}
