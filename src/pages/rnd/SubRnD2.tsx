import React, { useEffect, useRef, useState } from "react";
import "./SubRnD.scss";
import { Header } from "components";
import * as cards from "media";
// import { rnd01_1, rnd01_2, rnd02_1, rnd02_2, rnd03_1, rnd03_2 } from "media";

function SubRnD2({ match, history }: { match: any; history: any }) {
  return (
    <React.Fragment>
      <Header />
      <div className="subrnd">
        <div className="title-area">
          <div className="title-grid">
            <div>인공지능 딥러닝 기법을 활용한 <br/> 교통약자 이동편의 증진 시스템 개발</div>
            <div>Client | 한국연구재단</div>
            <div>Project Overview</div>
            <div>교통약자에게 편리한 경로정보와 교통 수단에 대한 도착시간 안내, 예약, 경로안내 등 통행 컨시어지 <br/>서비스를 제공함으로써 교통약자 스스로 이동할 수 있도록 도움을 줄 수 있는 서비스를 구상</div>
          </div>
        </div>
        <div className="img-container2">
          <img src={cards.rndpage2_1} />
          <img src={cards.rndpage2_2} />
          <img src={cards.rndpage2_3} />
          <img src={cards.rndpage2_4} />
        </div>
        <div className="subrnd-bottom">
            <div>
              <div>Next<br/>Project</div>
              <div></div>
            </div>
            <div> IoT 센서 기술을 이용한 교통약자 Maas 플랫폼 개발 </div>
            <img src={cards.rndpage_arrow} onClick={()=>history.push('/rnd/3')}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubRnD2;
