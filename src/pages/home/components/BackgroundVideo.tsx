import React from "react";
import "./BackgroundVideo.scss";
import bgVideo from "media/bg-video.mp4";

function BackgroundVideo() {
  const videoSource = "https://www.w3schools.com/tags/movie.mp4";
  return (
    <div className="backgroundvideo">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>
      <h2>
        We think <br /> for the <br />
        better world!
      </h2>
    </div>
  );
}

export default BackgroundVideo;
