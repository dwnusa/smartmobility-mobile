import React, { useEffect, useRef, useState } from "react";
import "./SubRnD.scss";
import { Header } from "components";
import * as cards from "media";
// import { rnd01_1, rnd01_2, rnd02_1, rnd02_2, rnd03_1, rnd03_2 } from "media";

function SubRnD3({ match, history }: { match: any; history: any }) {
  return (
    <React.Fragment>
      <Header />
      <div className="subrnd">
        <div className="title-area">
          <div className="title-grid">
            <div>IoT 센서 기술을 이용한 <br/> 교통약자 Maas 플랫폼 개발</div>
            <div>Client | 서울산업진흥원</div>
            <div>Project Overview</div>
            <div>교통약자들의 니즈가 반영된 교통약자 중심 통합교통서비스(MaaS)를 제공하기 위한 <br/>경로탐색 기법과 전반적인 서비스 구상</div>
          </div>
        </div>
        <div className="img-container3">
          <img src={cards.rndpage3_1} />
          <img src={cards.rndpage3_2} />
          <img src={cards.rndpage3_3} />
        </div>
        <div className="subrnd-bottom">
            <div>
              <div>Next<br/>Project</div>
              <div></div>
            </div>
            <div> To Be Continue </div>
            {/* <img src={cards.rndpage_arrow}/> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubRnD3;
