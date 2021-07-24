import React, { useEffect, useRef, useState } from "react";
import "./SubRnD.scss";
import { Header2 } from "components";
import * as cards from "media";

function SubRnD3({ match, history }: { match: any; history: any }) {
  const divEl = useRef<HTMLDivElement | null>(null);
  const imgEl1 = useRef<HTMLImageElement | null>(null);
  const imgEl2 = useRef<HTMLImageElement | null>(null);
  const imgEl3 = useRef<HTMLImageElement | null>(null);
  const [activeState, setActiveState] = useState([false, false, false]);
  useEffect(() => {
    const state1 =
      imgEl1.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state2 =
      imgEl2.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state3 =
      imgEl3.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    setActiveState([state1, state2, state3]);
  }, []);
  const wheelHandler = (e) => {
    const state1 =
      imgEl1.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state2 =
      imgEl2.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state3 =
      imgEl3.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    setActiveState([state1, state2, state3]);
  };
  return (
    <React.Fragment>
      <Header2 />
      <div className="subrnd" onWheel={(e) => wheelHandler(e)} ref={divEl}>
        <div className="title-area">
          <div className="title-grid">
            <div>
              IoT 센서 기술을 이용한 <br /> 교통약자 Maas 플랫폼 개발
            </div>
            <div>Client | 서울산업진흥원</div>
            <div>Project Overview</div>
            <div>
              교통약자들의 니즈가 반영된 교통약자 중심 통합교통서비스(MaaS)를
              제공하기 위한 <br />
              경로탐색 기법과 전반적인 서비스 구상
            </div>
          </div>
        </div>
        <div className="img-container3">
          <img
            className={`${activeState[0] && "active1"}`}
            ref={imgEl1}
            src={cards.rndpage3_1}
          />
          <img
            className={`${activeState[1] && "active2"}`}
            ref={imgEl2}
            src={cards.rndpage3_2}
          />
          <img
            className={`${activeState[2] && "active3"}`}
            ref={imgEl3}
            src={cards.rndpage3_3}
          />
        </div>
        <div className="subrnd-bottom">
          <div>
            <div>
              Next
              <br />
              Project
            </div>
            <div></div>
          </div>
          <div> To Be Continue </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubRnD3;
