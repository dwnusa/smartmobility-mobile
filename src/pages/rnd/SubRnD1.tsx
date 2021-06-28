import React, { useEffect, useRef, useState } from "react";
import "./SubRnD.scss";
import { Header } from "components";
import * as cards from "media";
// import { rnd01_1, rnd01_2, rnd02_1, rnd02_2, rnd03_1, rnd03_2 } from "media";

function SubRnD1({ match, history }: { match: any; history: any }) {
  return (
    <React.Fragment>
      <Header />
      <div className="subrnd">
        <div className="title-area">
          <div className="title-grid">
            <div>자율주행 기술개발 <br/> 혁신사업</div>
            <div>Client | 경찰청</div>
            <div>Project Overview</div>
            <div>실시간 상황 정보 및 자율주행차량 정보를 바탕으로 교통류 및 교통 네트워크 최적화와 <br/>
교통사고 감소에 대한 미래교통체계 운영 기술 개발 및 실증 서비스 체계 구축</div>
          </div>
        </div>
        <div className="img-container1">
          <img src={cards.rndpage1_1} />
          <img src={cards.rndpage1_2} />
          <img src={cards.rndpage1_3} />
        </div>
        <div className="subrnd-bottom">
            <div>
              <div>Next<br/>Project</div>
              <div></div>
            </div>
            <div> 인공지능 딥러닝 기법을 활용한 교통약자 이동편의 증진 시스템 개발 </div>
            <img src={cards.rndpage_arrow} onClick={()=>history.push('/rnd/2')}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubRnD1;
