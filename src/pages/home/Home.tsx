import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Home.scss";
import bgVideo from "media/bg-video.mp4";
import { Header2 } from "components";
import { BackgroundVideo } from "./";
import logoWhite from "media/logo-white.png";
import cardHandycap from "media/card-handycap.png";
import cardBogota from "media/card-bogota.png";
import cardAutomobile from "media/card-automobile.png";
import * as cards from "media";
import { url } from "inspector";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
function Home({ isPc }: { isPc: boolean }) {
  const divEl = useRef<HTMLDivElement | null>(null);
  const [isBgShowing, setBgShowing] = useState<boolean>(true);
  const [posX, setPosX] = useState<number>(50);
  const [nextAnimation, setNextAnimation] = useState<boolean>(false);
  const [cardActive, setCardActive] = useState<number>(0);
  const handleWheel = (e) => {
    setBgShowing(false);
    if (e.deltaY >= 0) {
      const newPos = Math.max(-60, posX - 2);
      setPosX(newPos);
    } else {
      const newPos = Math.min(60, posX + 2);
      setPosX(newPos);
    }
    if (posX < -0) setNextAnimation(true);
    else setNextAnimation(false);
  };

  const Home_Mobile = ({ isPc }: { isPc: boolean }) => {
    return (
      <div className="hm1">
        {/* <video autoPlay loop muted style={{ height: "80%", position: "absolute", top: "0px" }}>
          <source src={bgVideo} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video> */}
        <img src={logoWhite} />
        <span>
          We think <br />
          for the <br />
          better world!
        </span>
        <div className="hm2">
          <div className="hm2-handle"></div>
          <div className="hm2-body">
            <div className="hm3-cards-container">
              <img src={cards.home01active} />
              <img src={cards.home01inactive} />
              <img src={cards.home02active} />
              <img src={cards.home02inactive} />
              <img src={cards.home03active} />
              <img src={cards.home03inactive} />
            </div>
            <div className="hm3-main-container">
              <div className="hm3-menu-items">
                <div>About</div>
                <div>Service</div>
                <div>Project</div>
                <div>Contact</div>
              </div>
              <div className="hm3-menu-subitems">
                <div>인사말</div>
                <div>비전</div>
                <div>연혁</div>
                <div>조직도</div>
              </div>
              <div className="hm3-body-wrapper">
                <div className="hm3-box1">
                  ㈜스마트모빌러티에 오신 것을
                  <br />
                  진심으로 환영합니다.
                </div>
                <div className="hm3-box2">
                  <img src={cards.aboutGreeting1} />
                </div>
                <div className="hm3-box3">
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
                <div className="hm3-box4">㈜스마트모빌러티 CEO / 공학박사</div>
                <div className="hm3-box5">김 승 현</div>
                <div className="hm3-footer">
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
  };
  return (
    <>
      {isPc && (
        <React.Fragment>
          <Header2 isBgShowing={isBgShowing} setBgShowing={setBgShowing} />
          <BackgroundVideo isShowing={isBgShowing} posX={posX} />
          <div
            className="home"
            onClick={() => setBgShowing(false)}
            onWheel={(e) => handleWheel(e)}
          >
            <div
              className={`svgtest ${
                !isBgShowing && (nextAnimation ? "activated2" : "activated1")
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`${
                  nextAnimation ? "3047 0 3097 1229" : `30 0 3047 1229`
                } `}
                fill="none"
              >
                <path
                  className="path"
                  d="M21.6601 679.12C57.0118 822.071 285.343 987.1 568.659 971.62C894.659 953.808 1044.31 617.62 997.659 510.12C972.272 451.62 904.617 484.521 932.159 548.62C955.362 602.62 1074.16 775.12 1433.66 717.12C1721.22 670.727 2100.79 263.77 2334.79 217.775C2402.62 204.442 2647.85 141.12 2800.66 503.62C2853.49 628.954 2947.66 1022.62 3189.16 1022.62C3444.66 1022.62 3584.67 746.611 3659.66 671.62C3686.66 644.62 3834.66 463.62 4070.16 699.12C4265.73 894.694 4288.16 978.62 4580.16 978.62C4876.66 978.62 5124.16 490.62 4984.16 490.62C4884.84 490.62 5070.66 871.62 5530.66 715.62C5990.66 559.62 5804.16 386.12 6164.66 358.12"
                  stroke="#0A347F"
                  stroke-width="4"
                />
              </svg>
            </div>
            <div
              ref={divEl}
              style={{ left: `${posX}vw` }}
              className={`cardWrapper ${!isBgShowing && "trigger"}`}
            >
              <div className={`cardContainer`}>
                <div className="card">
                  <NavLink exact to="/service/1">
                    <img
                      src={cards.cardHandycap}
                      onMouseOut={(e) =>
                        (e.currentTarget.src = cards.cardHandycap)
                      }
                      onMouseOver={(e) =>
                        (e.currentTarget.src = cards.cardHandycap_active)
                      }
                    />
                  </NavLink>
                </div>
                <div className="card">
                  <img
                    src={cardBogota}
                    onMouseOut={(e) => (e.currentTarget.src = cards.cardBogota)}
                    onMouseOver={(e) =>
                      (e.currentTarget.src = cards.cardBogota_active)
                    }
                  />
                </div>
                <div className="card">
                  <img
                    src={cardAutomobile}
                    onMouseOut={(e) =>
                      (e.currentTarget.src = cards.cardAutomobile)
                    }
                    onMouseOver={(e) =>
                      (e.currentTarget.src = cards.cardAutomobile_active)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {!isPc && <Home_Mobile isPc={isPc} />}
    </>
  );
}

export default Home;
