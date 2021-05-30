import React, { useEffect, useRef, useState } from "react";
import "./Bogota.scss";

function Bogota({ divEl }: { divEl: any }) {
  return (
    <div className="bogota" ref={divEl}>
      <h2>Bogota</h2>
    </div>
  );
}

export default Bogota;
