import React from "react";
import "./home.css"; 
import { NavLink } from "react-router-dom";

const Home = () => {
    function handleClick() {
        window.location.href = '/login';
        console.log("clicked");
    }
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="brand">KENYA TEAM ASSOCIATION</a>
        <ul className="nav-links">
          <li>
            <a href="/Home">HOME</a>
          </li>
          <li>
            <a href="/contact">CONTACTS</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/login" onClick={handleClick}>LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Home;
