import React from "react";
import Card from "./Card";
import "../styles/Dashboard.css";

const Dashboard = ({ role, metrics = [], actions = [] }) => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard - {role}</h1>
      <div className="dashboard-metrics">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            title={metric.title}
            content={metric.value}
            icon={metric.icon}
            backgroundColor={metric.color}
            textColor="#fff"
          />
        ))}
      </div>
      <div className="dashboard-actions">
        <h2>Acciones Rápidas</h2>
        <div className="actions-container">
          {actions.map((action, index) => (
            <button
              key={index}
              className="action-button"
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
