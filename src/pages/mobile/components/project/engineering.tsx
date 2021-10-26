import React from 'react';
import * as cards from "media";
import styles from './engineering.module.scss';
const engineering_cards = [
  cards.m_engineering_card01_1,
  cards.m_engineering_card02_1,
  cards.m_engineering_card03_1,
  cards.m_engineering_card04_1,
  cards.m_engineering_card05_1,
  cards.m_engineering_card06_1,
  cards.m_engineering_card07_1,
  cards.m_engineering_card08_1,
  cards.m_engineering_card09_1,
  cards.m_engineering_card10_1,
  cards.m_engineering_card11_1,
  cards.m_engineering_card12_1,
  cards.m_engineering_card13_1,
  cards.m_engineering_card14_1,
  cards.m_engineering_card15_1,
  cards.m_engineering_card16_1,
  cards.m_engineering_card17_1,
  cards.m_engineering_card18_1,
  cards.m_engineering_card19_1,
  cards.m_engineering_card20_1,
  cards.m_engineering_card21_1,
  cards.m_engineering_card22_1,
  cards.m_engineering_card23_1,
  cards.m_engineering_card24_1,
  cards.m_engineering_card25_1,
];
function Engineering2({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
      {engineering_cards.map(v=>
        <div className={styles["hm3-box2"]} >
          <img src={v} />
        </div>)}
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

export default Engineering2;