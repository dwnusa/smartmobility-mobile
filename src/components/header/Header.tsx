import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { Nav } from "./";
import logoBlack from "media/logo-black.png";
import logoWhite from "media/logo-white.png";

type BackgroundVideoProps = {
  isBgShowing: boolean;
};
function Header({ isBgShowing }: BackgroundVideoProps) {
  const location = useLocation().pathname;
  // console.log(location);
  return (
    <div className={`header ${location == "/" && "main"}`}>
      <Link to="/">
        <img className={`${!isBgShowing && "turnBlue"}`} src={logoWhite} />
        <img className={`${!isBgShowing && "turnBlue"}`} src={logoBlack} />
      </Link>
      <ul>
        <li>
          <NavLink
            className={`${location == "/" && "main"} ${!isBgShowing && "turnColorBlack"
              }`}
            exact
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${location == "/" && "main"} ${!isBgShowing && "turnColorBlack"
              }`}
            exact
            to="/service"
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${location == "/" && "main"} ${!isBgShowing && "turnColorBlack"
              }`}
            exact
            to="/study"
          >
            Study
          </NavLink>
        </li>
        <div
          className={`modal ${location == "/" && "main"} ${!isBgShowing && "turnBgWhite"
            }`}
        >
          <Nav isBgShowing={isBgShowing} />
        </div>
      </ul>
    </div>
  );
}

Header.defaultProps = {
  isBgShowing: false,
};
export default Header;
