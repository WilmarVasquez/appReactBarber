import React from "react";
import Dashboard from "./components/Dashboard";
import "./styles/Dashboard.css";

const AppDashboard = () => {
  const role = "Administrador";

  const metrics = [
    {
      title: "Ingresos del Día",
      value: "$500,000",
      icon: "💵",
      color: "#28a745", // Verde
    },
    {
      title: "Turnos Atendidos",
      value: "15",
      icon: "✂️",
      color: "#FF982C", // Naranja
    },
    {
      title: "Servicios Disponibles",
      value: "10",
      icon: "💇‍♂️",
      color: "#B49F73", // Dorado claro
    },
  ];

  const actions = [
    {
      label: "Registrar Servicio",
      onClick: () => alert("Acción: Registrar Servicio"),
    },
    {
      label: "Ver Reportes",
      onClick: () => alert("Acción: Ver Reportes"),
    },
    {
      label: "Actualizar Datos",
      onClick: () => alert("Acción: Actualizar Datos"),
    },
  ];

  return (
    <div style={{ backgroundColor: "#222831", minHeight: "100vh" }}>
      <Dashboard role={role} metrics={metrics} actions={actions} />
    </div>
  );
};

export default AppDashboard;
