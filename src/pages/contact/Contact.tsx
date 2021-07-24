import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import { Header2 } from "components";
import { Map, News, Board } from "./";
import { Redirect, useLocation } from "react-router-dom";

function Contact({ match, history }: { match: any; history: any }) {
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
      default:
        setPage(1);
    }
  }, [targetPage]);

  return (
    <React.Fragment>
      <Header2 />
      <div className="contact">
        <div className="menu">
          <ul>
            <li
              className={`${currentPage === 1 && "enabled"}`}
              onClick={() => history.push("/contact/1")}
            >
              공지/채용
            </li>
            <li
              className={`${currentPage === 2 && "enabled"}`}
              onClick={() => history.push("/contact/2")}
            >
              오시는길
            </li>
            <li
              className={`${currentPage === 3 && "enabled"}`}
              onClick={() => history.push("/contact/3")}
            >
              문의하기
            </li>
          </ul>
        </div>
        {currentPage === 1 && <News />}
        {currentPage === 2 && <Map />}
        {currentPage === 3 && <Board />}
      </div>
    </React.Fragment>
  );
}

export default Contact;
