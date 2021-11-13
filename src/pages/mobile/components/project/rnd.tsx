import React from 'react';
import * as cards from "media";
import styles from './rnd.module.scss';
import {subrnd1, subrnd2, subrnd3} from './subrnd';

function RND2({ishm3Scroll, setPos, pos}) {
  return (
    <>
      <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
        <div className={styles["hm3-box2"]} >
          <img onClick={()=>setPos({...pos, stack:1})} src={cards.m_rnd_card1_1} />
        </div>
        <div className={styles["hm3-box2"]} >
          <img onClick={()=>setPos({...pos, stack:3})} src={cards.m_rnd_card2_1} />
        </div>
        <div className={styles["hm3-box2"]} >
          <img onClick={()=>setPos({...pos, stack:2})} src={cards.m_rnd_card3_1} />
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
    </>
  );
}

export default RND2;