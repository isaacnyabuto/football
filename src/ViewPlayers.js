import React, { useState, useEffect } from "react";
import "./ViewPlayers.css"; // Import CSS file

const ViewPlayers = () => {
  const [players, setPlayers] = useState([]);

  // Fetch players from local storage on component mount
  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
    setPlayers(storedPlayers);
  }, []);

  return (
    <div className="players-container">
      <h2>Registered Players</h2>
      {players.length === 0 ? (
        <p>No players registered yet.</p>
      ) : (
        <div className="players-grid">
          {players.map((player, index) => (
            <div key={index} className="player-card">
              <img
                src={player.image ? URL.createObjectURL(player.image) : "default-avatar.png"}
                alt="Player"
                className="player-image"
              />
              <div className="player-details">
                <h3>{player.playerId}</h3>
                <p><strong>Nationality:</strong> {player.nationality}</p>
                <p><strong>Team:</strong> {player.team}</p>
                <p><strong>Height:</strong> {player.height} cm</p>
                <p><strong>Position:</strong> {player.position}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewPlayers;
