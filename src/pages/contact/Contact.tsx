import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import { Link, Route } from "react-router-dom";
import { Map, News, Board } from "./";
// type contactsType = { match: Number };

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
function Contact({ match }: { match: any }) {
  const [page, setPage] = useState<number>(0);
  const divEl = useRef<HTMLDivElement | null>(null);
  const divEl1 = useRef<HTMLDivElement | null>(null);
  const divEl2 = useRef<HTMLDivElement | null>(null);
  const divEl3 = useRef<HTMLDivElement | null>(null);
  const [div1Center, setDiv1Center] = useState<number>(0);
  const [div2Center, setDiv2Center] = useState<number>(0);
  const [div3Center, setDiv3Center] = useState<number>(0);

  useEffect(() => {
    const div1Top = divEl1?.current?.offsetTop;
    const div1Center = div1Top + divEl1?.current?.offsetHeight / 2;
    const div2Top = divEl2?.current?.offsetTop;
    const div2Center = div2Top + divEl2?.current?.offsetHeight / 2;
    const div3Top = divEl3?.current?.offsetTop;
    const div3Center = div3Top + divEl3?.current?.offsetHeight / 2;
    setDiv1Center(div1Center);
    setDiv2Center(div2Center);
    setDiv3Center(div3Center);
  }, []);
  const onScroll1 = () => {
    // const scrollY = window.scrollY;
    const currentScrollTop = divEl.current.scrollTop;
    if (currentScrollTop <= div1Center) setPage(0);
    else if (currentScrollTop <= div2Center) setPage(1);
    else if (currentScrollTop <= div3Center) setPage(2);
  };
  const scrollToTop = (ref: any) => {
    const currentOffsetTop = ref.current.offsetTop;
    const contact = document.querySelector(".contact");
    contact.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    if (currentOffsetTop <= div1Center) setPage(0);
    else if (currentOffsetTop <= div2Center) setPage(1);
    else if (currentOffsetTop <= div3Center) setPage(2);
  };
  return (
    <div className="contact" ref={divEl} onWheel={onScroll1}>
      <div className="menu">
        <ul>
          <li onClick={() => scrollToTop(divEl1)}>오시는길</li>
          <li onClick={() => scrollToTop(divEl2)}>공지/채용</li>
          <li onClick={() => scrollToTop(divEl3)}>문의하기</li>
        </ul>
      </div>
      <Map divEl={divEl1} />
      <News divEl={divEl2} />
      <Board divEl={divEl3} />
    </div>
  );
}

export default Contact;
