import React from 'react';
import * as cards from "media";
import styles from './patent.module.scss';

function Patent2({ishm3Scroll, setPos, pos}) {
  return (
    <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
      <div className={styles["hm3-box1"]} >
        {/* <div style={{zIndex:1, border:"1px red solid", position:"absolute", top:"1%", right:"5%", height:"100%", width:"19vw"}}> */}
          {/* <div onClick={()=>setPos({...pos, stack:0})} style={{zIndex:1, position:"absolute", top:"1%", right:"5%", width:"19vw", height:"19vw", border:"1px red solid"}}></div>
          <div onClick={()=>setPos({...pos, stack:1})} style={{zIndex:1, position:"absolute", top:"12%", right:"5%", width:"19vw", height:"19vw", border:"1px red solid"}}></div>
          <div onClick={()=>setPos({...pos, stack:2})} style={{zIndex:1, position:"absolute", top:"24%", right:"5%", width:"19vw", height:"19vw", border:"1px red solid"}}></div>
          <div onClick={()=>setPos({...pos, stack:3})} style={{zIndex:1, position:"absolute", top:"35%", right:"5%", width:"19vw", height:"19vw", border:"1px red solid"}}></div>
          <div onClick={()=>setPos({...pos, stack:4})} style={{zIndex:1, position:"absolute", top:"47%", right:"5%", width:"19vw", height:"19vw", border:"1px red solid"}}></div> */}
        {/* </div> */}
        <div>
          <div>
            <div onClick={()=>setPos({...pos, stack:0})}></div>
            <div onClick={()=>setPos({...pos, stack:1})}></div>
            <div onClick={()=>setPos({...pos, stack:2})}></div>
            <div onClick={()=>setPos({...pos, stack:3})}></div>
            <div onClick={()=>setPos({...pos, stack:4})}></div>
          </div>
          <img src={cards.m_patent1} style={{display:pos.stack === 0 ? "block":"none"}}/>
          <img src={cards.m_patent2} style={{display:pos.stack === 1 ? "block":"none"}}/>
          <img src={cards.m_patent3} style={{display:pos.stack === 2 ? "block":"none"}}/>
          <img src={cards.m_patent4} style={{display:pos.stack === 3 ? "block":"none"}}/>
          <img src={cards.m_patent5} style={{display:pos.stack === 4 ? "block":"none"}}/>
        {/* <img src={cards.m_patent2} style={{visibility:pos.stack === 1 ? "visible":"hidden"}}/>
        <img src={cards.m_patent3} style={{visibility:pos.stack === 2 ? "visible":"hidden"}}/>
        <img src={cards.m_patent4} style={{visibility:pos.stack === 3 ? "visible":"hidden"}}/>
        <img src={cards.m_patent5} style={{visibility:pos.stack === 4 ? "visible":"hidden"}}/> */}
        </div>
      </div>
      <div className={styles["hm3-footer"]}>
        주소 : 02496 서울특별시 동대문구 망우로 12길 1, 7층 TEL :
        <br />
        02-6490-5316 / FAX : 050-7534-5819
        <br />
        <br />
        COPYRIGHT © 2020 SMARTMOBILITY. All Rights Reserved.
      </div>
    </div>
  );
}

export default Patent2;