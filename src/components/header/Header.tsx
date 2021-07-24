import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { Nav } from "./";
import logoBlack from "media/logo-black.png";
import logoWhite from "media/logo-white.png";

type BackgroundVideoProps = {
  isBgShowing: boolean;
  setBgShowing: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};
function Header({ isBgShowing, setBgShowing }: BackgroundVideoProps) {
  const location = useLocation().pathname;
  return (
    <div
      className={`header ${location == "/" && "main"} ${
        location.split("/")[1] == "rnd" && "subrnd"
      } ${!isBgShowing && "turnBgWhite"}`}
    >
      <Link to="/">
        <img className={`${!isBgShowing && "turnBlue"}`} src={logoWhite} />
        <img
          className={`${!isBgShowing && "turnBlue"}`}
          src={logoBlack}
          onClick={() => setBgShowing(true)}
        />
      </Link>
      <ul>
        <li>
          <NavLink
            className={`${location == "/" && "main"} ${
              !isBgShowing && "turnColorBlack"
            }`}
            exact
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${location == "/" && "main"} ${
              !isBgShowing && "turnColorBlack"
            }`}
            exact
            to="/service"
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${location == "/" && "main"} ${
              !isBgShowing && "turnColorBlack"
            }`}
            exact
            to="/study"
          >
            Project
          </NavLink>
        </li>
        <div className="modal-background"></div>
        <div
          className={`modal ${location == "/" && "main"} ${
            !isBgShowing && "turnBgWhite"
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
  setBgShowing: () => console.warn("setBgShowing not defined"),
};
export default Header;
