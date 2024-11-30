import React from "react";
import "../styles/Modal.css";

const Modal = ({ title, content, onClose, onSubmit }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="modal-content">{content}</div>
        <div className="modal-footer">
          {onSubmit && (
            <button className="modal-submit" onClick={onSubmit}>
              Confirmar
            </button>
          )}
          <button className="modal-cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
