import React, { useEffect, useRef, useState } from "react";
import "./Service.scss";
import { HANDYCAP, Bogota } from "./";
function Service() {
  const [currentPage, setPage] = useState<number>(0);
  const divEl = useRef<HTMLDivElement | null>(null);
  const divEl1 = useRef<HTMLDivElement | null>(null);
  const divEl2 = useRef<HTMLDivElement | null>(null);
  const divEl3 = useRef<HTMLDivElement | null>(null);
  const [div1Center, setDiv1Center] = useState<number>(0);
  const [div2Center, setDiv2Center] = useState<number>(0);

  useEffect(() => {
    const div1Top = divEl1?.current?.offsetTop;
    const div1Center = div1Top + divEl1?.current?.offsetHeight / 2;
    const div2Top = divEl2?.current?.offsetTop;
    const div2Center = div2Top + divEl2?.current?.offsetHeight / 2;
    setDiv1Center(div1Center);
    setDiv2Center(div2Center);
  }, []);

  const onWheel = () => {
    const currentScrollTop = divEl.current.scrollTop;
    if (currentScrollTop <= div1Center) setPage(0);
    else if (currentScrollTop <= div2Center) setPage(1);
  };

  const scrollToTop = (ref: any) => {
    const currentOffsetTop = ref.current.offsetTop;
    const contact = document.querySelector(".service");
    contact.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    if (currentOffsetTop <= div1Center) setPage(0);
    else if (currentOffsetTop <= div2Center) setPage(1);
  };
  return (
    <div className="service" ref={divEl} onWheel={onWheel}>
      <div className="menu">
        <ul>
          <li
            className={`${currentPage == 0 && "enabled"}`}
            onClick={() => scrollToTop(divEl1)}
          >
            HANDYCAP
          </li>
          <li
            className={`${currentPage == 1 && "enabled"}`}
            onClick={() => scrollToTop(divEl2)}
          >
            Bogota
          </li>
        </ul>
      </div>
      <HANDYCAP divEl={divEl1} />
      <Bogota divEl={divEl2} />
    </div>
  );
}

export default Service;
