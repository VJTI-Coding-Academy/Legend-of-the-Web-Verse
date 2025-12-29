import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    country: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      // On success, redirect to login
      navigate("/login");
    } catch (err) {
      setError(err.response?.data || "Registration Failed");
    }
  };

  return (
    <div className="glass-card" style={{ marginTop: '20px' }}>
      <h2>Register</h2>
      
      {error && <div className="flash-msg">{error}</div>}

      <form onSubmit={handleSignup}>
        <input name="username" type="text" placeholder="Set Username" onChange={handleChange} required autoComplete="off" />
        <input name="email" type="email" placeholder="Link Email" onChange={handleChange} required autoComplete="off" />
        <input name="password" type="password" placeholder="Set Password" onChange={handleChange} required />
        
        {/* Row for Date and Gender */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            name="dob" 
            type="date" 
            onChange={handleChange} 
            required 
            style={{ width: '60%' }}
            title="Date of Birth"
          />
          <select name="gender" onChange={handleChange} required style={{ width: '40%' }}>
            <option value="" disabled selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Country Selector */}
        <select name="country" onChange={handleChange} required>
            <option value="" disabled selected>Select Origin (Country)</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="Russia">Russia</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
        </select>

        <button type="submit">Create ID</button>
      </form>

      <p>Already Registered? <Link to="/login">Login Here</Link></p>
    </div>
  );
};

export default Signup;