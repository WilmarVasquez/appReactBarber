import React from "react";
import "../styles/FormInput.css"; // Importar los estilos del componente

const FormInput = ({
  label,
  type = "text",
  value,
  placeholder = "",
  onChange,
}) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} // Pasa el valor al controlador
      />
    </div>
  );
};

export default FormInput;
