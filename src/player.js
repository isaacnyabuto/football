import React, { useState } from "react";
import "./player.css"; // Import CSS file

const RegisterPlayer = () => {
  const [player, setPlayer] = useState({
    playerId: "",
    nationality: "",
    team: "",
    height: "",
    position: "",
    image: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPlayer({ ...player, image: file });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Player Registered:", player);
    alert("Player registered successfully!");
  };

  return (
    <div className="background">
    <div className="register-player-container">
      <h2>Register a New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>Player ID:</label>
        <input
          type="text"
          name="playerId"
          value={player.playerId}
          onChange={handleChange}
          required
        />

        <label>Nationality:</label>
        <input
          type="text"
          name="nationality"
          value={player.nationality}
          onChange={handleChange}
          required
        />

        <label>Team Playing For:</label>
        <input
          type="text"
          name="team"
          value={player.team}
          onChange={handleChange}
          required
        />

        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={player.height}
          onChange={handleChange}
          required
        />

        <label>Position Played:</label>
        <select name="position" value={player.position} onChange={handleChange} required>
          <option value="">Select Position</option>
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Forward">Forward</option>
        </select>

        <label>Upload Player Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />

        <button type="submit">Register Player</button>
      </form>
    </div>
    </div>
  );
};

export default RegisterPlayer;
