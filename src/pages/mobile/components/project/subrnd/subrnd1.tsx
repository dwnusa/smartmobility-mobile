import React from 'react';
import * as cards from "media";
import styles from './subrnd1.module.scss';

function subrnd1({ishm3Scroll, setPos, pos}) {
  return (
    <div className={styles['subrnd1']}>
      <div>자율주행/일반차량 혼재상태 통행배정 시나리오</div>
      <div>통행배정 및 신호운영 연계를 위한 영향권 설정</div>
      <div>경찰청 자율주행 최적경로 제공 전후 안내 페이지 예시</div>
      <div>
        <div>
          <div>
            <div>Next</div> 
            <div>Project</div> 
            <div>-</div>
          </div>
          <div>
            <div>To Be Continue</div>
          </div>
        </div>
      </div>
      <div className={styles['back-btn']} onClick={()=>setPos({...pos, stack:0})}></div>
      <img className={styles['subrnd1-img1']} src={cards.m_subrnd1_title} alt="" />
      <img className={styles['subrnd1-img2']} src={cards.m_subrnd1} alt="" />
    </div>
  );
}

export default subrnd1;