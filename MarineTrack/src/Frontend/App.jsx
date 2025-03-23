import React from 'react';
import './App.css'; // Import custom CSS for styling
import DashboardCard from './DashboardCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-container">
        <DashboardCard title="Boat Register" color="green" />
        <DashboardCard title="Display Boat Owners Details" color="red" />
        <DashboardCard title="Handle Fisherman ID" color="blue" />
        <DashboardCard title="Remove Register Details" color="purple" />
        <DashboardCard title="Owner Register" color="yellow" />
        <DashboardCard title="Rejected Boat Details" color="pink" />
        <DashboardCard title="Display Fisherman Details" color="cyan" />
      </div>
    </div>
  );
}

export default App;
