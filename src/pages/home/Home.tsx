import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Home.scss";
import { Header } from "components";
import { BackgroundVideo } from "./";
import cardHandycap from "media/card-handycap.png";
import cardBogota from "media/card-bogota.png";
import cardAutomobile from "media/card-automobile.png";
import * as cards from "media";

function Home() {
  const divEl = useRef<HTMLDivElement | null>(null);
  const [isBgShowing, setBgShowing] = useState<boolean>(true);
  const [posX, setPosX] = useState<number>(50);
  const handleWheel = (e) => {
    setBgShowing(false);
    if (e.deltaY >= 0){
      const newPos = Math.max(0, posX-2);
      setPosX(newPos)
    } else {
      const newPos = Math.min(100, posX+2);
      setPosX(newPos)
    }
  }

  // useEffect(()=>{
  //   if (time >= 50) return undefined;

  //   const tick = setTimeout(() => {
  //     if (!isBgShowing){
  //       setTime(time + 0.1);
  //       // setPosX(posX-time)
  //     }
  //   }, 10);
  //   return () => clearTimeout(tick);
  // },[time, isBgShowing])

  return (
    <React.Fragment>
      <Header isBgShowing={isBgShowing} setBgShowing={setBgShowing} />
      <BackgroundVideo isShowing={isBgShowing} />
      <div
        className="home"
        onClick={() => setBgShowing(false)}
        onWheel={(e) => handleWheel(e)}
      >
        <div ref={divEl} style={{left:`${posX}vw`}} className={`cardWrapper ${!isBgShowing && "trigger"}`}>
          <div className={`cardContainer`}>
            <div className="card">
              <NavLink exact to="/service/1">
                <img src={cards.cardHandycap} 
                onMouseOut={e => (e.currentTarget.src = cards.cardHandycap)}
                onMouseOver={e => (e.currentTarget.src = cards.cardHandycap_active)}/>
                
        {/* <img src={rnd01_1}
          onMouseOut={e => (e.currentTarget.src = rnd01_1)}
          onMouseOver={e => (e.currentTarget.src = rnd01_2)} /> */}
              </NavLink>
            </div>
            <div className="card">
              {/* <NavLink exact to="/service/2"> */}
                <img src={cardBogota} 
                onMouseOut={e => (e.currentTarget.src = cards.cardBogota)}
                onMouseOver={e => (e.currentTarget.src = cards.cardBogota_active)}/>
              {/* </NavLink> */}
            </div>
            <div className="card">
              <img src={cardAutomobile} 
                onMouseOut={e => (e.currentTarget.src = cards.cardAutomobile)}
                onMouseOver={e => (e.currentTarget.src = cards.cardAutomobile_active)}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
