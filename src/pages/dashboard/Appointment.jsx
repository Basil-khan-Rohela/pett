// src/pages/dashboard/Appointment.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Appointment.css";

export default function Appointment() {
  const navigate = useNavigate();

  const appointments = [
    {
      id: 1,
      pet: "Max 🐶",
      owner: "Basil Khan",
      date: "2025-09-15",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      pet: "Milo 🐱",
      owner: "Zain",
      date: "2025-09-16",
      time: "2:00 PM",
      status: "Pending",
    },
  ];

  return (
    <Layout>
      <div className="appointment-page container py-4">
        <h3 className="appointment-title">📅 Appointments</h3>
        <p className="appointment-subtitle">
          Manage <span>Pet Appointments</span>
        </p>

        {/* Add Appointment Button */}
        <div className="text-end mb-3">
          <button
            className="btn-add-appointment"
            onClick={() => navigate("/dashboard/addappointment")}
          >
            ➕ Add Appointment
          </button>
        </div>

        {/* Appointment Table */}
        <div className="appointment-card">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Pet</th>
                <th>Owner</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id} className="fade-in">
                  <td data-label="Pet">{a.pet}</td>
                  <td data-label="Owner">{a.owner}</td>
                  <td data-label="Date">{a.date}</td>
                  <td data-label="Time">{a.time}</td>
                  <td data-label="Status">
                    <span
                      className={`status-badge ${
                        a.status.toLowerCase()
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td data-label="Actions" className="text-end">
                    {/* Edit navigates to UpdateAppointment */}
                    <button
                      className="btn-action edit"
                      onClick={() =>
                        navigate(`/dashboard/updateappointment/${a.id}`)
                      }
                    >
                      ✏️
                    </button>

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
