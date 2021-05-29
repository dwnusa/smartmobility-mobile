import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import { Link, Route } from "react-router-dom";
import { Map, News, Board } from "./";
// type contactsType = { match: Number };

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
function Contact({ match }: { match: any }) {
  const [wheelState, setWheelState] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const divEl = useRef<HTMLDivElement | null>(null);
  const divEl1 = useRef<HTMLDivElement | null>(null);
  const divEl2 = useRef<HTMLDivElement | null>(null);
  const divEl3 = useRef<HTMLDivElement | null>(null);
  // const inputEl1 = useRef<HTMLDivElement | null>(null);
  // const inputEl2 = useRef<HTMLDivElement | null>(null);
  // const inputEl3 = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   console.log("hi");
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     console.log("bye");
  //   };
  // }, []);
  // useEffect(()=>{
  // },[wheelState])
  const onScroll1 = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const currentScrollTop = divEl.current.scrollTop;

    const div1Top = divEl1.current.offsetTop;
    const div1Center = div1Top + divEl1.current.offsetHeight / 2;
    const div2Top = divEl2.current.offsetTop;
    const div2Center = div2Top + divEl2.current.offsetHeight / 2;
    const div3Top = divEl3.current.offsetTop;
    const div3Center = div3Top + divEl3.current.offsetHeight / 2;

    if (currentScrollTop <= div1Center) setPage(0);
    else if (currentScrollTop <= div2Center) setPage(1);
    else if (currentScrollTop <= div3Center) setPage(3);
  };
  // const onScroll2 = (e: any) => {
  //   console.log(e.nativeEvent.deltaY);
  //   if (wheelState == )
  //   if (e.nativeEvent.deltaY > 0) setCounter(counter + 1);
  //   if (e.nativeEvent.deltaY < 0) setCounter(counter - 1);
  //   // if (e.nativeEvent.wheelDelta > 0) {
  //   //   console.log("scroll up:", e.nativeEvent.deltaY);
  //   //   // setFocusItem
  //   // } else {
  //   //   console.log("scroll down:", e.nativeEvent.deltaY);
  //   // }
  // };
  // const scrollToTop = () => {
  //   document.getElementsByClassName("board")[0].scrollTo(0, 0);
  // };
  const scrollToTop = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  console.log(page);
  return (
    <div className="contact" ref={divEl} onWheel={onScroll1}>
      <div className="menu">
        <ul>
          <li onClick={() => scrollToTop(divEl1)}>오시는길</li>
          <li onClick={() => scrollToTop(divEl2)}>공지/채용</li>
          <li onClick={() => scrollToTop(divEl3)}>문의하기</li>
          {/* <button onClick={scrollToTop}>scrollToTop</button> */}
        </ul>
      </div>
      <Map divEl={divEl1} />
      <News divEl={divEl2} />
      <Board divEl={divEl3} />
    </div>
  );
}

export default Contact;
