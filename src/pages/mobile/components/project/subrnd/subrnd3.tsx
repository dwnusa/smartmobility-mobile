import React from 'react';
import * as cards from "media";
import styles from './subrnd3.module.scss';

function subrnd3({ ishm3Scroll, setPos, pos }) {
  return (
    <div className={styles['subrnd3']}>
      <div>앱 데이터 처리 시퀀스 다이어그램</div>
      <div>앱 구성 시스템 구성도</div>
      <div>연구 과제 항목</div>
      <div>연구 과제 항목</div>
      <div>
        * 지체/시각/청각장애 3가지 유형에 대해 10대의 IOT센서를 통해서 총합   약 700건의 장애인 이동 데이터를 수집하여 네이버 최단 경로와 비교·   분석한 결과 불일치 확인, 교통약자들은 네이버의 최단 경로 대비 다양한   지점으로 이동하는 것을 알 수 있었음. 이러한 특성을 어플리케이션의    알고리즘에 반영하여 기존의 경로 탐색 대비 더 긍정적인 결과를 산출
      </div>
      <div>
        <div>
          <div>
            <div>Next</div>
            <div>Project</div>
            <div>-</div>
          </div>
          <div>자율주행 기술개발 혁신사업</div>
        </div>
        <div onClick={() => setPos({ ...pos, stack: 1 })}><img src={cards.rndpage_arrow} alt="" /></div>
      </div>
      <div className={styles['back-btn']} onClick={() => setPos({ ...pos, stack: 0 })}></div>
      <img className={styles['subrnd3-img1']} src={cards.m_subrnd3_title} alt="" />
      <img className={styles['subrnd3-img2']} src={cards.m_subrnd3} alt="" />
    </div>
  );
}

export default subrnd3;