// HomePage.js

import React from "react";

import NavBar from "../Navbar/Navbar.js";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-content">
        <h1>Welcome to our Form App!</h1>
        <h2>Click on above links to fill the form</h2>
      </div>
    </div>
  );
};

export default Home;
