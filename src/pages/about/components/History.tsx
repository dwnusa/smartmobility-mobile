import React, { useEffect, useRef, useState } from "react";
import "./History.scss";
import aboutHsitory1 from "media/about-history-1.png";

function History() {
  return (
    <div className="history">
      <div className="contents">
        <img src={aboutHsitory1} width="60%" />
      </div>
    </div>
  );
}

export default History;
