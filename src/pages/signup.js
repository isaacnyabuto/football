import { useState } from "react";
import "../Styles/signup.css"; // Import external CSS file

export default function SignupForm() {
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
     <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      {error && <p className="signup-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="enter username"
          />
        </div>
       
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
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
   </div>
  );
}
