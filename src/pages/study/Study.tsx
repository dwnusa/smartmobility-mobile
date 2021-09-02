import React, { useEffect, useRef, useState } from "react";
import "./Study.scss";
import { Header2 } from "components";
import { RnD, Outsourcing, Patent } from "./";
function Study({ match, history }: { match: any; history: any }) {
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
