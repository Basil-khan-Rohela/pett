import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import Layout from "../components/Layout";

export default function Products() {
  const { products, searchQuery } = useContext(AppContext);

  const filtered = products.filter((p) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  return (
    <Layout>
    <div className="products-page container-lg py-5">      
      <div className="products-header text-center mb-5">
        <h2 className="section-title"> Our Products </h2>
        <p className="section-subtitle">
          Explore the best items for your furry and feathered friends
        </p>
      </div>

      
      <div className="row g-4">
        {filtered.map((p) => (
          <div key={p.id} className="col-6 col-md-4 col-lg-3">
            <ProductCard product={p} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-12 text-center">
            <p className="no-products">No products found.</p>
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
}
