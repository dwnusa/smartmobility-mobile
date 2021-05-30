import React, { useEffect, useRef, useState } from "react";
import "./News.scss";

function News({ divEl }: { divEl: any }) {
  // const divEl = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const offsetHeight = divEl.current.offsetHeight;
  //   const offsetTop = divEl.current.offsetTop;
  //   console.log("News", offsetTop, offsetTop + offsetHeight / 2);
  // }, []);
  // useEffect(() => {}, []);
  return (
    <div className="news" ref={divEl}>
      <h2>News</h2>
    </div>
  );
}

export default News;
