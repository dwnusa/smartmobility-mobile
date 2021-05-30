import React, { useEffect, useRef, useState } from "react";
import "./Board.scss";

function Board({ divEl }: { divEl: any }) {
  // const divEl = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const offsetHeight = divEl.current.offsetHeight;
  //   const offsetTop = divEl.current.offsetTop;
  //   console.log("News", offsetTop, offsetTop + offsetHeight / 2);
  // }, []);
  // useEffect(() => {}, []);
  return (
    <div className="board" ref={divEl}>
      <h2>Board</h2>
    </div>
  );
}

export default Board;
