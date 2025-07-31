import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/signup.css";
import backgroundImage from "../images/img2.jpg";

export default function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    teamName: "",
    teamLogo: ""
  });

  const [error, setError] = useState("");

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload (convert to Base64 for storage)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, teamLogo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.username || !formData.password || !formData.teamName || !formData.teamLogo) {
      setError("All fields are required!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    // Save to localStorage (temporary)
    localStorage.setItem("user", JSON.stringify(formData));

    // Clear and navigate
    setError("");
    setFormData({ username: "", password: "", teamName: "", teamLogo: "" });

    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="signup-container">
        <h2 className="signup-title">Team Registration</h2>

        {/* Error Message */}
        {error && <p className="signup-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
            />
          </div>

          {/* Team Name */}
          <div className="input-group">
            <label>Team Name</label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="Enter team name"
            />
          </div>

          {/* Team Logo */}
          <div className="input-group">
            <label>Team Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {formData.teamLogo && (
              <img
                src={formData.teamLogo}
                alt="Team Logo Preview"
                style={{ width: "100px", marginTop: "10px", borderRadius: "8px" }}
              />
            )}
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
