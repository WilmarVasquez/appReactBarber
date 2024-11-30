import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import "./styles/ServiceList.css";

const AppServiceList = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Corte de Cabello", price: 15000 },
    { id: 2, name: "Barba", price: 12000 },
    { id: 3, name: "Corte + Barba", price: 25000 },
  ]);

  const handleEdit = (service) => {
    alert(`Editando servicio: ${service.name}`);
  };

  const handleDelete = (service) => {
    if (
      window.confirm(
        `¿Seguro que deseas eliminar el servicio "${service.name}"?`
      )
    ) {
      setServices((prev) => prev.filter((s) => s.id !== service.id));
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
      <ServiceList
        services={services}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AppServiceList;
