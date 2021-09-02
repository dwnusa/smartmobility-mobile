import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Nav2.scss";

type BackgroundVideoProps = {
  isBgShowing: boolean;
};
function Nav2({ isBgShowing }: BackgroundVideoProps) {
  const location = useLocation().pathname;
  return (
    <div className={`navGrid2 ${!isBgShowing && "turnColorBlack"}`}>
      
    </div>
  );
}

Nav2.defaultProps = {
  isBgShowing: false,
};
export default Nav2;
