import React from "react";
import "../styles/Card.css";

const Card = ({
  title,
  content,
  icon,
  footer,
  backgroundColor = "#493530",
  textColor = "#fff",
}) => {
  return (
    <div className="card" style={{ backgroundColor, color: textColor }}>
      <div className="card-icon">{icon && <span>{icon}</span>}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
