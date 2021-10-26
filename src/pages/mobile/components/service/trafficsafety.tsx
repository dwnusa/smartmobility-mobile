import React from 'react';
import * as cards from "media";
import styles from './trafficsafety.module.scss';

function Trafficsafety1({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
      <div className={styles["hm3-box2"]} >
        <img src={cards.m_service_trafficsafety} />
        <div className={styles["hm3-box2-text"]}>
          <div>
            <img src={cards.m_service_trafficsafety_icon} alt=""/>
            <div>
              <div>서울시 교통약자 이동편의 서비스</div>
              <div>교통안전지키미</div>
            </div>
          </div>
          <div>
            <div>서울시립대 교통계획 연구실 X SmartMobility</div>
          </div>
        </div>
      </div>
      <div className={styles["hm3-footer"]}>
        주소 : 02496 서울특별시 동대문구 망우로 12길 1, 7층 TEL :
        <br />
        02-6490-5316 / FAX : 050-7534-5819
        <br />
        <br />
        COPYRIGHT © 2020 SMARTMOBILITY. All Rights Reserved.
      </div>
    </div>
  );
}

export default Trafficsafety1;