import React, { useState } from "react";
import "./login.css"; // External CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "", rememberMe: false });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="username" name="username" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <div className="remember-me">
          <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
          <label>Remember me</label>
        </div>

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/">Sign up</a></p>
    </div>
  );
};

export default Login;
