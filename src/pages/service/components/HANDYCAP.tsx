import React, { useEffect, useRef, useState } from "react";
import "./HANDYCAP.scss";
import * as cards from "media";

function HANDYCAP({ currentSlide }: { currentSlide: number }) {
  return (
    <React.Fragment>
      {currentSlide === 1 && 
      <div className="handycap page1" style={{backgroundImage:`url(${cards.handycap01_1})`}}>
        <div className="handycap-textbox">
          <div>HANDYCAB</div>
          <div>교통약자 대중교통 이동편의 서비스</div>
          <div>
            <div>IOS</div>
            <div>Android</div>
          </div>
        </div>
      </div>}
      {currentSlide === 2 && 
      <div className="handycap page2" style={{backgroundImage:`url(${cards.handycap02_1})`}}>
        <div className="handycap-textbox">
          <div>간단하고 간편하게</div>
          <div>맞춤형 경로제공</div>
          <div>장애인 편의시설 접근과 환승이 가장 편리한 경로를 탐색하여 나에게 맞는 경로를 선택할 수 있습니다.</div>
        </div>
      </div>}
      {currentSlide === 3 && 
      <div className="handycap page3" style={{backgroundImage:`url(${cards.handycap03_1})`}}>
        <div className="handycap-textbox">
          <div>효율적이고 빠르게</div>
          <div>승강기형 출구 알림</div>
          <div>장애인 편의시설 접근과 환승이 가장 편리한 경로를 탐색하여 나에게 맞는 경로를 선택할 수 있습니다.</div>
        </div>
      </div>}
      {currentSlide === 4 && 
      <div className="handycap page4" style={{backgroundImage:`url(${cards.handycap04_1})`}}>
        <div className="handycap-textbox">
          <div>이동에 필요한 전화번호 제공</div>
          <div>장애인 콜택시 & 대중교통 번호</div>
          <div>장애인콜택시와 역무원 호출 등의 대중교통 전화 시스템을 함께 제공하여 이동과정을 편리하게 합니다.</div>
        </div>
      </div>}
    </React.Fragment>
  );
}

export default HANDYCAP;
