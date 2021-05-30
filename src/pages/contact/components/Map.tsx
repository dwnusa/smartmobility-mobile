import React, { useEffect, useRef, useState } from "react";
import "./Map.scss";

function Map({ divEl }: { divEl: any }) {
  return (
    <div className="map" ref={divEl}>
      <h2>Map</h2>
    </div>
  );
}

export default Map;
