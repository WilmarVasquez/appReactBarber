import React from "react";
import LoginForm from "./components/LoginForm";
import "./styles/LoginForm.css";

const AppLogin = () => {
  const handleLogin = (credentials) => {
    alert(`Email: ${credentials.email}\nContraseña: ${credentials.password}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#222831",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default AppLogin;
