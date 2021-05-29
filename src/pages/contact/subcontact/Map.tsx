import React, { useEffect, useRef, useState } from "react";
import "./Map.scss";

function Map({ divEl }: { divEl: any }) {
  // const divEl = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const offsetHeight = divEl.current.offsetHeight;
  //   const offsetTop = divEl.current.offsetTop;
  //   console.log("News", offsetTop, offsetTop + offsetHeight / 2);
  // }, []);
  return (
    <div className="map" ref={divEl}>
      <h2>Map</h2>
    </div>
  );
}

export default Map;
