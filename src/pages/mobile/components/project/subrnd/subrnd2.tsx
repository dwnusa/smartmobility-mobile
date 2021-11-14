import React from 'react';
import * as cards from "media";
import styles from './subrnd2.module.scss';

function subrnd2({ ishm3Scroll, setPos, pos }) {
  return (
    <div className={styles['subrnd2']}>
      <div>IoT 센서 기술을 이용한 교통약자 Maas플랫폼 개발 플로우</div>
      <div>교통약자 이동정보 지속 수집 및 알고리즘 적용을 통한 교통약자 맞춤경로 개발</div>
      <div>최적경로와 맞춤경로 제공을 통한 경로탐색 기능 검증</div>
      <div>{'>'} 이후 고도화 작업은 『한국연구재단』 과제를 통해 후속과제로 진행중</div>
      <div>
        <div>
          <div>
            <div>Next</div>
            <div>Project</div>
            <div>-</div>
          </div>
          <div>
            <div>인공지능 딥러닝 기법을 활용한</div>
            <div>교통약자 이동편의 증진 시스템 개발</div>
          </div>
        </div>
        <div onClick={() => setPos({ ...pos, stack: 3 })}><img src={cards.rndpage_arrow} alt="" /></div>
      </div>
      <div className={styles['back-btn']} onClick={() => setPos({ ...pos, stack: 0 })}></div>
      <img className={styles['subrnd2-img1']} src={cards.m_subrnd2_title} alt="" />
      <img className={styles['subrnd2-img2']} src={cards.m_subrnd2} alt="" />
    </div>
  );
}

export default subrnd2;