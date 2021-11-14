import React from 'react';
import * as cards from "media";
import styles from './engineering.module.scss';
const engineering_cards = [
  [cards.m_engineering_card01_1, cards.m_engineering_card01_2],
  [cards.m_engineering_card02_1, cards.m_engineering_card02_2],
  [cards.m_engineering_card03_1, cards.m_engineering_card03_2],
  [cards.m_engineering_card04_1, cards.m_engineering_card04_2],
  [cards.m_engineering_card05_1, cards.m_engineering_card05_2],
  [cards.m_engineering_card06_1, cards.m_engineering_card06_2],
  [cards.m_engineering_card07_1, cards.m_engineering_card07_2],
  [cards.m_engineering_card08_1, cards.m_engineering_card08_2],
  [cards.m_engineering_card09_1, cards.m_engineering_card09_2],
  [cards.m_engineering_card10_1, cards.m_engineering_card10_2],
  [cards.m_engineering_card11_1, cards.m_engineering_card11_2],
  [cards.m_engineering_card12_1, cards.m_engineering_card12_2],
  [cards.m_engineering_card13_1, cards.m_engineering_card13_2],
  [cards.m_engineering_card14_1, cards.m_engineering_card14_2],
  [cards.m_engineering_card15_1, cards.m_engineering_card15_2],
  [cards.m_engineering_card16_1, cards.m_engineering_card16_2],
  [cards.m_engineering_card17_1, cards.m_engineering_card17_2],
  [cards.m_engineering_card18_1, cards.m_engineering_card18_2],
  [cards.m_engineering_card19_1, cards.m_engineering_card19_2],
  [cards.m_engineering_card20_1, cards.m_engineering_card20_2],
  [cards.m_engineering_card21_1, cards.m_engineering_card21_2],
  [cards.m_engineering_card22_1, cards.m_engineering_card22_2],
  [cards.m_engineering_card23_1, cards.m_engineering_card23_2],
  [cards.m_engineering_card24_1, cards.m_engineering_card24_2],
  [cards.m_engineering_card25_1, cards.m_engineering_card25_2],
  [cards.m_engineering_card26_1, cards.m_engineering_card26_2],
];
function Engineering2({ ishm3Scroll, setPos, pos }) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{ overflow: ishm3Scroll ? "scroll" : "hidden" }}>
      {engineering_cards.map((v, i) =>
        <div className={styles["hm3-box2"]}
          onClick={() => setPos({ ...pos, readyStack: i + 1 })}
        >
          <img src={pos.readyStack === i + 1 ? v[1] : v[0]} />
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