import React, { useEffect, useRef, useState } from "react";
import "./Outsourcing.scss";
import { osrcg01_1, osrcg01_2, osrcg02_1, osrcg02_2, osrcg03_1, osrcg03_2, osrcg04_1, osrcg04_2 } from "media";

function Outsourcing({ divEl }: { divEl: any }) {
  return (
    <div className="outsourcing" ref={divEl}>
      <div className="outsourcing-grid">
        <img src={osrcg01_1}
          onMouseOut={e => (e.currentTarget.src = osrcg01_1)}
          onMouseOver={e => (e.currentTarget.src = osrcg01_2)} />
        <img src={osrcg02_1}
          onMouseOut={e => (e.currentTarget.src = osrcg02_1)}
          onMouseOver={e => (e.currentTarget.src = osrcg02_2)} />
        <img src={osrcg03_1}
          onMouseOut={e => (e.currentTarget.src = osrcg03_1)}
          onMouseOver={e => (e.currentTarget.src = osrcg03_2)} />
        <img src={osrcg04_1}
          onMouseOut={e => (e.currentTarget.src = osrcg04_1)}
          onMouseOver={e => (e.currentTarget.src = osrcg04_2)} />
      </div>
    </div>
  );
}

export default Outsourcing;
