import React from "react";
import "../styles/TurnoScheduler.css";

const TurnoScheduler = ({ turnos = [], onSelect, onCancel }) => {
  return (
    <div className="scheduler-container">
      <h2>Turnos Disponibles</h2>
      <div className="scheduler-grid">
        {turnos.map((turno, index) => (
          <div
            key={index}
            className={`turno-card ${
              turno.status === "ocupado" ? "ocupado" : "disponible"
            }`}
          >
            <div className="turno-info">
              <p>
                <strong>Hora:</strong> {turno.hora}
              </p>
              <p>
                <strong>Barbero:</strong> {turno.barbero}
              </p>
              <p>
                <strong>Estado:</strong>{" "}
                {turno.status === "ocupado" ? "Ocupado" : "Disponible"}
              </p>
            </div>
            <div className="turno-actions">
              {turno.status === "disponible" ? (
                <button
                  className="select-button"
                  onClick={() => onSelect(turno)}
                >
                  Agendar
                </button>
              ) : (
                <button
                  className="cancel-button"
                  onClick={() => onCancel(turno)}
                >
                  Cancelar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TurnoScheduler;
