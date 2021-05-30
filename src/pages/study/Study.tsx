import React, { useEffect, useRef, useState } from "react";
import "./Study.scss";
import { RnD, Outsourcing, Patent } from "./";
function Study() {
  const [currentPage, setPage] = useState<number>(0);
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

  const onWheel = () => {
    const currentScrollTop = divEl.current.scrollTop;
    if (currentScrollTop <= div1Center) setPage(0);
    else if (currentScrollTop <= div2Center) setPage(1);
    else if (currentScrollTop <= div3Center) setPage(2);
  };

  const scrollToTop = (ref: any) => {
    const currentOffsetTop = ref.current.offsetTop;
    const component = document.querySelector(".study");
    component.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    if (currentOffsetTop <= div1Center) setPage(0);
    else if (currentOffsetTop <= div2Center) setPage(1);
    else if (currentOffsetTop <= div3Center) setPage(2);
  };
  return (
    <div className="study" ref={divEl} onWheel={onWheel}>
      <div className="menu">
        <ul>
          <li
            className={`${currentPage == 0 && "enabled"}`}
            onClick={() => scrollToTop(divEl1)}
          >
            R&D
          </li>
          <li
            className={`${currentPage == 1 && "enabled"}`}
            onClick={() => scrollToTop(divEl2)}
          >
            용역
          </li>
          <li
            className={`${currentPage == 2 && "enabled"}`}
            onClick={() => scrollToTop(divEl3)}
          >
            특허/저작권
          </li>
        </ul>
      </div>
      <RnD divEl={divEl1} />
      <Outsourcing divEl={divEl2} />
      <Patent divEl={divEl3} />
    </div>
  );
}

export default Study;
