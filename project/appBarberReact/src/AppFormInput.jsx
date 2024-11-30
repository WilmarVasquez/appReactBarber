import React, { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";
import "../src/styles/FormInput.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
      }}
    >
      <h1>
        <p>LLEVA CUENTAS</p>
        <p>(Formulario de Prueba)</p>
      </h1>
      <FormInput
        label="Nombre"
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(value) => setName(value)} // Actualiza el estado de "name"
      />
      <FormInput
        label="Correo Electrónico"
        type="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={(value) => setEmail(value)} // Actualiza el estado de "email"
      />
      <p>Nombre ingresado: {name}</p>
      <p>Correo ingresado: {email}</p>
    </div>
  );
};

export default AppFormInput;
