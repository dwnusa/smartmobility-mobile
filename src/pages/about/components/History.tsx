import React, { useEffect, useRef, useState } from "react";
import "./History.scss";

function History({ divEl }: { divEl: any }) {
  return (
    <div className="history" ref={divEl}>
      <h2>History</h2>
    </div>
  );
}

export default History;
