import React, { useRef, useEffect, useState } from 'react';
import logoWhite from "media/logo-white.png";
import * as cards from "media";
import styles from './Mobile.module.scss';

import {
  Greeting0,
  History0,
  Organization0,
  Vision0,

  Handycab1,
  Trafficsafety1,
  Bogota1,

  RND2,
  Engineering2,
  Patent2,

  Recruit3,
  Map3,
  Call3,

  Subrnd1,
  Subrnd2,
  Subrnd3,
} from "./components";

const posMap = [
  { page: 0, name: "About", tabs: ["인사말", "비전", "연혁", "조직도"] },
  { page: 1, name: "Service", tabs: ["HANDYCAB", "교통안전지키미", "BOGOTA"] },
  { page: 2, name: "Project", tabs: ["R&D", "Engineering", "Patent·Copyright"] },
  { page: 3, name: "Contact", tabs: ["공지·채용", "오시는길", "문의하기"] }
];
function Mobile({ isPc }: { isPc: boolean }) {
  const [pos, setPos] = useState({ page: 0, tab: 0, stack: 0 });
  const [ishm2Scroll, setIshm2Scroll] = useState(false);
  const [ishm3Scroll, setIshm3Scroll] = useState(false);
  const hm1El = useRef<HTMLDivElement | null>(null);
  const hm2El = useRef<HTMLDivElement | null>(null);
  const hm3El = useRef<HTMLDivElement | null>(null);
  const hm4El = useRef<HTMLDivElement | null>(null);
  // useEffect(()=>{
  //   console.log(pos);
  // });
  return (
    <div ref={hm1El}
      className={styles["hm1"]}
      onScroll={() => {
        const coverRate = hm1El.current.scrollTop / hm1El.current.clientHeight;
        if (coverRate > 0.5) {
          setIshm2Scroll(true)
        } else {
          setIshm2Scroll(false)
        }
      }}>
      <img src={logoWhite} />
      <span>
        We think <br />
        for the <br />
        better world!
      </span>
      <div ref={hm2El} className={styles["hm2"]} >
        <div className={styles["hm2-handle"]}></div>
        <div ref={hm3El}
          onScroll={() => {
            const fullHeight = hm3El.current.scrollHeight - hm3El.current.clientHeight;
            const coverRate = hm3El.current.scrollTop / fullHeight;
            // console.log(coverRate, ishm3Scroll);
            if (coverRate > 0.9) {
              setIshm3Scroll(true)
            } else {
              setIshm3Scroll(false)
            }
          }}
          className={styles["hm2-body"]}
          style={{ overflow: ishm2Scroll ? "scroll" : "hidden" }}
        >
          <div className={styles["hm3-cards-container"]}>
            {/* <img src={cards.home01active} /> */}
            <img onClick={() => { setPos({ ...pos, page: 2, tab: 0, stack: 1 }); hm4El.current.scrollIntoView({ behavior: 'smooth' }) }} src={(pos.page === 2 && pos.stack === 1) ? cards.home01active : cards.home01inactive} />
            {/* <img src={cards.home02active} /> */}
            <img onClick={() => { setPos({ ...pos, page: 2, tab: 0, stack: 2 }); hm4El.current.scrollIntoView({ behavior: 'smooth' }) }} src={(pos.page === 2 && pos.stack === 2) ? cards.home02active : cards.home02inactive} />
            {/* <img src={cards.home03active} /> */}
            <img onClick={() => { setPos({ ...pos, page: 2, tab: 0, stack: 3 }); hm4El.current.scrollIntoView({ behavior: 'smooth' }) }} src={(pos.page === 2 && pos.stack === 3) ? cards.home03active : cards.home03inactive} />
          </div>
          <div className={styles["hm3-main-container"]}>
            <div className={styles["hm3-menu-items"]}>
              {posMap.map((v, i) =>
                <div className={pos.page == i && styles["active"]} onClick={() => { hm4El.current.scrollIntoView({ behavior: 'smooth' }); setPos({ ...pos, page: i, tab: 0, stack: 0 }) }}>{v.name}</div>
              )}
            </div>
            <div className={styles["hm3-menu-subitems"]}>
              {posMap[pos.page].tabs.map((v, i) =>
                <div className={pos.tab == i && styles["active"]}
                  onClick={() => {
                    if (pos.page === 1 && i === 2) {
                      // alert("hone")
                    } else {
                      hm4El.current.scrollIntoView({ behavior: 'smooth' });
                      setPos({ ...pos, tab: i, stack: 0 })
                    }
                  }}
                >
                  {v}
                </div>
              )}
            </div>
            <div ref={hm4El} className={styles["hm3-body-container"]} style={{ overflow: ishm3Scroll ? "scroll" : "hidden" }}>

              {(pos.page === 0) && pos.tab === 0 && <Greeting0 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 0) && pos.tab === 1 && <Vision0 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 0) && pos.tab === 2 && <History0 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 0) && pos.tab === 3 && <Organization0 ishm3Scroll={ishm3Scroll} />}

              {(pos.page === 1) && pos.tab === 0 && <Handycab1 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 1) && pos.tab === 1 && <Trafficsafety1 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 1) && pos.tab === 2 && <Bogota1 ishm3Scroll={ishm3Scroll} />}

              {(pos.page === 2) && pos.tab === 0 && pos.stack === 0 && <RND2 ishm3Scroll={ishm3Scroll} setPos={setPos} pos={pos} />}
              {((pos.page === 2) && pos.tab === 0) && pos.stack === 1 && <Subrnd1 ishm3Scroll={ishm3Scroll} setPos={setPos} pos={pos} />}
              {((pos.page === 2) && pos.tab === 0) && pos.stack === 2 && <Subrnd2 ishm3Scroll={ishm3Scroll} setPos={setPos} pos={pos} />}
              {((pos.page === 2) && pos.tab === 0) && pos.stack === 3 && <Subrnd3 ishm3Scroll={ishm3Scroll} setPos={setPos} pos={pos} />}
              {(pos.page === 2) && pos.tab === 1 && <Engineering2 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 2) && pos.tab === 2 && <Patent2 ishm3Scroll={ishm3Scroll} setPos={setPos} pos={pos} />}

              {(pos.page === 3) && pos.tab === 0 && <Recruit3 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 3) && pos.tab === 1 && <Map3 ishm3Scroll={ishm3Scroll} />}
              {(pos.page === 3) && pos.tab === 2 && <Call3 ishm3Scroll={ishm3Scroll} />}

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Mobile;
