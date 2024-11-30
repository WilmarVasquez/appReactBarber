import React from "react";
import Profile from "./components/Profile";
import "./styles/Profile.css";

const AppProfile = () => {
  const userData = {
    name: "Juan Pérez",
    email: "juan.perez@mail.com",
    phone: "123456789",
  };

  const handleSave = (updatedData) => {
    alert(
      `Datos guardados:\nNombre: ${updatedData.name}\nCorreo: ${updatedData.email}\nTeléfono: ${updatedData.phone}`
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#222831",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Profile userData={userData} onSave={handleSave} />
    </div>
  );
};

export default AppProfile;
