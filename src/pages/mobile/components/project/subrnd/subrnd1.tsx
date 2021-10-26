import React from 'react';
import * as cards from "media";

function subrnd1({ishm3Scroll, setPos, pos}) {
  return (
    <div style={{overflow:"hidden",position:"absolute", top:"-20%", width:"100%"}}>
      <div onClick={()=>setPos({...pos, stack:0})} style={{zIndex:1,position:"absolute", top:"12%", left:"10%", width:"10vw", height:"10vw"}}></div>
      <img src={cards.m_subrnd1_title} alt="" style={{marginLeft:"10%", position:"absolute", top:"12%", width:"80%"}}/>
      <img src={cards.m_subrnd1} alt="" style={{width:"100%"}}/>
    </div>
  );
}

export default subrnd1;