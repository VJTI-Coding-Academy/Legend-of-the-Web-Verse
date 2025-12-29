import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Background from './components/Background';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  // Check if user exists in storage
  const user = localStorage.getItem("user");

  return (
    <Router>
      {/* Background Component sits outside Routes so it persists */}
      <Background />
      
      <Routes>
        <Route 
          path="/" 
          element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" /> : <Login />} 
        />
        
        <Route 
          path="/signup" 
          element={user ? <Navigate to="/dashboard" /> : <Signup />} 
        />
        
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />
      </Routes>
    </Router>
  );
}

export default App;