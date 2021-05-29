import React from "react";
import "./About.scss";
import { Link, Route } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="menu">
        <ul>
          <li>인사말</li>
          <li>비전</li>
          <li>연혁</li>
          <li>조직도</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
