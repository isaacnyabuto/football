import { useState } from "react";
import "../Styles/signup.css"; // Import external CSS file
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Form Submitted:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="background">
     <div className="login-container">
         {/* Back button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="username" name="username" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
  
    </div>
    </div>
  );
}
