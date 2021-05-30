import React, { useEffect, useRef, useState } from "react";
import "./Greeting.scss";

function Greeting({ divEl }: { divEl: any }) {
  return (
    <div className="greeting" ref={divEl}>
      <h2>Greeting</h2>
    </div>
  );
}

export default Greeting;
