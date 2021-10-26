import React from 'react';
import * as cards from "media";
import styles from './handycab.module.scss';

function Handycab1({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
      <div className={styles["hm3-box2"]} >
        <img src={cards.m_service_handycab} />
        <div className={styles["hm3-box2-text"]}>
          <div>HANDYCAB</div>
          <div>교통약자 대중교통 이동편의 서비스</div>
          <div>
            <div>IOS</div>
            <div>Android</div>
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

export default Handycab1;