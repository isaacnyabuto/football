import React from "react";
import "../Styles/navbar.css"; 
import { NavLink } from "react-router-dom"; // ✅ Correctly imported
import BackgroundVideo from "./backgroundvideo";

const Home = () => {
    function handleClick() {
        window.location.href = '/login';
        console.log("clicked");
    }
  
    return (
      <div>
          <nav className="navbar">
            <div className="container">
                <a href="/" className="brand">KENYA TEAM ASSOCIATION</a>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">HOME</NavLink> {/* ✅ Fixed capitalization */}
                    </li>
                    <li>
                        <NavLink to="/contact">CONTACTS</NavLink> {/* ✅ Fixed attribute `to` */}
                    </li>
                    <li>
                        <NavLink to="/about">ABOUT</NavLink> {/* ✅ Fixed capitalization */}
                    </li>
                    <li>
                        <NavLink to="/login" onClick={handleClick}>LOGIN</NavLink> {/* ✅ Fixed capitalization */}
                    </li>
                </ul>
            </div>
        </nav>
        <BackgroundVideo />
      </div>

    );
};

export default Home;
