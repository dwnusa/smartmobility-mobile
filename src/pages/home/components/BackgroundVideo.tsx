import React, { useState } from "react";
import "./BackgroundVideo.scss";
import bgVideo from "media/bg-video.mp4";
type BackgroundVideoProps = {
  isShowing: boolean;
  posX: number;
};
function BackgroundVideo({ isShowing, posX }: BackgroundVideoProps) {
  const opacityValue = posX / 50;
  return (
    <div className={`backgroundvideo ${!isShowing && "turnColorBlack"}`}>
      <video autoPlay loop muted className={`${!isShowing && "fadeout"}`}>
        <source src={bgVideo} type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>
      <h2 className={`text-bg`} style={{ opacity: opacityValue }}>
        We think <br /> for the <br />
        better world!
      </h2>
    </div>
  );
}

export default BackgroundVideo;
