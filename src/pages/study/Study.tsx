import React from "react";
import "./Study.scss";
import { Link, Route } from "react-router-dom";

function Study() {
  return (
    <div className="study">
      <div className="menu">
        <ul>
          <li>R&D</li>
          <li>용역</li>
          <li>특허/저작권</li>
        </ul>
      </div>
    </div>
  );
}

export default Study;
