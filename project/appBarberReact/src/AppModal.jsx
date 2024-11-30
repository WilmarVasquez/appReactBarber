import React, { useState } from "react";
import Modal from "./components/Modal";
import "./styles/Modal.css";

const AppModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    alert("Acción confirmada");
    setIsModalOpen(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem", color: "#fff" }}>
      <h1>Componente Modal</h1>
      <button
        style={{
          padding: "0.8rem 1.2rem",
          backgroundColor: "#FF982C",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
        onClick={handleOpenModal}
      >
        Abrir Modal
      </button>

      {isModalOpen && (
        <Modal
          title="Confirmar Acción"
          content="¿Está seguro de que desea continuar?"
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default AppModal;
