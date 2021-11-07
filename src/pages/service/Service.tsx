import React, { useEffect, useRef, useState } from "react";
import "./Service.scss";
import { Header2 } from "components";
import { HANDYCAP, Trafficsafety, Bogota } from "./";
import * as cards from "media";
function Service({ match, history, isPc }: { match: any; history: any; isPc: boolean }) {
  const targetPage = Number(match.params.page);
  const [currentPage, setPage] = useState<number>(1);
  const [currentSlide, setSlide] = useState<number>(1);
  let prevTime = new Date().getTime();
  const handleScroll = (e: any) => {
    var curTime = new Date().getTime();
    if (typeof prevTime !== "undefined") {
      var timeDiff = curTime - prevTime;
      if (timeDiff > 50) {
        if (currentPage === 1) {
          if (e.deltaY >= 0) {
            const nextSlide = Math.min(4, currentSlide + 1);
            setSlide(nextSlide);
          } else {
            const nextSlide = Math.max(1, currentSlide - 1);
            setSlide(nextSlide);
          }
        }
        if (currentPage === 2) {
          if (e.deltaY >= 0) {
            const nextSlide = Math.min(2, currentSlide + 1);
            setSlide(nextSlide);
          } else {
            const nextSlide = Math.max(1, currentSlide - 1);
            setSlide(nextSlide);
          }
        }
      }
    }
    prevTime = curTime;
  };
  useEffect(() => {
    switch (targetPage) {
      case 1:
        setPage(1);
        break;
      case 2:
        setPage(2);
        break;
      case 3:
        setPage(3);
        break;
      default:
        setPage(1);
    }
  }, [targetPage]);

  const hanycabBgArray = [
    "",
    cards.handycap_bg02,
    cards.handycap_bg03,
    cards.handycap_bg04,
  ];
  const trafficSafetyBgArray = [
    cards.trafficsafety_bg1,
    cards.trafficsafety_bg2,
  ];

  const Service_Pc = ({ match, history, isPc }: { match: any; history: any; isPc: boolean }) => {
    return (
      <div className="service-wrapper">
        <Header2 />
        {currentPage === 1 && (
          <>
            <div
              className={`bgService bgstyle1`}
              style={{
                visibility: currentSlide === 1 ? "visible" : "hidden",
                backgroundImage: `url(${hanycabBgArray[currentSlide - 1]})`
              }}
            ></div>
            <div
              className={`bgService bgstyle2`}
              style={{
                visibility: currentSlide === 2 ? "visible" : "hidden",
                backgroundImage: `url(${hanycabBgArray[currentSlide - 1]})`
              }}
            ></div>
            <div
              className={`bgService bgstyle3`}
              style={{
                visibility: currentSlide === 3 ? "visible" : "hidden",
                backgroundImage: `url(${hanycabBgArray[currentSlide - 1]})`
              }}
            ></div>
            <div
              className={`bgService bgstyle4`}
              style={{
                visibility: currentSlide === 4 ? "visible" : "hidden",
                backgroundImage: `url(${hanycabBgArray[currentSlide - 1]})`
              }}
            ></div>
          </>
        )}
        {currentPage === 2 && (
          <>
            <div
              className={`bgService trafficsagety-bgstyle1`}
              style={{
                visibility: currentSlide === 1 ? "visible" : "hidden",
                backgroundImage: `url(${trafficSafetyBgArray[0]})`
              }}
            ></div>
            <div
              className={`bgService trafficsagety-bgstyle2`}
              style={{
                visibility: currentSlide === 2 ? "visible" : "hidden",
                backgroundImage: `url(${trafficSafetyBgArray[1]})`
              }}
            ></div>
          </>
        )}
        <div className={`service`} onWheel={(e) => handleScroll(e)}>
          <div className="menu">
            <ul>
              <li
                className={`${currentPage === 1 && "enabled"}`}
                onClick={() => history.push("/service/1")}
              >
                HANDYCAB
              </li>
              <li
                className={`${currentPage === 2 && "enabled"}`}
                onClick={() => history.push("/service/2")}
              >
                {"교통안전지키미"}
              </li>
              <li className={`${currentPage === 3 && "enabled"}`}>BOGOTA</li>
            </ul>
          </div>
          <div className="slideIndicator">
            {currentPage === 1 && <ul className="dots">
              <li
                onClick={() => setSlide(1)}
                className={`dot ${currentSlide === 1 && "active"}`}
              ></li>
              <li
                onClick={() => setSlide(2)}
                className={`dot ${currentSlide === 2 && "active"}`}
              ></li>
              <li
                onClick={() => setSlide(3)}
                className={`dot ${currentSlide === 3 && "active"}`}
              ></li>
              <li
                onClick={() => setSlide(4)}
                className={`dot ${currentSlide === 4 && "active"}`}
              ></li>
            </ul>}
            {currentPage === 2 && <ul className="dots">
              <li
                onClick={() => setSlide(1)}
                className={`dot ${currentSlide === 1 && "active"}`}
              ></li>
              <li
                onClick={() => setSlide(2)}
                className={`dot ${currentSlide === 2 && "active"}`}
              ></li>
            </ul>}
          </div>
          {currentPage === 1 && <HANDYCAP currentSlide={currentSlide} />}
          {currentPage === 2 && <Trafficsafety currentSlide={currentSlide} />}
          {currentPage === 3 && <Bogota />}
        </div>
      </div>
    )
  }
  const Service_Mobile = ({ match, history, isPc }: { match: any; history: any; isPc: boolean }) => {
    return (
      <div>Service</div>
    )
  }
  return (
    <>
      {isPc && <Service_Pc match={match} history={history} isPc={isPc} />}
      {/* {!isPc && <Service_Mobile match={match} history={history} isPc={isPc} />} */}
    </>
  );
}

export default Service;
