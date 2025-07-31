import React, { useEffect, useState, useMemo } from "react";
import "../Styles/Home.css";
import NavBar from "../pages/Navbar";
import backgroundImage from "../images/img1.jpg"; // Import image

export default function HomePage() {
 
  
  // Messages for the typewriter effect
  const messages = useMemo(
    () => ["Welcome to  the Football Registration Portal!"],
    []
  );

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
      }}
    >
      <NavBar />
      <div className="overlay">
        
      <div className="message-text">{currentText}</div>
      </div>
    </div>
  );
}
