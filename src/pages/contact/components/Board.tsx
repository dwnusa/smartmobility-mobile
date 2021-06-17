import React, { useEffect, useRef, useState } from "react";
import "./Board.scss";

function Board() {
  // const divEl = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const offsetHeight = divEl.current.offsetHeight;
  //   const offsetTop = divEl.current.offsetTop;
  //   console.log("News", offsetTop, offsetTop + offsetHeight / 2);
  // }, []);
  // useEffect(() => {}, []);
  return (
    <div className="board">
      <h2>Board</h2>
    </div>
  );
}

export default Board;
