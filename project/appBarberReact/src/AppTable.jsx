import React from "react";
import Table from "./components/Table";
import "./styles/Table.css";

const AppTable = () => {
  const headers = ["Nombre", "Correo", "Rol"];
  const data = [
    { Nombre: "Juan Pérez", Correo: "juan@mail.com", Rol: "Administrador" },
    { Nombre: "Ana Gómez", Correo: "ana@mail.com", Rol: "Barbero" },
    { Nombre: "Luis López", Correo: "luis@mail.com", Rol: "Cliente" },
  ];

  const handleRowClick = (row) => {
    alert(`Fila seleccionada: ${row.Nombre}`);
  };

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h1>Componente Table</h1>
      <Table headers={headers} data={data} onRowClick={handleRowClick} />
    </div>
  );
};

export default AppTable;
