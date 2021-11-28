import React from 'react';
import * as cards from "media";
import styles from './greeting.module.scss';
import text1 from "media/MOBILE/smmobile/about/about-greeting-text.svg";

function Greeting0({ishm3Scroll}) {
  return (
    <div className={styles["hm3-body-wrapper"]}>
      <div className={styles["hm3-box1"]}>
        ㈜스마트모빌러티에 오신 것을
        <br />
        진심으로 환영합니다.
      </div>
      <div className={styles["hm3-box2"]}>
        <img src={cards.aboutGreeting1} />
      </div>
      <div className={styles["hm3-box3"]}>
        <img src={text1} style={{width:"100%"}}/>
        {/* ‘이동’에 대한 사람들의 요구는 지속적으로 커지고 있습니다. 최근
        에는 다양한 디지털기술을 기반으로 하는 4차 산업혁명을 통해
        도시 및 교통에 새로운 패러다임을 가져오고 있으며, 새로운
        모빌리티가 활성화되고 있습니다.
        <br />
        <br />
        ㈜스마트모빌러티는 다양한 도시 ∙ 교통문제를 해결하고 있습니다.
        <br />
        다양한 국정과제 및 중 ∙ 장기 / 기초연구, 데이터 기반의 정책
        연구 등을 수행하고 있으며, 이를 통해 ‘사람 중심’의 다양한 통합
        모빌리티 서비스를 제공합니다.
        <br />
        <br />
        계속해서 변화하고 진보하는 신기술을 선도하고, 끊임없는 도전을
        통해 도시 및 교통분야의 새로운 문을 열기 위해 노력하겠습니다.
        <br />
        <br />
        앞으로 저희 스마트모빌러티의 다양한 활동에 많은 관심과 성원을
        부탁드립니다. */}
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

export default Greeting0;