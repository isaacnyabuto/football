import React from "react";
import "../Styles/Navbar.css";
import { FaFootballBall } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <FaFootballBall className="nav-icon" />
        <h2>Football Registration</h2>
      </div>
      <div className="nav-right">
        <button className="nav-btn">Login</button>
        <button className="nav-btn nav-btn-register">Register</button>
      </div>
    </nav>
  );
}
