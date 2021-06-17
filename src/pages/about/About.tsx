import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import { Header } from "components";
import { Greeting, Vision, History, Organization } from "./";
// import smoothscroll from 'smoothscroll-polyfill';

function About({ match }: { match: any }) {
  const targetPage = Number(match.params.page);
  const [currentPage, setPage] = useState<number>(1);
  const divEl = useRef<HTMLDivElement | null>(null);
  const divEl1 = useRef<HTMLDivElement | null>(null);
  const divEl2 = useRef<HTMLDivElement | null>(null);
  const divEl3 = useRef<HTMLDivElement | null>(null);
  const divEl4 = useRef<HTMLDivElement | null>(null);
  const [div1Center, setDiv1Center] = useState<number>(0);
  const [div2Center, setDiv2Center] = useState<number>(0);
  const [div3Center, setDiv3Center] = useState<number>(0);
  const [div4Center, setDiv4Center] = useState<number>(0);

  useEffect(() => {
    const div1Top = divEl1?.current?.offsetTop;
    const div1Center = div1Top + divEl1?.current?.offsetHeight / 2;
    const div2Top = divEl2?.current?.offsetTop;
    const div2Center = div2Top + divEl2?.current?.offsetHeight / 2;
    const div3Top = divEl3?.current?.offsetTop;
    const div3Center = div3Top + divEl3?.current?.offsetHeight / 2;
    const div4Top = divEl4?.current?.offsetTop;
    const div4Center = div4Top + divEl4?.current?.offsetHeight / 2;
    setDiv1Center(div1Center);
    setDiv2Center(div2Center);
    setDiv3Center(div3Center);
    setDiv4Center(div4Center);
    // console.log(page, typeof page, "step0");
  }, []);
  useEffect(() => {
    switch (targetPage) {
      case 1:
        // divEl1.current.scrollIntoView({ behavior: "smooth" });
        setPage(1);
        break;
      case 2:
        // divEl2.current.scrollIntoView({ behavior: "smooth" });
        setPage(2);
        break;
      case 3:
        // divEl3.current.scrollIntoView({ behavior: "smooth" });
        setPage(3);
        break;
      case 4:
        // divEl4.current.scrollIntoView({ behavior: "smooth" });
        setPage(4);
        break;
      default:
        // divEl1.current.scrollIntoView({ behavior: "smooth" });
        setPage(1);
    }
  }, [targetPage]);

  // const onWheel = () => {
  //   const currentScrollTop = divEl.current.scrollTop;
  //   if (currentScrollTop <= div1Center) setPage(1);
  //   else if (currentScrollTop <= div2Center) setPage(2);
  //   else if (currentScrollTop <= div3Center) setPage(3);
  //   else if (currentScrollTop <= div4Center) setPage(4);
  // };

  const scrollToTop = (ref: any) => {
    const currentOffsetTop = ref.current.offsetTop;
    const component = document.querySelector(".about");
    // component.scrollTo({
    //   top: ref.current.offsetTop,
    //   behavior: "smooth",
    // });
    ref.current.scrollIntoView({ behavior: "smooth" });
    if (currentOffsetTop <= div1Center) setPage(1);
    else if (currentOffsetTop <= div2Center) setPage(2);
    else if (currentOffsetTop <= div3Center) setPage(3);
    else if (currentOffsetTop <= div4Center) setPage(4);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="about" ref={divEl}>
        <div className="menu">
          <ul>
            <li
              className={`${currentPage == 1 && "enabled"}`}
              onClick={() => scrollToTop(divEl1)}
            >
              인사말
            </li>
            <li
              className={`${currentPage == 2 && "enabled"}`}
              onClick={() => scrollToTop(divEl2)}
            >
              비전
            </li>
            <li
              className={`${currentPage == 3 && "enabled"}`}
              onClick={() => scrollToTop(divEl3)}
            >
              연혁
            </li>
            <li
              className={`${currentPage == 4 && "enabled"}`}
              onClick={() => scrollToTop(divEl4)}
            >
              조직도
            </li>
          </ul>
        </div>
        {currentPage === 1 && <Greeting divEl={divEl1} />}
        {currentPage === 2 && <Vision divEl={divEl2} />}
        {currentPage === 3 && <History divEl={divEl3} />}
        {currentPage === 4 && <Organization divEl={divEl4} />}
      </div>
    </React.Fragment>
  );
}

export default About;
