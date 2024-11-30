import React from "react";
import PaymentForm from "./components/PaymentForm";
import "./styles/PaymentForm.css";

const AppPago = () => {
  const paymentData = {
    amount: 50000, // Total a pagar
  };

  const handlePaymentSubmit = (paymentDetails) => {
    alert(
      `Pago realizado:\nMonto: $${paymentDetails.amount}\nMétodo: ${paymentDetails.paymentMethod}`
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
      <PaymentForm paymentData={paymentData} onSubmit={handlePaymentSubmit} />
    </div>
  );
};

export default AppPago;
