import React from "react";
import "../Styles/Navbar.css";
import { FaFootballBall } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-left">
        <FaFootballBall className="nav-icon" />
        <h2 className="heading">Football Registration</h2>
      </div>
      <div className="nav-right">
           <button onClick={() => navigate("/login")} className="nav-btn">Login</button>
        <button onClick={() => navigate("/signup")} className=".nav-btn-register">Register</button>
      
      </div>
    </nav>
  );
}
