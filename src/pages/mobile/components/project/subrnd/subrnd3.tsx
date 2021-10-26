import React from 'react';
import * as cards from "media";

function subrnd3({ishm3Scroll, setPos, pos}) {
  return (
    <div style={{overflow:"hidden",position:"absolute", top:"-20%"}}>
      <div onClick={()=>setPos({...pos, stack:0})} style={{zIndex:1, position:"absolute", top:"7%", left:"10%", width:"10vw", height:"10vw"}}></div>
      <img src={cards.m_subrnd3_title} alt="" style={{marginLeft:"10%", position:"absolute", top:"7%", width:"80%"}}/>
      <img src={cards.m_subrnd3} alt="" style={{width:"100%"}}/>
    </div>
  );
}

export default subrnd3;