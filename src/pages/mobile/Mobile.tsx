import React, {useRef, useEffect, useState} from 'react';
import logoWhite from "media/logo-white.png";
import * as cards from "media";
import styles from './Mobile.module.scss';

function Mobile({isPc}:{isPc:boolean}) {
  const [ishm2Scroll, setIshm2Scroll] = useState(false);
  const [ishm3Scroll, setIshm3Scroll] = useState(false);
  const hm1El = useRef<HTMLDivElement | null>(null);
  const hm2El = useRef<HTMLDivElement | null>(null);
  const hm3El = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={hm1El} 
      className={styles["hm1"]} 
      onScroll={()=>{
        const coverRate = hm1El.current.scrollTop / hm1El.current.clientHeight;
        if (coverRate > 0.5) {
          setIshm2Scroll(true)
        } else {
          setIshm2Scroll(false)
        }
      }}>
      <img src={logoWhite} />
      <span>
        We think <br />
        for the <br />
        better world!
      </span>
      <div ref={hm2El} className={styles["hm2"]}>
        <div className={styles["hm2-handle"]}></div>
        <div ref={hm3El} 
          onScroll={()=> {
            const fullHeight = hm3El.current.scrollHeight-hm3El.current.clientHeight;
            const coverRate = hm3El.current.scrollTop / fullHeight;
            if (coverRate > 0.9) {
              setIshm3Scroll(true)
            } else {
              setIshm3Scroll(false)
            }
          }} 
          className={styles["hm2-body"]}  
          style={{overflow: ishm2Scroll ? "scroll":"hidden"}}
        >
          <div className={styles["hm3-cards-container"]}>
            {/* <img src={cards.home01active} /> */}
            <img src={cards.home01inactive} />
            {/* <img src={cards.home02active} /> */}
            <img src={cards.home02inactive} />
            {/* <img src={cards.home03active} /> */}
            <img src={cards.home03inactive} />
          </div>
          <div className={styles["hm3-main-container"]}>
            <div className={styles["hm3-menu-items"]}>
              <div>About</div>
              <div>Service</div>
              <div>Project</div>
              <div>Contact</div>
            </div>
            <div className={styles["hm3-menu-subitems"]}>
              <div>인사말</div>
              <div>비전</div>
              <div>연혁</div>
              <div>조직도</div>
            </div>
            <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
              <div className={styles["hm3-box1"]}>
                ㈜스마트모빌러티에 오신 것을
                <br />
                진심으로 환영합니다.
              </div>
              <div className={styles["hm3-box2"]}>
                <img src={cards.aboutGreeting1} />
              </div>
              <div className={styles["hm3-box3"]}>
                ‘이동’에 대한 사람들의 요구는 지속적으로 커지고 있습니다. 최근
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
                부탁드립니다.
              </div>
              <div className={styles["hm3-box4"]}>㈜스마트모빌러티 CEO / 공학박사</div>
              <div className={styles["hm3-box5"]}>김 승 현</div>
              <div className={styles["hm3-footer"]}>
                주소 : 02496 서울특별시 동대문구 망우로 12길 1, 7층 TEL :
                <br />
                02-6490-5316 / FAX : 050-7534-5819
                <br />
                <br />
                COPYRIGHT © 2020 SMARTMOBILITY. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
