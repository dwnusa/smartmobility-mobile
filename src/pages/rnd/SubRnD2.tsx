import React, { useEffect, useRef, useState } from "react";
import "./SubRnD.scss";
import { Header2 } from "components";
import * as cards from "media";

function SubRnD2({ match, history }: { match: any; history: any }) {
  const divEl = useRef<HTMLDivElement | null>(null);
  const imgEl1 = useRef<HTMLImageElement | null>(null);
  const imgEl2 = useRef<HTMLImageElement | null>(null);
  const imgEl3 = useRef<HTMLImageElement | null>(null);
  const imgEl4 = useRef<HTMLImageElement | null>(null);
  const [activeState, setActiveState] = useState([false, false, false, false]);
  useEffect(() => {
    const state1 =
      imgEl1.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state2 =
      imgEl2.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state3 =
      imgEl3.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state4 =
      imgEl4.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    setActiveState([state1, state2, state3, state4]);
  }, []);
  const wheelHandler = (e) => {
    const state1 =
      imgEl1.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state2 =
      imgEl2.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state3 =
      imgEl3.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    const state4 =
      imgEl4.current.offsetTop < window.innerHeight + divEl.current.scrollTop;
    setActiveState([state1, state2, state3, state4]);
  };
  return (
    <React.Fragment>
      <Header2 />
      <div className="subrnd" onWheel={(e) => wheelHandler(e)} ref={divEl}>
        <div className="title-area">
          <div className="title-grid">
            <div>
              인공지능 딥러닝 기법을 활용한 <br /> 교통약자 이동편의 증진 시스템
              개발
            </div>
            <div>Client | 한국연구재단</div>
            <div>Project Overview</div>
            <div>
              교통약자에게 편리한 경로정보와 교통 수단에 대한 도착시간 안내,
              예약, 경로안내 등 통행 컨시어지 <br />
              서비스를 제공함으로써 교통약자 스스로 이동할 수 있도록 도움을 줄
              수 있는 서비스를 구상
            </div>
          </div>
        </div>
        <div className="img-container2">
          <img
            className={`${activeState[0] && "active1"}`}
            src={cards.rndpage2_1}
            ref={imgEl1}
          />
          <img
            className={`${activeState[1] && "active2"}`}
            src={cards.rndpage2_2}
            ref={imgEl2}
          />
          <img
            className={`${activeState[2] && "active3"}`}
            src={cards.rndpage2_3}
            ref={imgEl3}
          />
          <img
            className={`${activeState[3] && "active4"}`}
            src={cards.rndpage2_4}
            ref={imgEl4}
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
          <div> IoT 센서 기술을 이용한 교통약자 Maas 플랫폼 개발 </div>
          <img
            src={cards.rndpage_arrow}
            onClick={() => history.push("/rnd/3")}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubRnD2;
