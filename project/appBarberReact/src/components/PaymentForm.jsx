import React, { useState } from "react";
import "../styles/PaymentForm.css";

const PaymentForm = ({ paymentData = {}, onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState(paymentData.amount || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ amount, paymentMethod });
    }
  };

  return (
    <div className="payment-form-container">
      <h2>Realizar Pago</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Total a Pagar</label>
          <input type="number" id="amount" value={amount} readOnly />
        </div>
        <div className="form-group">
          <label>Método de Pago</label>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Tarjeta de Crédito"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Tarjeta de Crédito
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Transferencia"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Transferencia
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Efectivo"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Efectivo
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={!paymentMethod}
        >
          Pagar
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
