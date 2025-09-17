import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/signup.css";
import backgroundImage from "../images/img2.jpg";

export default function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    teamName: ""
  });
  const [teamLogoFile, setTeamLogoFile] = useState(null);
  const [previewLogo, setPreviewLogo] = useState(null);
  const [error, setError] = useState("");

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload (keep file, show preview)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setTeamLogoFile(file);

    // preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewLogo(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.username || !formData.password || !formData.teamName || !teamLogoFile) {
      setError("All fields are required!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    try {
      // Build FormData for multipart/form-data
      const fd = new FormData();
      fd.append("username", formData.username);
      fd.append("password", formData.password);
      fd.append("teamName", formData.teamName);
      fd.append("logo", teamLogoFile); // must match backend upload.single('logo')

      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: fd // don't set Content-Type manually
      });

      const data = await res.json();
      if (res.ok) {
        // Save token in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("teamName", data.teamName);
        localStorage.setItem("logoUrl", data.logoUrl);

        setError("");
        // clear form
        setFormData({ username: "", password: "", teamName: "" });
        setTeamLogoFile(null);
        setPreviewLogo(null);

        alert("Signup successful!");
        navigate("/login");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
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
            {previewLogo && (
              <img
                src={previewLogo}
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
