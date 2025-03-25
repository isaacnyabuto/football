import React, { useState, useEffect } from "react";
import "./Team.css"; // Create a CSS file for styling

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const savedTeams = JSON.parse(localStorage.getItem("teams")) || [];
    setTeams(savedTeams);
  }, []);

  return (
    <div className="teams-container">
      <h2>Registered Teams</h2>
      {teams.length === 0 ? (
        <p>No teams registered yet.</p>
      ) : (
        <ul className="teams-list">
          {teams.map((team, index) => (
            <li key={index} className="team-card">
              <h3>{team.teamName}</h3>
              <p><strong>Team Number:</strong> {team.teamNumber}</p>
              <p><strong>Region:</strong> {team.region}</p>
              <p><strong>Coach:</strong> {team.coach}</p>
              <p><strong>Players:</strong> {team.numPlayers}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Teams;
