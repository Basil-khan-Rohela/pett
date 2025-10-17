// src/pages/dashboard/AddPet.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Pet.css";

export default function PetAdd() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    age: "",
    owner: "",
    status: "Healthy",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🐾 Pet Added Successfully!");
    navigate("/dashboard/pet");
  };

  return (
    <Layout>
      <div className="addpet-page container py-4">
        <h3 className="page-title">➕ Add New Pet</h3>
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
            placeholder="Pet Type (Dog, Cat...)"
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
          <button type="submit" className="btn-submit">Add Pet</button>
        </form>
      </div>
    </Layout>
  );
}
