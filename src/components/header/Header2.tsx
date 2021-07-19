import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header2.scss";
import { Nav2 } from "./";
import logoBlack from "media/logo-black.png";
import logoWhite from "media/logo-white.png";
import logoText from "media/logo-text.png";

type BackgroundVideoProps = {
  isBgShowing: boolean;
  setBgShowing: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};
function Header2({ isBgShowing, setBgShowing }: BackgroundVideoProps) {
  const [isLogoHover, setLogoHover] = useState<boolean>(false);
  const [isMenuHover, setMenuHover] = useState<number>(0);
  const location = useLocation().pathname;
  // console.log(isMenuHover)
  return (
    <div className={`header2 ${location == "/" && "main"} ${!isBgShowing && "turnBgWhite"}`} onMouseLeave={()=>setMenuHover(0)}>
      <Link to="/">
        <img className={`${!isBgShowing && "turnBlue"}`} src={logoWhite} onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)}/> 
        <img className={`${!isBgShowing && "turnBlue"}`} src={logoBlack} onClick={() => setBgShowing(true)} onMouseEnter={()=>setLogoHover(true)} onMouseLeave={()=>setLogoHover(false)}/>
      </Link>
      {isLogoHover && <img className={`logo-text`} src={logoText}/>}
      <ul>
        <li onMouseEnter={()=>setMenuHover(1)}>
          <NavLink className={`${location == "/" && "main"} ${ !isBgShowing && "turnColorBlack" }`} exact to="/about" >
            About
          </NavLink>
          {/* {isMenuHover === 1 && <div className={`header2-menu ${isMenuHover === 1 && "about"}`} onMouseLeave={()=>setMenuHover(0)}>
            <span>{`인사말`}</span> 
            <span>{`비전`}</span> 
            <span>{`연혁`}</span> 
            <span>{`조직도`}</span>
            </div>} */}
        </li>
        <li onMouseEnter={()=>setMenuHover(2)}>
          <NavLink className={`${location == "/" && "main"} ${ !isBgShowing && "turnColorBlack" }`} exact to="/service" >
            Service
          </NavLink>
          
          {/* {isMenuHover === 2 && <div className={`header2-menu ${isMenuHover === 2 && "service"}`} onMouseLeave={()=>setMenuHover(0)}>
            <span>{`HANDYCAP`}</span> 
            <span>{`BOGOTA`}</span> 
            </div>} */}
        </li>
        <li onMouseEnter={()=>setMenuHover(3)}>
          <NavLink className={`${location == "/" && "main"} ${ !isBgShowing && "turnColorBlack" }`} exact to="/study" >
            Project
          </NavLink>
          
          {/* {isMenuHover === 3 && <div className={`header2-menu ${isMenuHover === 3 && "project"}`} onMouseLeave={()=>setMenuHover(0)}>
            <span>{`R&D`}</span> 
            <span>{`Engineering`}</span> 
            <span>{`Patent · Copyright`}</span> 
            </div>} */}
        </li>
        <li onMouseEnter={()=>setMenuHover(4)}>
          <NavLink className={`${location == "/" && "main"} ${ !isBgShowing && "turnColorBlack" }`} exact to="/contact" >
            Contact
          </NavLink>
          
          {/* {isMenuHover === 4 && <div className={`header2-menu ${isMenuHover === 4 && "contact"}`} onMouseLeave={()=>setMenuHover(0)}>
            <span>{`공지 · 채용`}</span> 
            <span>{`오시는길`}</span> 
            <span>{`문의하기`}</span> 
            </div>} */}
        </li>
        {isMenuHover === 1 && <div className={`header2-menu ${isMenuHover === 1 && "about2"}`}>
          <NavLink exact to="/about/1" >{`인사말`}</NavLink>
          <NavLink exact to="/about/2" >{`비전`}</NavLink>
          <NavLink exact to="/about/3" >{`연혁`}</NavLink>
          <NavLink exact to="/about/4" >{`조직도`}</NavLink>
          </div>}
        {isMenuHover === 2 && <div className={`header2-menu ${isMenuHover === 2 && "service2"}`}>
          <NavLink exact to="/service/1" >{`HANDYCAP`}</NavLink>
          <span>{`BOGOTA`}</span>
          </div>}
        {isMenuHover === 3 && <div className={`header2-menu ${isMenuHover === 3 && "project2"}`}>
          <NavLink exact to="/study/1" >{`R&D`}</NavLink>
          <NavLink exact to="/study/2" >{`Engineering`}</NavLink>
          <NavLink exact to="/study/3" >{`Patent · Copyright`}</NavLink>
          </div>}
        {isMenuHover === 4 && <div className={`header2-menu ${isMenuHover === 4 && "contact2"}`}>
          <NavLink exact to="/contact/1" >{`공지 · 채용`}</NavLink>
          <NavLink exact to="/contact/2" >{`오시는길`}</NavLink>
          <NavLink exact to="/contact/3" >{`문의하기`}</NavLink>
          </div>}
      </ul>
    </div>
  );
}

Header2.defaultProps = {
  isBgShowing: false,
  setBgShowing: () => console.warn("setBgShowing not defined"),
};
export default Header2;
