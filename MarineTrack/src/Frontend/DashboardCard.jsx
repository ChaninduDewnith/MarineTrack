import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ title, color }) => {
  return (
    <div className="dashboard-card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
    </div>
  );
};

export default DashboardCard;
