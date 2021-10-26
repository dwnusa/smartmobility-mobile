import React from 'react';
import * as cards from "media";

function subrnd2({ishm3Scroll, setPos, pos}) {
  return (
    <div style={{overflow:"hidden",position:"absolute", top:"-20%", width:"100%"}}>
      <div onClick={()=>setPos({...pos, stack:0})} style={{zIndex:1, position:"absolute", top:"9%", left:"10%", width:"10vw", height:"10vw"}}></div>
      <img src={cards.m_subrnd2_title} alt="" style={{marginLeft:"10%", position:"absolute", top:"9%", width:"80%"}}/>
      <img src={cards.m_subrnd2} alt="" style={{width:"100%"}}/>
    </div>
  );
}

export default subrnd2;