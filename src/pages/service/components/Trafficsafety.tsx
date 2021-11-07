import React, { useEffect, useRef, useState } from "react";
import "./Trafficsafety.scss";
import * as cards from "media";

function Trafficsafety({ currentSlide }: { currentSlide: number }) {
  // console.log(currentSlide);
  return (
    <React.Fragment>
      {currentSlide === 1 &&
        <div className="trafficsafety page1">
          <div className="trafficsafety-textbox">
            <div>
              <img src={cards.trafficsafety_bg1_icon1} alt="" />
              <div>
                <div>서울시 교통약자 이동편의 서비스</div>
                <div>교통안전지키미</div>
              </div>
            </div>
            <div>
              <span>서울시립대 교통계획 연구실 X Smartmobility</span>
            </div>
          </div>
        </div>}
      {currentSlide === 2 &&
        <div className="trafficsafety page2">
          <div className="trafficsafety-text-img-box">
            <img src={cards.trafficsafety_bg2_textbox} alt="" />
            <div className="box-text1">
              <div>서울특별시</div> 
              <div style={{color:"#1976D3"}}>COVID-19 종합</div> 
              <div><span style={{color:"#1976D3"}}>상황</span> 분석</div>
            </div>
            <div className="box-text2">
              <div>서울특별시</div>
              <div style={{color:"#1976D3"}}>교통약자</div>
              <div><span style={{color:"#1976D3"}}>맞춤 경로</span> 검색</div>
            </div>
          </div>
          <img className="trafficsafety-second-img" src={cards.trafficsafety_bg2_img2} alt="" />
          <img className="trafficsafety-top-img" src={cards.trafficsafety_bg2_img1} alt="" />
          <div className="trafficsafety-textonly">
            <div>{"교통안전지키미는 서울지역 COVID-19 종합 상황 분석을 기반으로, 두 지점간의 이동경로를 최적화하는 알고리즘을보완·개선하여 교통약자들의 안전한 이동을 위한 효율적인맞춤경로를 제공합니다."}</div>
            <div><span>{"APP 사용해보러 가기"}</span><img src={cards.blue_right_arrow} alt=""/></div>
          </div>
        </div>}
    </React.Fragment>
  );
}

export default Trafficsafety;
