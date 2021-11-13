import React from 'react';
import * as cards from "media";
import styles from './vision.module.scss';

function Vision0({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]}>
      <div className={styles["hm3-box1"]} style={{ color:"#0032A0", display:"flex", justifyContent:"center"}}>
        VISION
      </div>
      <div className={styles["hm3-box2"]}>
        체계적인 빅데이터 기반의 조사∙분석과 4차산업의 주요 기술을
        활용한 다양한 연구 및 학술활동 수행으로 통합교통서비스를
        제공하고, 근본적인 도시 ∙ 교통문제 해소에 기여하겠습니다.
      </div>
      <div className={styles["hm3-box3"]}>
        <img src={cards.m_about_vision} />
      </div>
      {/* <div className={styles["hm3-box4"]}>㈜스마트모빌러티 CEO / 공학박사</div>
      <div className={styles["hm3-box5"]}>김 승 현</div> */}
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

export default Vision0;