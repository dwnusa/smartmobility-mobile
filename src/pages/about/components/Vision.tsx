import React, { useEffect, useRef, useState } from "react";
import "./Vision.scss";

function Vision({ divEl }: { divEl: any }) {
  return (
    <div className="vision" ref={divEl}>
      <h2>Vision</h2>
    </div>
  );
}

export default Vision;
