import React, { useEffect, useRef, useState } from "react";
import "./Board.scss";

function Board() {
  const policyContent = `개인정보의 처리목적\n('www.smartmobilityinc.co.kr'이하 '(주)스마트모빌러티')은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 
개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.

('(주)스마트모빌러티') 은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
○ 본 방침은부터 2019년 12월 1일부터 시행됩니다.

1. 개인정보의 처리 목적 ('www.smartmobilityinc.co.kr'이하 '(주)스마트모빌러티')은(는) 개인정보를 다음의 목적을 위해 처리합니다. 
처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.`;
  return (
    <div className="board">
      <div className="board-grid">
        <div className="board-name title">성함</div>
        <div className="board-name content">
          <input placeholder="홍길동" />
        </div>
        <div className="board-contact title">연락처</div>
        <div className="board-contact content">
          <input placeholder="010-0000-0000" />
        </div>
        <div className="board-email title">메일주소</div>
        <div className="board-email content">
          <input placeholder="abcd@smobility.com" />
        </div>
        <div className="board-msg title">문의내용</div>
        <div className="board-msg content">
          <textarea></textarea>
        </div>
        <div className="board-etc title">기타</div>
        <div className="board-etc content">
          <textarea></textarea>
        </div>
        <div className="board-policy title"></div>
        <div className="board-policy content">
          <textarea readOnly={true}>{policyContent}</textarea>
        </div>
        <div className="board-agreement check">
          <input type="checkbox" id="cb1" />
          <label htmlFor="cb1"></label>
          개인정보의 수집 및 이용목적에 동의합니다.
        </div>
        <div className="board-agreement button">
          <div className="board-agreement-button">문의하기</div>
        </div>
      </div>
    </div>
  );
}

export default Board;
