import React, { useEffect, useRef, useState } from "react";
import "./RnD.scss";

function RnD({ divEl }: { divEl: any }) {
  return (
    <div className="rnd" ref={divEl}>
      <h2>RnD</h2>
    </div>
  );
}

export default RnD;
