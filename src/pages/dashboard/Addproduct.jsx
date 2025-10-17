// src/pages/dashboard/AddProduct.jsx
import React, { useState } from "react";
import Layout from "../../components/dashboard/Layout";
import "./AddProduct.css";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product Added Successfully ✅");
  };

  return (
    <Layout>
      <div className="addproduct-page container py-4">
        <h3 className="page-title">➕ Add Product</h3>
        <form className="addproduct-form" onSubmit={handleSubmit}>
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
            Add Product
          </button>
        </form>
      </div>
    </Layout>
  );
}
