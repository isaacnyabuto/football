import React from "react";
import "./backgroundvideo.css"; // Import the CSS file

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop id="background-video">
        <source src="/media/football.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
