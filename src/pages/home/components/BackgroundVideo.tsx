import React from "react";
import bgVideo from "media/bg-video.mp4";

function BackgroundVideo() {
  const videoSource = "https://www.w3schools.com/tags/movie.mp4";
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        zIndex: -1,
      }}
    >
      <video autoPlay loop muted width="100%" height="100%">
        <source src={bgVideo} type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
