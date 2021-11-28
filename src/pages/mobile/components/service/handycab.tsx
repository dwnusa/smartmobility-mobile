import React from 'react';
import * as cards from "media";
import styles from './handycab.module.scss';

function Handycab1({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
      <div className={styles["hm3-box2"]} >
        <img src={cards.m_service_handycab} />
        <div className={styles["hm3-box2-text1"]}>
          <div>HANDYCAB</div>
          <div>교통약자 대중교통 이동편의 서비스</div>
          <div>
            <div>IOS</div>
            <div>Android</div>
          </div>
        </div>
        <div className={styles["hm3-box2-text2"]}>
          <div>간단하고 편안하게</div>
          <div>맞춤형 경로 제공</div>
          <div>장애인 편의시설 접근과 환승이 가장 편리한 경로를 탐색하여 나에게 맞는 경로를 선택할 수 있습니다.</div>
        </div>
        <div className={styles["hm3-box2-text3"]}>
          <div>효율적이고 빠르게</div>
          <div>승강기형 출구 알림</div>
          <div>
            <div>에스컬레이터와 엘리베이터가 있는</div>
            <div>출구를 통해 편리한 이동 경로를</div>
            <div>확인 할 수 있습니다.</div>
          </div>
        </div>
        <div className={styles["hm3-box2-text4"]}>
          <div>이동에 필요한 전화번호 제공</div>
          <div>장애인 콜택시&대중교통 번호</div>
          <div>
            <div>장애인콜택시와 역무원 호출 등의</div>
            <div>대중교통 전화 시스템을 함께 제공</div>
            <div>하여 이동과정을 편리하게 합니다.</div>
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

export default Handycab1;