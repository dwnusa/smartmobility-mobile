import React from 'react';
import * as cards from "media";
import styles from './trafficsafety.module.scss';

function Trafficsafety1({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
      <div className={styles["hm3-box2"]} >
        <img src={cards.m_service_trafficsafety} />
        <div className={styles["hm3-box2-text1"]}>
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
        <div className={styles["hm3-box2-text2"]}>
          <div>APP 사용해보러 가기 <img onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.uos.trans533')} src={cards.blue_right_arrow} alt=""/></div>
          <div>
            <div>교통안전지키미는 서울지역 COVID-19 종합 상황 분석을</div>
            <div>기반으로, 두 지점간의 이동경로를 최적화하는 알고리즘을</div>
            <div>보완·개선하여 교통약자들의 안전한 이동을 위한 효율적인</div>
            <div>맞춤경로를 제공합니다. </div>
          </div>
        </div>
      </div>
      <div className={styles["hm3-footer"]}>
        주소 : 02496 서울특별시 동대문구 망우로 12길 1, 7층 
        <br />
        TEL : 02-6490-5316 / FAX : 050-7534-5819
        <br />
        <br />
        COPYRIGHT © 2020 SMARTMOBILITY. All Rights Reserved.
      </div>
    </div>
  );
}

export default Trafficsafety1;