import React, { useEffect, useRef, useState } from "react";
import "./Patent.scss";
import * as cards from "media";
type patentContentType = {
  id: number;
  name: string;
  number: string;
  date1: string;
  date2: string;
  description: string;
  inventor: string;
}
function Patent() {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [item, setItem] = React.useState<
    Array<{
      id: number,
      name: string,
      number: string,
      date1: string,
      date2: string,
      description: string,
      inventor: string,
    }>
  >([
    { id: 0, name: "-", number: "-", date1: "-", date2: "-", description: "-", inventor: "-" },
    { id: 1, name: "제 10-1473103호", number: "제 10-2013-0070084호", date1: "2013-06-19", date2: "2014-12-09", description: "개별통행자기반 교통수요예측시스템", inventor: "이승재, 신흥권, 김주영, 유연승" },
    { id: 2, name: "제 10-1885031호", number: "제 10-2017-0064134호", date1: "2017-05-24", date2: "2018-07-27", description: "교통 네트워크에 기반하여 질병 위험 지역을 감시하고 정보를 제공하는 장치 및 방법", inventor: "이승재, 김주영, 김승현" },
    { id: 3, name: "제 10-1965052호", number: "제 10-2017-0046699호", date1: "2017-04-11", date2: "2019-03-27", description: "V2X 기반 동적 통행 배정을 위한 장치, 이를 위한 방법 및 이 방법을 수행하는 프로그램이 기록된 컴퓨터 판독 가능한 기록매체", inventor: "이승재, 김주영, 박상웅" },
    { id: 4, name: "대중교통 전염병 안전경로 탐색 시스템", number: "컴퓨터프로그램저작물>응용프로그램>과학기술", date1: "서울시립대학교 산학협력단", date2: "264171-0006273", description: "2018-03-01", inventor: "2018-09-20" },
    { id: 5, name: "교통약자 맞춤경로 안내 시스템", number: "컴퓨터프로그램저작물>응용프로그램>과학기술", date1: "서울시립대학교 산학협력단", date2: "264171-0006273", description: "2018-05-01", inventor: "2018-09-20" },
  ])
  let imageItem = [
    cards.patent01,
    cards.patent01,
    cards.patent02,
    cards.patent03,
    cards.patent04,
    cards.patent05,
  ]
  console.log(item[1].name);
  return (
    <div className="patent">
      <div className="patent-grid">
        <div className="main-left" style={{ backgroundImage: `url(${imageItem[activeItem]})` }}>
          {/* <img src={imageItem[activeItem]} height="100%"/> */}
        </div>
        <div className="content-right">
          <div className="content-text">
            <div className="content-title">
              <div>특허권</div>
            </div>
            <div className="content-name">특허명</div>
            <div className="content-name-right">{item[activeItem].name}</div>
            <div className="content-number">출원번호</div>
            <div className="content-number-right">{item[activeItem].number}</div>
            <div className="content-date1">출원일</div>
            <div className="content-date1-right">{item[activeItem].date1}</div>
            <div className="content-date2">등록일</div>
            <div className="content-date2-right">{item[activeItem].date2}</div>
            <div className="content-description">발명명칭</div>
            <div className="content-description-right">{item[activeItem].description}</div>
            <div className="content-inventor">발명자</div>
            <div className="content-inventor-right">{item[activeItem].inventor}</div>
          </div>
        </div>
        <div className="menu-patent">특허권</div>
        <div className="menu-copyright">저작권</div>
        <div className="menu-bottom" >
          <div className={`menu-thumbnail ${activeItem === 1 && "activated"}`} onClick={e => { setActiveItem(1) }}>
            {activeItem === 1 ? <img src={cards.patent01_2} />:<img 
            src={cards.patent01_1}
              onMouseOut={e => (e.currentTarget.src = cards.patent01_1)}
              onMouseOver={e => (e.currentTarget.src = cards.patent01_2)} 
              />}
          </div>
          <div className={`menu-thumbnail ${activeItem === 2 && "activated"}`} onClick={e => { setActiveItem(2) }}>
            {activeItem === 2 ? <img src={cards.patent02_2} />:<img 
            src={cards.patent02_1}
              onMouseOut={e => (e.currentTarget.src = cards.patent02_1)}
              onMouseOver={e => (e.currentTarget.src = cards.patent02_2)} 
              />}
          </div>
          <div className={`menu-thumbnail ${activeItem === 3 && "activated"}`} onClick={e => { setActiveItem(3) }}>
            {activeItem === 3 ? <img src={cards.patent03_2} />:<img 
            src={cards.patent03_1}
              onMouseOut={e => (e.currentTarget.src = cards.patent03_1)}
              onMouseOver={e => (e.currentTarget.src = cards.patent03_2)} 
              />}
          </div>
          <div className={`menu-thumbnail ${activeItem === 4 && "activated"}`} onClick={e => { setActiveItem(4) }}>
            {activeItem === 4 ? <img src={cards.patent04_2} />:<img 
            src={cards.patent04_1}
              onMouseOut={e => (e.currentTarget.src = cards.patent04_1)}
              onMouseOver={e => (e.currentTarget.src = cards.patent04_2)} 
              />}
          </div>
          <div className={`menu-thumbnail ${activeItem === 5 && "activated"}`} onClick={e => { setActiveItem(5) }}>
            {activeItem === 5 ? <img src={cards.patent05_2} />:<img 
            src={cards.patent05_1}
              onMouseOut={e => (e.currentTarget.src = cards.patent05_1)}
              onMouseOver={e => (e.currentTarget.src = cards.patent05_2)} 
              />}
          </div>
        </div>


        {/* <div style={{ backgroundImage: `url(${patent01})` }} className={`menu-thumbnail ${activeItem === 1 && "activated"}`}></div>
        {activeItem === 2 && <div style={{ backgroundImage: `url(${iconCheck})` }} className="menu-check"></div>}
        <div style={{ backgroundImage: `url(${patent01})` }} className={`menu-thumbnail ${activeItem === 1 && "activated"}`}></div>
        {activeItem === 3 && <div style={{ backgroundImage: `url(${iconCheck})` }} className="menu-check"></div>} */}
        {/* <img className={`menu-thumbnail ${activeItem === 1 && "activated"}`} src={patent01} width="100%" />
        {activeItem === 1 && <img className="menu-check" src={iconCheck} />} */}
        {/* <div className="menu-bottom" onClick={e => { setActiveItem(2) }}>
          <img className={`menu-thumbnail ${activeItem === 2 && "activated"}`} src={patent02} width="100%" />
          {activeItem === 2 && <img className="menu-check" src={iconCheck} />}
        </div>
        <div className="menu-bottom" onClick={e => { setActiveItem(3) }}>
          <img className={`menu-thumbnail ${activeItem === 3 && "activated"}`} src={patent03} width="100%" />
          {activeItem === 3 && <img className="menu-check" src={iconCheck} />}
        </div>
        <div className="menu-bottom" onClick={e => { setActiveItem(4) }}>
          <img className={`menu-thumbnail ${activeItem === 4 && "activated"}`} src={patent04} width="100%" />
          {activeItem === 4 && <img className="menu-check" src={iconCheck} />}
        </div>
        <div className="menu-bottom" onClick={e => { setActiveItem(5) }}>
          <img className={`menu-thumbnail ${activeItem === 5 && "activated"}`} src={patent05} width="100%" />
          {activeItem === 5 && <img className="menu-check" src={iconCheck} />}
        </div> */}
      </div>
    </div>
  );
}

export default Patent;
