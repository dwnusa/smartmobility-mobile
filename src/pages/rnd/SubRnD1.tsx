import React, { useEffect, useRef, useState } from "react";
import "./SubRnD.scss";
import { Header2 } from "components";
import * as cards from "media";

function SubRnD1({ match, history }: { match: any; history: any }) {
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
  // console.log(activeState);
  return (
    <React.Fragment>
      <Header2 />
      <div className="subrnd" onWheel={(e) => wheelHandler(e)} ref={divEl}>
        <div className="title-area">
          <div className="title-grid">
            <div>
              자율주행 기술개발 <br /> 혁신사업
            </div>
            <div>Client | 경찰청</div>
            <div>Project Overview</div>
            <div>
              실시간 상황 정보 및 자율주행차량 정보를 바탕으로 교통류 및 교통
              네트워크 최적화와 <br />
              교통사고 감소에 대한 미래교통체계 운영 기술 개발 및 실증 서비스
              체계 구축
            </div>
          </div>
        </div>
        <div className="img-container1">
          <img
            className={`${activeState[0] && "active1"}`}
            src={cards.rndpage1_1}
            ref={imgEl1}
          />
          <img
            className={`${activeState[1] && "active2"}`}
            src={cards.rndpage1_2}
            ref={imgEl2}
          />
          <img
            className={`${activeState[2] && "active3"}`}
            src={cards.rndpage1_3}
            ref={imgEl3}
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
          <div>
            {" "}
            인공지능 딥러닝 기법을 활용한 교통약자 이동편의 증진 시스템 개발{" "}
          </div>
          <img
            src={cards.rndpage_arrow}
            onClick={() => history.push("/rnd/2")}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubRnD1;
