import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Home.scss";
import { Header } from "components";
import { BackgroundVideo } from "./";
import cardHandycap from "media/card-handycap.png";
import cardBogota from "media/card-bogota.png";
import cardAutomobile from "media/card-automobile.png";

function Home() {
  const [isBgShowing, setBgShowing] = useState<boolean>(true);
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   setActive(true);
  // }, []);

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setActive(!active);
  //   }, 2000);
  //   return () => clearTimeout(id);
  // }, [active]);

  return (
    <React.Fragment>
      <Header isBgShowing={isBgShowing} setBgShowing={setBgShowing} />
      <BackgroundVideo isShowing={isBgShowing} />
      <div
        className="home"
        onClick={() => setBgShowing(false)}
        onWheel={() => setBgShowing(false)}
      >
        <div className={`cardWrapper ${!isBgShowing && "trigger"}`}>
          <div className={`cardContainer`}>
            <div className="card">
              <NavLink exact to="/service/1">
                <img src={cardHandycap} />
              </NavLink>
            </div>
            <div className="card">
              <NavLink exact to="/service/2">
                <img src={cardBogota} />
              </NavLink>
            </div>
            <div className="card">
              <img src={cardAutomobile} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
