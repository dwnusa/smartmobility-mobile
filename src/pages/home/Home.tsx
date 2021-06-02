import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Header } from "components";
import { BackgroundVideo } from "./";

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
      <Header isBgShowing={isBgShowing} />
      <div className="home" onClick={() => setBgShowing(false)}>
        <div className="svgtest">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.44 74.33">
            <path
              className={`squiggle ${!isBgShowing && "trigger"}`}
              fill="none"
              stroke="#0A347F"
              // opacity="0.2"
              // stroke-miterlimit="10"
              stroke-width="1"
              d="M14.2 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 8.23 31.12 19.87 18.91 13.2 25.25 13.16S278.24 58 297 40.76s25.86-17.86 31.49-17.86 48.11 15.42 65 13.27"
            />
          </svg>
        </div>
        <BackgroundVideo isShowing={isBgShowing} />
      </div>
    </React.Fragment>
  );
}

export default Home;
