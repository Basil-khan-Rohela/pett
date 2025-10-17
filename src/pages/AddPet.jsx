import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './AddPet.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function AddPet() {
  const [form, setForm] = useState({ name: '', species: 'Dog', breed: '', notes: '' });
  const { addPet } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    addPet(form);
    navigate('/pet-profiles');
  };

  return (

    <Layout>
    <div className="add-pet container my-5">
      <div className="card pet-form-card shadow-lg border-0">
        <div className="card-header text-center bg-primary text-white rounded-top">
          <h2 className="mb-1">🐾 Add Your Pet</h2>
          <p className="mb-0">Fill out the details to create your pet’s profile</p>
        </div>

        <form onSubmit={onSubmit} className="card-body">
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Enter pet's name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Species</label>
            <select
              className="form-select"
              value={form.species}
              onChange={e => setForm({ ...form, species: e.target.value })}
            >
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Breed</label>
            <input
              type="text"
              className="form-control"
              value={form.breed}
              onChange={e => setForm({ ...form, breed: e.target.value })}
              placeholder="Enter breed (optional)"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Notes</label>
            <textarea
              className="form-control"
              rows="3"
              value={form.notes}
              onChange={e => setForm({ ...form, notes: e.target.value })}
              placeholder="Any special notes about your pet"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary px-4 py-2 fw-bold">
              Save Pet
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
}
