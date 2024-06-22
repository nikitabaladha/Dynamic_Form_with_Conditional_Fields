// HomePage.js

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NavBar from "../Navbar/Navbar.js";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-content">
        <h1 className="welcome-line">
          Welcome to our <span className="app-name">Form App!</span>
        </h1>
        <div className="icon-text-container">
          <i className="fas fa-hand-pointer icon"></i>
          <h2 className="text">Click on above links to fill the form</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
