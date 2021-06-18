import React, { useEffect, useRef, useState } from "react";
import "./HANDYCAP.scss";
import * as cards from "media";

function HANDYCAP() {
  return (
    <React.Fragment>
      <div className="handycap" style={{backgroundImage:`url(${cards.handycap01_1})`}}>
        <div className="handycap-textbox">
          <div>HANDYCAP</div>
          <div>교통약자 대중교통 이동편의 서비스</div>
          <div>
            <div>IOS</div>
            <div>Android</div>
          </div>
        </div>
      </div>
      <div className="handycap" style={{backgroundImage:`url(${cards.handycap01_1})`}}>
        <div className="handycap-textbox">
          <div>HANDYCAP</div>
          <div>교통약자 대중교통 이동편의 서비스</div>
          <div>
            <div>IOS</div>
            <div>Android</div>
          </div>
        </div>
      </div>
      <div className="handycap" style={{backgroundImage:`url(${cards.handycap01_1})`}}>
        <div className="handycap-textbox">
          <div>HANDYCAP</div>
          <div>교통약자 대중교통 이동편의 서비스</div>
          <div>
            <div>IOS</div>
            <div>Android</div>
          </div>
        </div>
      </div>
      <div className="handycap" style={{backgroundImage:`url(${cards.handycap01_1})`}}>
        <div className="handycap-textbox">
          <div>HANDYCAP</div>
          <div>교통약자 대중교통 이동편의 서비스</div>
          <div>
            <div>IOS</div>
            <div>Android</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HANDYCAP;
