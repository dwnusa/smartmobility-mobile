import React, {useState} from 'react';
import * as cards from "media";
import styles from './map.module.scss';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

function Map3({ishm3Scroll}) {
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 37.589038340304555,
    lng: 127.05935059022022,
  });
  const NaverMapAPI = () => {
    return (
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "100%", // 네이버지도 세로 길이
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
    <div className={styles["m-map"]}>
      <div className={styles["m-map-naver"]}>
        <RenderAfterNavermapsLoaded
          ncpClientId={"mabgbbknk3"}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapAPI />
        </RenderAfterNavermapsLoaded>
      </div>
      <div className={styles["m-map-text"]}>
        <div>
          <div>02496 서울특별시 동대문구</div>
          <div>망우로 12길 1, 7층</div>
        </div>
        <br/>
        <div>smartmobilitylab@gmail.com</div>
        <div>02-6490-5316</div>
        <div>050-7534-5819</div>
      </div>
    </div>
  );
}

export default Map3;