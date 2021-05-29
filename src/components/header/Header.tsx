import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logoBlack from "img/logo-black.png";
import logoWhite from "img/logo-white.png";

function Header() {
  const activeStyle = {
    color: "red",
    // fontSize: "2rem",
  };
  return (
    <div className="header">
      <img src={logoBlack} />
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/service" activeStyle={activeStyle}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/study" activeStyle={activeStyle}>
            Study
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={activeStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
