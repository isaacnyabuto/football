import React, { useState, useEffect, useMemo } from "react";
import "../Styles/Home.css";

export default function Home() {
  // Messages for the typewriter effect
  const messages = useMemo(
    () => ["Welcome Back Nyambuu", "Hope you're doing well!", "Enjoy your day!"],
    []
  );

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < messages[index].length) {
        setCurrentText((prev) => prev + messages[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setIndex((prev) => (prev + 1) % messages.length);
        }, 5000); // message stays for 5 seconds
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, index, messages]);

  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/media/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Typing Text */}
      <div className="message-text">{currentText}</div>
    </div>
  );
}
