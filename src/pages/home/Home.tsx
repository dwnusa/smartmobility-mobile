import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Header } from "components";
import { BackgroundVideo } from "./";

function Home() {
  const [isBgShowing, setBgShowing] = useState<boolean>(true);

  return (
    <React.Fragment>
      <Header isBgShowing={isBgShowing} />
      <div className="home" onClick={() => setBgShowing(false)}>
        <BackgroundVideo isShowing={isBgShowing} />
        {/* <div className="emptyBackground">
        <h2>
          We think <br /> for the <br />
          better world!
        </h2>
      </div> */}
      </div>
    </React.Fragment>
  );
}

export default Home;
