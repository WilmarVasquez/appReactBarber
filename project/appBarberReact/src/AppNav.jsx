import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./styles/NavBar.css";

const AppNav = () => {
  const [activeView, setActiveView] = useState("Inicio");

  const menuItems = [
    { label: "Inicio" },
    { label: "Administrador" },
    { label: "Cliente" },
    { label: "Barbero" },
    { label: "Servicios" },
  ];

  const handleMenuClick = (menuItem) => {
    setActiveView(menuItem.label);
    console.log(`Navegando a: ${menuItem.label}`);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <NavBar menuItems={menuItems} onMenuClick={handleMenuClick} />
      <div style={{ padding: "2rem" }}>
        <h1>Vista activa: {activeView}</h1>
        <p>Contenido dinámico según la vista seleccionada.</p>
      </div>
    </div>
  );
};

export default AppNav;
