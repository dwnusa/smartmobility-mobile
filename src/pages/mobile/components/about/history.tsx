import React from 'react';
import * as cards from "media";
import styles from './history.module.scss';

function History0({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]}>
      <div className={styles["hm3-box2"]} style={{margin:"15% 6%"}}>
        <img src={cards.m_about_years01} />
      </div>
      <div className={styles["hm3-box2"]} style={{margin:"15% 6%"}}>
        <img src={cards.m_about_years02} />
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

export default History0;