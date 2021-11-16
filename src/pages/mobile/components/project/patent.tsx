import React from 'react';
import * as cards from "media";
import styles from './patent.module.scss';
import text1 from 'media/MOBILE/smmobile/project/patent/patent1-text.svg';
import text2 from 'media/MOBILE/smmobile/project/patent/patent2-text.svg';
import text3 from 'media/MOBILE/smmobile/project/patent/patent3-text.svg';
import text4 from 'media/MOBILE/smmobile/project/patent/patent4-text.svg';
import text5 from 'media/MOBILE/smmobile/project/patent/patent5-text.svg';

function Patent2({ ishm3Scroll, setPos, pos }) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{ overflow: ishm3Scroll ? "scroll" : "hidden" }}>
      <div className={styles["hm3-box1"]} >
        <div className={styles["hm3-box1-content1"]} >
          <img src={cards.m_patent1} style={{ display: pos.stack === 0 ? "block" : "none" }} />
          <img src={cards.m_patent2} style={{ display: pos.stack === 1 ? "block" : "none" }} />
          <img src={cards.m_patent3} style={{ display: pos.stack === 2 ? "block" : "none" }} />
          <img src={cards.m_patent4} style={{ display: pos.stack === 3 ? "block" : "none" }} />
          <img src={cards.m_patent5} style={{ display: pos.stack === 4 ? "block" : "none" }} />
          <div>
            <div onClick={() => setPos({ ...pos, stack: 0 })}></div>
            <div onClick={() => setPos({ ...pos, stack: 1 })}></div>
            <div onClick={() => setPos({ ...pos, stack: 2 })}></div>
            <div onClick={() => setPos({ ...pos, stack: 3 })}></div>
            <div onClick={() => setPos({ ...pos, stack: 4 })}></div>
          </div>
        </div>
        <div className={styles["hm3-box1-content2"]} >
          <img src={text1} style={{ display: pos.stack === 0 ? "block" : "none" }} />
          <img src={text2} style={{ display: pos.stack === 1 ? "block" : "none" }} />
          <img src={text3} style={{ display: pos.stack === 2 ? "block" : "none" }} />
          <img src={text4} style={{ display: pos.stack === 3 ? "block" : "none" }} />
          <img src={text5} style={{ display: pos.stack === 4 ? "block" : "none" }} />
        </div>
      </div>
      {/* <div className={styles["hm3-footer"]}>
        주소 : 02496 서울특별시 동대문구 망우로 12길 1, 7층 TEL :
        <br />
        02-6490-5316 / FAX : 050-7534-5819
        <br />
        <br />
        COPYRIGHT © 2020 SMARTMOBILITY. All Rights Reserved.
      </div> */}
    </div>
  );
}

export default Patent2;