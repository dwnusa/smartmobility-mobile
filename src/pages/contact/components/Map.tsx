import React, { useEffect, useRef, useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import "./Map.scss";
import * as cards from "media";

function Map() {
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 37.589038340304555,
    lng: 127.05935059022022,
  });

  const NaverMapAPI = () => {
    return (
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          width: "60%", // 네이버지도 가로 길이
          height: "80%", // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: lat, lng: lng }} // 지도 초기 위치
        defaultZoom={17} // 지도 초기 확대 배율
      >
        <Marker
          position={{ lat: lat, lng: lng }}
          animation={2}
          onClick={() => {
            alert("여기는 (주)스마트모빌러티입니다.");
          }}
        />
      </NaverMap>
    );
  };

  return (
    <div className="map">
      <div className="map-naver">
        <RenderAfterNavermapsLoaded
          ncpClientId={"mabgbbknk3"}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapAPI />
        </RenderAfterNavermapsLoaded>
      </div>
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
