import React, { useEffect, useRef, useState } from "react";
import "./Map.scss";

function Map() {
  return (
    <div className="map">
      <div>img</div>
      <div>
        <div className="map-grid">
          <span>02496 서울특별시 동대문구</span>
          <span>망우로 12길 1, 7층</span>
          <span>메일 </span>
          <span>email@gmail.com</span>
          <span>전화</span>
          <span>02-6490-5316</span>
        </div>
      </div>
    </div>
  );
}

export default Map;
