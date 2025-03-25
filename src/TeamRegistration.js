import React, { useState } from "react";
import "./TeamRegistration.css"; // External CSS for styling

const TeamRegistration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamNumber: "",
    region: "",
    coach: "",
    numPlayers: "",
    logo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Team Registered Successfully!");
  };

  return (
    <div className="background">
    <div className="form-container">
      <h2>Team Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Team Name:</label>
        <input
          type="text"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          required
        />

        <label>Team Number:</label>
        <input
          type="number"
          name="teamNumber"
          value={formData.teamNumber}
          onChange={handleChange}
          required
        />

        <label>Region:</label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
        />

        <label>Coach Name:</label>
        <input
          type="text"
          name="coach"
          value={formData.coach}
          onChange={handleChange}
          required
        />

        <label>Number of Players:</label>
        <input
          type="number"
          name="numPlayers"
          value={formData.numPlayers}
          onChange={handleChange}
          required
        />

        <label>Upload Team Logo:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} required />

        <button type="submit">Register Team</button>
      </form>
    </div>
    </div>
  );
};

export default TeamRegistration;
