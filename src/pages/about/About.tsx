import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import { Header2 } from "components";
import { Greeting, Vision, History, Organization } from "./";

function About({ match, history }: { match: any; history: any }) {
  const targetPage = Number(match.params.page);
  const [currentPage, setPage] = useState<number>(1);
  useEffect(() => {
    switch (targetPage) {
      case 1:
        setPage(1);
        break;
      case 2:
        setPage(2);
        break;
      case 3:
        setPage(3);
        break;
      case 4:
        setPage(4);
        break;
      default:
        setPage(1);
    }
  }, [targetPage]);

  return (
    <React.Fragment>
      <Header2 />
      <div className="about">
        <div className="menu">
          <ul>
            <li
              className={`${currentPage === 1 && "enabled"}`}
              onClick={() => history.push("/about/1")}
            >
              인사말
            </li>
            <li
              className={`${currentPage === 2 && "enabled"}`}
              onClick={() => history.push("/about/2")}
            >
              비전
            </li>
            <li
              className={`${currentPage === 3 && "enabled"}`}
              onClick={() => history.push("/about/3")}
            >
              연혁
            </li>
            <li
              className={`${currentPage === 4 && "enabled"}`}
              onClick={() => history.push("/about/4")}
            >
              조직도
            </li>
          </ul>
        </div>
        {currentPage === 1 && <Greeting />}
        {currentPage === 2 && <Vision />}
        {currentPage === 3 && <History />}
        {currentPage === 4 && <Organization />}
      </div>
    </React.Fragment>
  );
}

export default About;
