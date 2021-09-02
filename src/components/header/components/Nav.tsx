import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Nav.scss";

type BackgroundVideoProps = {
  isBgShowing: boolean;
};
function Nav({ isBgShowing }: BackgroundVideoProps) {
  const location = useLocation().pathname;
  return (
    <div className={`navGrid ${!isBgShowing && "turnColorBlack"}`}>
      <div className="about1">
        <NavLink exact to="/about/1">
          소개
        </NavLink>
      </div>
      <div className="about2">
        <NavLink exact to="/about/2">
          비전
        </NavLink>
      </div>
      <div className="about3">
        <NavLink exact to="/about/3">
          연혁
        </NavLink>
      </div>
      <div className="service1">
        <NavLink exact to="/service/1">
          HANDYCAB
        </NavLink>
      </div>
      <div className="service2">
        {/* <NavLink exact to="/service/2">
        </NavLink> */}
        <div className="disabled">BOGOTA</div>
      </div>
      <div className="study1">
        <NavLink exact to="/study/1">
          R&D
        </NavLink>
      </div>
      <div className="study2">
        <NavLink exact to="/study/2">
          용역
        </NavLink>
      </div>
      <div className="study3">
        <NavLink exact to="/study/3">
          저작권/특허
        </NavLink>
      </div>
      <div className="contact1">
        <NavLink exact to="/contact/1">
          공지/채용
        </NavLink>
      </div>
      <div className="contact2">
        <NavLink exact to="/contact/2">
          오시는 길
        </NavLink>
      </div>
      <div className="contact3">
        <NavLink exact to="/contact/3">
          문의하기
        </NavLink>
      </div>
      <div className="ceoInfo">대표자 : 김승현</div>
      <div className="companyInfo1">사업자등록번호 : 306-88-01318</div>
      <div className="companyInfo2">
        주소 : 02496 서울특별시 동대문구 망우로 12길 1, 7층
      </div>
      <div className="phoneInfo">TEL : 02-6490-5316</div>
      <div className="faxInfo">FAX : 050-7534-5819</div>
      <div className="infoDivider" />
      <div className="copyright">
        <span>COPYRIGHT © 2020 SMARTMOBILITY. All Rights Reserved.</span>
      </div>
    </div>
  );
}

Nav.defaultProps = {
  isBgShowing: false,
};
export default Nav;
