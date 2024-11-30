import React from "react";
import Button from "./components/Button";
import "./styles/Button.css"; // Importa los estilos del botón

const App = () => {
  const handlePrimaryClick = () => {
    alert("Botón primario presionado");
  };

  const handleSecondaryClick = () => {
    alert("Botón secundario presionado");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
      <h1>Componentes de Botón</h1>
      <Button label="Primario" onClick={handlePrimaryClick} type="primary" />
      <Button
        label="Secundario"
        onClick={handleSecondaryClick}
        type="secondary"
      />
      <Button
        label="Advertencia"
        onClick={() => alert("Advertencia")}
        type="warning"
      />
      <Button label="Éxito" onClick={() => alert("Éxito")} type="success" />
    </div>
  );
};

export default AppButton;
