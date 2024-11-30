import React from "react";
import "../styles/ServiceList.css";

const ServiceList = ({ services = [], onEdit, onDelete }) => {
  return (
    <div className="service-list">
      <h2>Servicios Disponibles</h2>
      <table className="service-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Servicio</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{service.name}</td>
              <td>${service.price.toFixed(2)}</td>
              <td>
                <button className="edit-button" onClick={() => onEdit(service)}>
                  Editar
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(service)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
