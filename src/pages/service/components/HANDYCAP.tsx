import React, { useEffect, useRef, useState } from "react";
import "./HANDYCAP.scss";

function HANDYCAP({ divEl }: { divEl: any }) {
  return (
    <div className="handycap" ref={divEl}>
      <h2>HANDYCAP</h2>
    </div>
  );
}

export default HANDYCAP;
