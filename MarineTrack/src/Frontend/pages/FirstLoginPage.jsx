import React from 'react';
import './FirstLoginPage.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import logo from './logo.png'; // Import your logo image

const FirstLoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    // Navigate to the HomePage when the login button is clicked
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img className="logo" src={logo} alt="Logo" />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="right-section">
        {/* The right section can remain empty or contain other content */}
      </div>
    </div>
  );
};

export default FirstLoginPage;
