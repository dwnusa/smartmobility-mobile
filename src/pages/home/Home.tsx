import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Home.scss";
import { Header2 } from "components";
import { BackgroundVideo } from "./";
import cardHandycap from "media/card-handycap.png";
import cardBogota from "media/card-bogota.png";
import cardAutomobile from "media/card-automobile.png";
import * as cards from "media";
function Home() {
  const divEl = useRef<HTMLDivElement | null>(null);
  const [isBgShowing, setBgShowing] = useState<boolean>(true);
  const [posX, setPosX] = useState<number>(50);
  const [nextAnimation, setNextAnimation] = useState<boolean>(false);
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
  return (
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
                  onMouseOut={(e) => (e.currentTarget.src = cards.cardHandycap)}
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
                onMouseOut={(e) => (e.currentTarget.src = cards.cardAutomobile)}
                onMouseOver={(e) =>
                  (e.currentTarget.src = cards.cardAutomobile_active)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
