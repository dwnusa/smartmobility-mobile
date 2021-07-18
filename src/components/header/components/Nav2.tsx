import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Nav2.scss";

type BackgroundVideoProps = {
  isBgShowing: boolean;
};
function Nav2({ isBgShowing }: BackgroundVideoProps) {
  const location = useLocation().pathname;
  return (
    <div className={`navGrid ${!isBgShowing && "turnColorBlack"}`}>
      <div className="about1">
        <NavLink exact to="/about/1">
          인사말
        </NavLink>
      </div>
      <div className="about2">
        <NavLink exact to="/about/2">
          비전
        </NavLink>
      </div>
      <div className="about3">
        <NavLink exact to="/about/3">
          연혁
        </NavLink>
      </div>
      <div className="about4">
        <NavLink exact to="/about/3">
          조직도
        </NavLink>
      </div>
    </div>
  );
}

Nav2.defaultProps = {
  isBgShowing: false,
};
export default Nav2;
