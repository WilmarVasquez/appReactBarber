import React from "react";
import "../styles/NavBar.css";

const NavBar = ({ menuItems = [], onMenuClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <button className="navbar-link" onClick={() => onMenuClick(item)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
