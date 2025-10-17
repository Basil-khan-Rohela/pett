// src/pages/dashboard/Pet.jsx
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Pet.css";

export default function Pet() {
  const pets = [
    { id: 1, name: "Max", type: "Dog", age: 2, owner: "Basil Khan Rohela", status: "Healthy" },
    { id: 2, name: "Milo", type: "Cat", age: 1, owner: "Zain", status: "Checkup" },
    { id: 3, name: "Rio", type: "Parrot", age: 3, owner: "Jawad", status: "Sick" },
    { id: 4, name: "Bella", type: "Rabbit", age: 2, owner: "Walid", status: "Healthy" },
  ];

  return (
    <Layout>
      <div className="pets-page container py-4">
        <div className="pets-header">
          <h3 className="pets-title">🐾 Pets</h3>
          {/* ✅ Add Pet Button */}
          <Link to="/dashboard/addpet" className="btn-add">
            ➕ Add Pet
          </Link>
        </div>

        <p className="pets-subtitle">
          Manage all <span>registered pets</span> here.
        </p>

        <div className="pets-card table-responsive">
          <table className="pets-table table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Age</th>
                <th>Owner</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={pet.id} className="fade-in">
                  <td>{index + 1}</td>
                  <td>{pet.name}</td>
                  <td>{pet.type}</td>
                  <td>{pet.age} years</td>
                  <td>{pet.owner}</td>
                  <td>
                    <span className={`status-badge ${pet.status.toLowerCase()}`}>
                      {pet.status}
                    </span>
                  </td>
                  <td className="text-center">
                    {/* ✅ Edit -> UpdatePet Page */}
                    <Link
                      to={`/dashboard/updatepet/${pet.id}`}
                      className="btn-action edit"
                    >
                      ✏️
                    </Link>
                    <button className="btn-action delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
