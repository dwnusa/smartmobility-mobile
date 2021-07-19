import React, { useEffect, useRef, useState } from "react";
import "./Study.scss";
import { Header2 } from "components";
import { RnD, Outsourcing, Patent } from "./";
function Study({ match, history }: { match: any; history: any }) {
  const targetPage = Number(match.params.page);
  const [currentPage, setPage] = useState<number>(1);
  // const divEl = useRef<HTMLDivElement | null>(null);
  // const divEl1 = useRef<HTMLDivElement | null>(null);
  // const divEl2 = useRef<HTMLDivElement | null>(null);
  // const divEl3 = useRef<HTMLDivElement | null>(null);
  // const [div1Center, setDiv1Center] = useState<number>(0);
  // const [div2Center, setDiv2Center] = useState<number>(0);
  // const [div3Center, setDiv3Center] = useState<number>(0);

  // useEffect(() => {
  //   const div1Top = divEl1?.current?.offsetTop;
  //   const div1Center = div1Top + divEl1?.current?.offsetHeight / 2;
  //   const div2Top = divEl2?.current?.offsetTop;
  //   const div2Center = div2Top + divEl2?.current?.offsetHeight / 2;
  //   const div3Top = divEl3?.current?.offsetTop;
  //   const div3Center = div3Top + divEl3?.current?.offsetHeight / 2;
  //   setDiv1Center(div1Center);
  //   setDiv2Center(div2Center);
  //   setDiv3Center(div3Center);
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
      case 3:
        // divEl3.current.scrollIntoView({ behavior: "smooth" });
        setPage(3);
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
  // };

  // const scrollToTop = (ref: any) => {
  //   const currentOffsetTop = ref.current.offsetTop;
  //   const component = document.querySelector(".study");
  //   component.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth",
  //   });
  //   if (currentOffsetTop <= div1Center) setPage(1);
  //   else if (currentOffsetTop <= div2Center) setPage(2);
  //   else if (currentOffsetTop <= div3Center) setPage(3);
  // };
  return (
    <React.Fragment>
      <Header2 />
      <div className="study">
        <div className="menu">
          <ul>
            <li
              className={`${currentPage === 1 && "enabled"}`}
              onClick={() => history.push("/study/1")}
            >
              {"R&D"}
            </li>
            <li
              className={`${currentPage === 2 && "enabled"}`}
              onClick={() => history.push("/study/2")}
            >
              {"Engineering"}
            </li>
            <li
              className={`${currentPage === 3 && "enabled"}`}
              onClick={() => history.push("/study/3")}
            >
              {"Patent · Copyright"}
            </li>
          </ul>
        </div>
        {currentPage === 1 && <RnD history={history} />}
        {currentPage === 2 && <Outsourcing />}
        {currentPage === 3 && <Patent />}
      </div>
    </React.Fragment>
  );
}

export default Study;
