import React from "react";
import Card from "./components/Card";
import "./styles/Card.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Card
        title="Servicios"
        content="10 servicios disponibles"
        icon="💇‍♂️"
        footer="Última actualización: Hoy"
        backgroundColor="#FF982C" /* Naranja */
        textColor="#fff"
      />
      <Card
        title="Barberos"
        content="3 barberos activos"
        icon="✂️"
        footer="Ver detalles"
        backgroundColor="#B49F73" /* Dorado claro */
        textColor="#000"
      />
      <Card
        title="Turnos Agendados"
        content="5 turnos hoy"
        icon="📅"
        footer="Actualizar métricas"
        backgroundColor="#493530" /* Marrón oscuro */
        textColor="#fff"
      />
    </div>
  );
};

export default App;
