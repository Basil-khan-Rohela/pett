import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../context/AppContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { cart } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isOpen ? "navbar-open" : ""}`}>
      <div className="container-lg">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          FurShield
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? "active" : ""}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/products"
                role="button"
                data-bs-toggle="dropdown"
              >
                Products
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products" onClick={() => setIsOpen(false)}>
                    All Products
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pet-profiles" onClick={() => setIsOpen(false)}>
                Pet Profiles
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link position-relative"
                to="/cart"
                onClick={() => setIsOpen(false)}
              >
                <FaShoppingCart size={18} />
                {cart.length > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link login-btn"
                to="/login"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
