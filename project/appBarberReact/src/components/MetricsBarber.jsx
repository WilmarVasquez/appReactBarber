import React from "react";
import "../styles/MetricsBarber.css";

const MetricsBarber = ({ metricsData = [] }) => {
  return (
    <div className="metrics-container">
      <h2>Métricas de Barberos</h2>
      <div className="metrics-grid">
        {metricsData.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3>{metric.title}</h3>
            <p className="metric-value">{metric.value}</p>
            <p className="metric-description">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsBarber;
