import React, { useEffect, useRef, useState } from "react";
import "./RnD.scss";
import { rnd01_1, rnd01_2, rnd02_1, rnd02_2, rnd03_1, rnd03_2 } from "media";
import { Link, NavLink, useLocation } from "react-router-dom";

function RnD({ history }: { history: any }) {
  return (
    <div className="rnd">
      <div className="service-filter"></div>
      <div className="rnd-grid">
        <img
          src={rnd01_1}
          onClick={() => history.push("/rnd/1")}
          onMouseOut={(e) => (e.currentTarget.src = rnd01_1)}
          onMouseOver={(e) => (e.currentTarget.src = rnd01_2)}
        />
        <img
          src={rnd02_1}
          onClick={() => history.push("/rnd/2")}
          onMouseOut={(e) => (e.currentTarget.src = rnd02_1)}
          onMouseOver={(e) => (e.currentTarget.src = rnd02_2)}
        />
        <img
          src={rnd03_1}
          onClick={() => history.push("/rnd/3")}
          onMouseOut={(e) => (e.currentTarget.src = rnd03_1)}
          onMouseOver={(e) => (e.currentTarget.src = rnd03_2)}
        />
      </div>
    </div>
  );
}

export default RnD;
