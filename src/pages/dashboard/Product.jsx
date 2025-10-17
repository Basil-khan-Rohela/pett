// // src/pages/dashboard/Product.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import Layout from "../../components/dashboard/Layout";
// import "./Product.css";

// export default function Product() {
//   const products = [
//     { id: 1, name: "Dog Food", category: "Pet Supplies", price: 1200, stock: 35 },
//     { id: 2, name: "Cat Toy", category: "Toys", price: 500, stock: 18 },
//     { id: 3, name: "Bird Cage", category: "Accessories", price: 2500, stock: 10 },
//     { id: 4, name: "Rabbit Hutch", category: "Housing", price: 4000, stock: 5 },
//   ];

//   return (
//     <Layout>
//       <div className="products-page container py-4">
//         <div className="products-header">
//           <h3 className="products-title">📦 Products</h3>

//           {/* ✅ Add Product Button */}
//           <Link to="/dashboard/addproduct" className="btn-add">
//             ➕ Add Product
//           </Link>
//         </div>

//         <p className="products-subtitle">
//           Manage all <span>products</span> available in the store.
//         </p>

//         <div className="table-responsive">
//           <table className="products-table">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Product</th>
//                 <th>Category</th>
//                 <th>Price (Rs.)</th>
//                 <th>Stock</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((p, index) => (
//                 <tr key={p.id}>
//                   <td>{index + 1}</td>
//                   <td>{p.name}</td>
//                   <td>{p.category}</td>
//                   <td>{p.price}</td>
//                   <td>{p.stock}</td>
//                   <td>
//                     {/* ✅ Edit Product Link */}
//                     <Link
//                       to={`/dashboard/updateproduct/${p.id}`}
//                       className="btn-action edit"
//                     >
//                       ✏️ Edit
//                     </Link>

//                     <button className="btn-action delete">🗑️ Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// src/pages/dashboard/Product.jsx
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Product.css";

export default function Product() {
  const products = [
    { id: 1, name: "Dog Food", category: "Pet Supplies", price: 1200, stock: 35 },
    { id: 2, name: "Cat Toy", category: "Toys", price: 500, stock: 18 },
    { id: 3, name: "Bird Cage", category: "Accessories", price: 2500, stock: 10 },
    { id: 4, name: "Rabbit Hutch", category: "Housing", price: 4000, stock: 5 },
  ];

  return (
    <Layout>
      <div className="products-page container py-4">
        <div className="products-header">
          <h3 className="products-title">📦 Products</h3>
          <Link to="/dashboard/addproduct" className="btn-add">
            Add Product
          </Link>
        </div>

        <p className="products-subtitle">
          Manage all <span>products</span> available in the store.
        </p>

        <div className="table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price (Rs.)</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={p.id}>
                  <td>{index + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.price}</td>
                  <td>
                    <span
                      className={`stock-badge ${
                        p.stock > 20 ? "in-stock" : p.stock > 0 ? "low-stock" : "out-stock"
                      }`}
                    >
                      {p.stock > 0 ? `${p.stock} left` : "Out of Stock"}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/updateproduct/${p.id}`}
                      className="btn-action edit"
                    >
                      ✏️ Edit
                    </Link>
                    <button className="btn-action delete">🗑️ Delete</button>
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
