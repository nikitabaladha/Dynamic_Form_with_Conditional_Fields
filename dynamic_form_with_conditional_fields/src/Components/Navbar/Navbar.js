import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1 id="brand-logo">
          <Link to="/" className="navbar-brand">
            Form App
          </Link>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse middlePart"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/survey-form" className="nav-link">
                Survey Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/job-application-form" className="nav-link">
                Job Application Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/event-registration-form" className="nav-link">
                Event Registration Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
