import React, { useState } from "react";
import "./BackgroundVideo.scss";
import bgVideo from "media/bg-video.mp4";
type BackgroundVideoProps = {
  isShowing: boolean;
};
function BackgroundVideo({ isShowing }: BackgroundVideoProps) {
  console.log(isShowing);
  return (
    <div className={`backgroundvideo ${!isShowing && "turnColorBlack"}`}>
      <video autoPlay loop muted className={`${!isShowing && "fadeout"}`}>
        <source src={bgVideo} type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>
      <div className="svgtest">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.44 74.33">
          <path
            className={`squiggle ${!isShowing && "trigger"}`}
            fill="none"
            stroke="#0A347F"
            // opacity="0.2"
            // stroke-miterlimit="10"
            stroke-width="1"
            d="M14.2 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 8.23 31.12 19.87 18.91 13.2 25.25 13.16S278.24 58 297 40.76s25.86-17.86 31.49-17.86 48.11 15.42 65 13.27"
          />
        </svg>
      </div>
      <h2>
        We think <br /> for the <br />
        better world!
      </h2>
    </div>
  );
}

export default BackgroundVideo;
