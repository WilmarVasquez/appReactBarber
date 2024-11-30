import React from "react";
import MetricsBarber from "./components/MetricsBarber";
import "./styles/MetricsBarber.css";

const AppMetricB = () => {
  const metricsData = [
    {
      title: "Turnos Atendidos",
      value: "150",
      description: "Total de turnos atendidos este mes",
    },
    {
      title: "Servicios Realizados",
      value: "200",
      description: "Total de servicios realizados este mes",
    },
    {
      title: "Calificación Promedio",
      value: "4.8/5",
      description: "Basado en las reseñas de clientes",
    },
    {
      title: "Clientes Recurrentes",
      value: "85%",
      description: "Clientes que han vuelto este mes",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#222831",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <MetricsBarber metricsData={metricsData} />
    </div>
  );
};

export default AppMetricB;
