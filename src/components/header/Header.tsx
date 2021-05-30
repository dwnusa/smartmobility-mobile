import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { Nav } from "./";
import logoBlack from "media/logo-black.png";
import logoWhite from "media/logo-white.png";

function Header() {
  const location = useLocation().pathname;
  // console.log(location);
  return (
    <div className={`header ${location == "/" && "main"}`}>
      <Link to="/">
        <img src={location == "/" ? logoWhite : logoBlack} />
      </Link>
      <ul>
        <li>
          <NavLink className={`${location == "/" && "main"}`} exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${location == "/" && "main"}`}
            exact
            to="/service"
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink className={`${location == "/" && "main"}`} exact to="/study">
            Study
          </NavLink>
        </li>
        <div className={`modal ${location == "/" && "main"}`}>
          <Nav />
        </div>
      </ul>
    </div>
  );
}

export default Header;
