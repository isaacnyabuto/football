import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import "./dashboard.css"; // Import CSS file

const DashboardNavbar = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/Home");
  };

  return (
    <nav className="dashboard-navbar">
      <h2>Dashboard</h2>
      <ul className="nav-links">
        
        <li><Link to="/register-team">Register Team</Link></li>
        <li><Link to="/teams"> View Teams</Link></li>
        <li><Link to="/player"> register players</Link></li>
        <li><Link to="/players"> View Players</Link></li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
