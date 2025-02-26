import React from 'react';

function RequestPanel() {
  return (
    <div className="panel-container">
      <div className="panel-header">
        <div className="download-icon">
          <div className="icon-placeholder">⬇️</div>
        </div>
        <h1>Request panel/Users Inputs</h1>
        <div className="user-icon">
          <div className="icon-placeholder">👤</div>
        </div>
      </div>
      
      <div className="panel-content">
        <div className="input-row">
          <div className="input-label">Name</div>
          <div className="input-separator">:</div>
          <div className="input-value">Ben 10</div>
        </div>
        
        <div className="input-row">
          <div className="input-label">ID Number</div>
          <div className="input-separator">:</div>
          <div className="input-value">123456789V</div>
        </div>
        
        <div className="input-row">
          <div className="input-label">Phone Number</div>
          <div className="input-separator">:</div>
          <div className="input-value">+94 0114555587</div>
        </div>
        
        <div className="input-row">
          <div className="input-label">Email</div>
          <div className="input-separator">:</div>
          <div className="input-value">BenTenison@gmail.com</div>
        </div>
        
        <div className="input-row">
          <div className="input-label">Address</div>
          <div className="input-separator">:</div>
          <div className="input-value">America</div>
        </div>
        
        <div className="input-row">
          <div className="input-label">Requirements</div>
          <div className="input-separator">:</div>
          <div className="input-value">
            <div className="pdf-icon">📄</div>
          </div>
        </div>
        
        <div className="buttons-container">
          <button className="accept-button">Accept</button>
          <button className="deny-button">Denied</button>
        </div>
      </div>
    </div>
  );
}

export default RequestPanel;