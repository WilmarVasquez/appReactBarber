import React, { useState } from "react";
import TurnoScheduler from "./components/TurnoScheduler";
import "./styles/TurnoScheduler.css";

const AppTurnos = () => {
  const [turnos, setTurnos] = useState([
    { id: 1, hora: "09:00 AM", barbero: "Juan", status: "disponible" },
    { id: 2, hora: "10:00 AM", barbero: "Pedro", status: "ocupado" },
    { id: 3, hora: "11:00 AM", barbero: "Carlos", status: "disponible" },
    { id: 4, hora: "12:00 PM", barbero: "Juan", status: "ocupado" },
  ]);

  const handleSelect = (turno) => {
    alert(`Turno agendado con ${turno.barbero} a las ${turno.hora}`);
    setTurnos((prev) =>
      prev.map((t) => (t.id === turno.id ? { ...t, status: "ocupado" } : t))
    );
  };

  const handleCancel = (turno) => {
    if (
      window.confirm(
        `¿Cancelar el turno con ${turno.barbero} a las ${turno.hora}?`
      )
    ) {
      setTurnos((prev) =>
        prev.map((t) =>
          t.id === turno.id ? { ...t, status: "disponible" } : t
        )
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#222831",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <TurnoScheduler
        turnos={turnos}
        onSelect={handleSelect}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default AppTurnos;
