import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        identifier, // This can be email or username
        password,
      });
      
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data || "Login Failed");
    }
  };

  return (
    <div className="glass-card">
      <h2>Identify</h2>
      
      {error && <div className="flash-msg">{error}</div>}
      
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username OR Email" 
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)} 
          required 
          autoComplete="off"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Access</button>
      </form>

      <p>No Credentials? <Link to="/signup">Initialize New User</Link></p>
    </div>
  );
};

export default Login;