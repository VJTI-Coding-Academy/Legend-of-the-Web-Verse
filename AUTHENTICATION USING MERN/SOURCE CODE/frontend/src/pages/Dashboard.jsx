import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  // Retrieve user data from Local Storage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Protect the route: if no user, return nothing (useEffect usually handles redirect)
  if (!user) {
     // A fallback UI or instant redirect
     setTimeout(() => navigate("/login"), 0);
     return null;
  }

  return (
    <div className="glass-card" style={{ width: "500px" }}>
      <h2>DASHBOARD</h2>
      <h3 style={{ color: "white", marginBottom: "20px" }}>
        Welcome, Agent: <span style={{ color: "#00ffff" }}>{user.username}</span>
      </h3>
      
      <div style={{ textAlign: "left", fontSize: "0.9rem", color: "#ccc", margin: "20px 0", lineHeight: "1.8" }}>
        <p><strong>Database ID:</strong> <span style={{fontFamily: 'monospace'}}>{user._id}</span></p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Origin:</strong> {user.country}</p>
        <p><strong>Class:</strong> {user.gender}</p>
        <p><strong>DOB:</strong> {new Date(user.dob).toLocaleDateString()}</p>
        <p style={{color: '#00ff00', marginTop: '10px'}}>System Status: ONLINE</p>
      </div>

      <button 
        onClick={handleLogout}
        style={{ borderColor: "#ff3333", color: "#ff3333", marginTop: "20px" }}
        onMouseOver={(e) => {
            e.currentTarget.style.background = "#ff3333";
            e.currentTarget.style.color = "#fff";
        }}
        onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ff3333";
        }}
      >
        Terminate Session
      </button>
    </div>
  );
};

export default Dashboard;