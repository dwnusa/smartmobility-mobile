import React, { useEffect, useRef, useState } from "react";
import "./Service.scss";
import { Header } from "components";
import { HANDYCAP, Bogota } from "./";
import * as cards from "media";
function Service({ match, history }: { match: any; history: any }) {
  const targetPage = Number(match.params.page);
  const [currentPage, setPage] = useState<number>(1);
  const [currentSlide, setSlide] = useState<number>(1);
  let prevTime = new Date().getTime();
  const handleScroll = (e: any) => {
    var curTime = new Date().getTime();
    if (typeof prevTime !== "undefined") {
      var timeDiff = curTime - prevTime;
      // console.log(timeDiff)
      if (timeDiff > 50) {
        if (e.deltaY >= 0) {
          // console.log("down")
          const nextSlide = Math.min(4, currentSlide + 1);
          setSlide(nextSlide);
        } else {
          // console.log("up")
          const nextSlide = Math.max(1, currentSlide - 1);
          setSlide(nextSlide);
        }
      }
    }
    prevTime = curTime;
  };
  // const divEl = useRef<HTMLDivElement | null>(null);
  // const divEl1 = useRef<HTMLDivElement | null>(null);
  // const divEl2 = useRef<HTMLDivElement | null>(null);
  // const [div1Center, setDiv1Center] = useState<number>(0);
  // const [div2Center, setDiv2Center] = useState<number>(0);

  // useEffect(() => {
  //   const div1Top = divEl1?.current?.offsetTop;
  //   const div1Center = div1Top + divEl1?.current?.offsetHeight / 2;
  //   const div2Top = divEl2?.current?.offsetTop;
  //   const div2Center = div2Top + divEl2?.current?.offsetHeight / 2;
  //   setDiv1Center(div1Center);
  //   setDiv2Center(div2Center);
  // }, []);
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
      default:
        // divEl1.current.scrollIntoView({ behavior: "smooth" });
        setPage(1);
    }
  }, [targetPage]);
  // const onWheel = () => {
  //   const currentScrollTop = divEl.current.scrollTop;
  //   if (currentScrollTop <= div1Center) setPage(1);
  //   else if (currentScrollTop <= div2Center) setPage(2);
  // };

  // const scrollToTop = (ref: any) => {
  //   const currentOffsetTop = ref.current.offsetTop;
  //   const contact = document.querySelector(".service");
  //   contact.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth",
  //   });
  //   if (currentOffsetTop <= div1Center) setPage(1);
  //   else if (currentOffsetTop <= div2Center) setPage(2);
  // };

  const bgArray = [
    "",
    cards.handycap_bg02,
    cards.handycap_bg03,
    cards.handycap_bg04,
  ];
  // console.log(bgArray[currentSlide-1])
  // console.log(currentSlide);
  return (
    <React.Fragment>
      <Header />
      <div
        className={`service ${currentSlide === 1 && "bgstyle1"} ${currentSlide === 2 && "bgstyle2"} ${currentSlide === 3 && "bgstyle3"} ${currentSlide === 4 && "bgstyle4"}`}
        onWheel={(e) => handleScroll(e)}
        style={{ backgroundImage: `url(${bgArray[currentSlide - 1]})` }}
      >
        <div className="menu">
          <ul>
            <li
              className={`${currentPage === 1 && "enabled"}`}
              onClick={() => history.push("/service/1")}
            >
              HANDYCAB
            </li>
            <li
              className={`${currentPage === 2 && "enabled"}`}
            // style={{}}
            // onClick={() => setPage(2)}
            >
              BOGOTA
            </li>
          </ul>
        </div>
        <div className="slideIndicator">
          <ul className="dots">
            <li
              onClick={() => setSlide(1)}
              className={`dot ${currentSlide === 1 && "active"}`}
            ></li>
            <li
              onClick={() => setSlide(2)}
              className={`dot ${currentSlide === 2 && "active"}`}
            ></li>
            <li
              onClick={() => setSlide(3)}
              className={`dot ${currentSlide === 3 && "active"}`}
            ></li>
            <li
              onClick={() => setSlide(4)}
              className={`dot ${currentSlide === 4 && "active"}`}
            ></li>
          </ul>
        </div>
        {currentPage === 1 && <HANDYCAP currentSlide={currentSlide} />}
        {currentPage === 2 && <Bogota />}
      </div>
    </React.Fragment>
  );
}

export default Service;
