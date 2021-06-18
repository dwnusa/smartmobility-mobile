import React, { useEffect, useRef, useState } from "react";
import "./Map.scss";
import * as cards from "media";

function Map() {
  return (
    <div className="map">
      {/* <div>img</div> */}
      <div className="map-naver" style={{backgroundImage:`url(${cards.naverMap})`}}></div>
      <div className="map-text">
        <div className="map-grid">
          <span className="address first">02496 서울특별시 동대문구</span>
          <span className="address second">망우로 12길 1, 7층</span>
          <span></span>
          <span></span>
          <span className="info title">메일 </span>
          <span className="info content">email@gmail.com</span>
          <span className="info title">전화</span>
          <span className="info content">02-6490-5316</span>
          <span className="info title">팩스</span>
          <span className="info content">050-7534-5819</span>
        </div>
      </div>
    </div>
  );
}

export default Map;
