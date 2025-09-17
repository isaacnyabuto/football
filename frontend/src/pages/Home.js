import React, { useState, useEffect, useMemo } from "react";
import "../Styles/Home.css";
import NavBar from "../pages/Navbar";
import backgroundImage from "../images/img2.jpg"; // Import image
import { useNavigate } from "react-router-dom"; // for redirect after login

export default function LoginPage() {
  // Typewriter effect
  const messages = useMemo(
    () => ["Welcome to the Football Registration Portal!."],
    []
  );

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < messages[index].length) {
        setCurrentText(prev => prev + messages[index][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setIndex((index + 1) % messages.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index, messages]);

  useEffect(() => {
    if (index === messages.length) {
      navigate("/login");
    }
  }, [index, messages, navigate]);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <NavBar />
      <div className="overlay">
        <div className="message-text">{currentText}</div>

      </div>
    </div>
  );
}
