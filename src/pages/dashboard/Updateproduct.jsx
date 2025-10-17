// src/pages/dashboard/Update.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Updateproduct.css";

export default function UpdateProduct() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "Sample Product",
    category: "Category",
    price: 1000,
    stock: 10,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product ID ${id} Updated Successfully ✅`);
  };

  return (
    <Layout>
      <div className="update-page container py-4">
        <h3 className="page-title">✏️ Update Product</h3>
        <form className="update-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price (Rs.)"
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">
            Update Product
          </button>
        </form>
      </div>
    </Layout>
  );
}
