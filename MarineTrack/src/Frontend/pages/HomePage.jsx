import React, { useState } from 'react';
import './HomePage.css';
import logo from './logo.png'; // Update with your actual logo file path

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      {/* Left Section with Logo */}
      <div className="left-section">
        <img src={logo} alt="NautiReg Logo" className="logo" />
      </div>

      {/* Right Section with Login Box */}
      <div className="right-section">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            <p className="forgot-password">Forgot Password?</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
