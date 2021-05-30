import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const location = useLocation().pathname;
  return (
    <div className="nav">
      <div>
        <div>
          <NavLink exact to="/">
            소개
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/">
            비전
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/">
            연혁
          </NavLink>
        </div>
      </div>
      <div>
        <div>
          <NavLink exact to="/">
            HANDYCAP
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/">
            Bogota
          </NavLink>
        </div>
      </div>
      <div>
        <div>
          <NavLink exact to="/">
            R&D
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/">
            용역
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/">
            저작권/특허
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
