// // src/components/dashboard/Sidebar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom"; 
// import "./Sidebar.css";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h4>Admin Panel</h4>
//       <ul className="nav flex-column">
//         <li className="nav-item">
//           <NavLink to="/dashboard" className="nav-link">
//             📊 <span>Dashboard</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/users" className="nav-link">
//             👤 <span>Users</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/products" className="nav-link">
//             📦 <span>Products</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/orders" className="nav-link">
//             🛒 <span>Orders</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/pet" className="nav-link">
//             🐾 <span>Pets</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/appointment" className="nav-link">
//             📅 <span>Appointments</span>
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }



// src/components/dashboard/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h4>Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link" onClick={toggleSidebar}>
            📊 <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/users" className="nav-link" onClick={toggleSidebar}>
            👤 <span>Users</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/products" className="nav-link" onClick={toggleSidebar}>
            📦 <span>Products</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/orders" className="nav-link" onClick={toggleSidebar}>
            🛒 <span>Orders</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/pet" className="nav-link" onClick={toggleSidebar}>
            🐾 <span>Pets</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/appointment" className="nav-link" onClick={toggleSidebar}>
            📅 <span>Appointments</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
