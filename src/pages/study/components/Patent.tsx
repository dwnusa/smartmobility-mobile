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
};

function Patent() {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [item, setItem] = React.useState<
    Array<{
      id: number;
      title: string;
      title1: string;
      content1: string;
      title2: string;
      content2: string;
      title3: string;
      content3: string;
      title4: string;
      content4: string;
      title5: string;
      content5: string;
      title6: string;
      content6: string;
      title7: string;
      content7: string;
    }>
  >([
    {
      id: 0,
      title: "특허권",
      title1: "특허명",
      content1: "-",
      title2: "특허번호",
      content2: "-",
      title3: "출원일",
      content3: "-",
      title4: "등록일",
      content4: "-",
      title5: "발명명칭",
      content5: "-",
      title6: "발명자",
      content6: "-",
      title7: "특허권자",
      content7: "(주)스마트모빌러티",
    },
    {
      id: 1,
      title: "특허권",
      title1: "특허명",
      content1: "제 10-1473103호",
      title2: "특허번호",
      content2: "제 10-2013-0070084호",
      title3: "출원일",
      content3: "2013-06-19",
      title4: "등록일",
      content4: "2014-12-09",
      title5: "발명명칭",
      content5: "개별통행자기반 교통수요예측시스템",
      title6: "발명자",
      content6: "이승재, 신흥권, 김주영, 유연승",
      title7: "특허권자",
      content7: "(주)스마트모빌러티",
    },
    {
      id: 2,
      title: "특허권",
      title1: "특허명",
      content1: "제 10-1885031호",
      title2: "특허번호",
      content2: "제 10-2017-0064134호",
      title3: "출원일",
      content3: "2017-05-24",
      title4: "등록일",
      content4: "2018-07-27",
      title5: "발명명칭",
      content5:
        "교통 네트워크에 기반하여 질병 위험 지역을 감시하고 정보를 제공하는 장치 및 방법",
      title6: "발명자",
      content6: "이승재, 김주영, 김승현",
      title7: "특허권자",
      content7: "(주)스마트모빌러티",
    },
    {
      id: 3,
      title: "특허권",
      title1: "특허명",
      content1: "제 10-1965052호",
      title2: "특허번호",
      content2: "제 10-2017-0046699호",
      title3: "출원일",
      content3: "2017-04-11",
      title4: "등록일",
      content4: "2019-03-27",
      title5: "발명명칭",
      content5:
        "V2X 기반 동적 통행 배정을 위한 장치, 이를 위한 방법 및 이 방법을 수행하는 프로그램이 기록된 컴퓨터 판독 가능한 기록매체",
      title6: "발명자",
      content6: "이승재, 김주영, 박상웅",
      title7: "특허권자",
      content7: "(주)스마트모빌러티",
    },
    {
      id: 4,
      title: "저작권",
      title1: "저작물 제호",
      content1: "대중교통 전염병 안전경로 탐색 시스템",
      title2: "저작물 종류",
      content2: "컴퓨터프로그램저작물>응용프로그램>과학기술",
      title3: "법인명",
      content3: "서울시립대학교 산학협력단",
      title4: "법인등록번호",
      content4: "264171-0006273",
      title5: "창작연월일",
      content5: "2018-03-01",
      title6: "등록연월일",
      content6: "2018-09-20",
      title7: "",
      content7: "",
    },
    {
      id: 5,
      title: "저작권",
      title1: "저작물 제호",
      content1: "교통약자 맞춤경로 안내 시스템",
      title2: "저작물 종류",
      content2: "컴퓨터프로그램저작물>응용프로그램>과학기술",
      title3: "법인명",
      content3: "서울시립대학교 산학협력단",
      title4: "법인등록번호",
      content4: "264171-0006273",
      title5: "창작연월일",
      content5: "2018-05-01",
      title6: "등록연월일",
      content6: "2018-09-20",
      title7: "",
      content7: "",
    },
  ]);
  let imageItem = [
    cards.patent01,
    cards.patent01,
    cards.patent02,
    cards.patent03,
    cards.patent04,
    cards.patent05,
  ];
  // console.log(item[1].name);
  return (
    <div className="patent">
      <div className="patent-flex-top">
        <div
          className="patent-top-left"
          style={{ backgroundImage: `url(${imageItem[activeItem]})` }}
        >
          <img src={imageItem[activeItem]} />
        </div>
        <div className="patent-top-right">
          <div className="content-text">
            <div className="content-title">
              <div>{item[activeItem].title}</div>
            </div>
            <div className="content-name">{item[activeItem].title1}</div>
            <div className="content-name-right">
              {item[activeItem].content1}
            </div>
            <div className="content-number">{item[activeItem].title2}</div>
            <div className="content-number-right">
              {item[activeItem].content2}
            </div>
            <div className="content-date1">{item[activeItem].title3}</div>
            <div className="content-date1-right">
              {item[activeItem].content3}
            </div>
            <div className="content-date2">{item[activeItem].title4}</div>
            <div className="content-date2-right">
              {item[activeItem].content4}
            </div>
            <div className="content-description">{item[activeItem].title5}</div>
            <div className="content-description-right">
              {item[activeItem].content5}
            </div>
            <div className="content-inventor">{item[activeItem].title6}</div>
            <div className="content-inventor-right">
              {item[activeItem].content6}
            </div>
            <div className="content-owner">{item[activeItem].title7}</div>
            <div className="content-owner-right">
              {item[activeItem].content7}
            </div>
          </div>
        </div>
      </div>
      <div className="patent-flex-bottom">
        <div
          className={`menu-thumbnail ${activeItem === 1 && "activated"}`}
          onClick={(e) => {
            setActiveItem(1);
          }}
        >
          <div className="menu-patent">특허권</div>
          {activeItem === 1 ? (
            <img src={cards.patent01_2} />
          ) : (
            <img
              src={cards.patent01_1}
              onMouseOut={(e) => (e.currentTarget.src = cards.patent01_1)}
              onMouseOver={(e) => (e.currentTarget.src = cards.patent01_2)}
            />
          )}
        </div>
        <div
          className={`menu-thumbnail ${activeItem === 2 && "activated"}`}
          onClick={(e) => {
            setActiveItem(2);
          }}
        >
          <div className="menu-patent"></div>
          {activeItem === 2 ? (
            <img src={cards.patent02_2} />
          ) : (
            <img
              src={cards.patent02_1}
              onMouseOut={(e) => (e.currentTarget.src = cards.patent02_1)}
              onMouseOver={(e) => (e.currentTarget.src = cards.patent02_2)}
            />
          )}
        </div>
        <div
          className={`menu-thumbnail ${activeItem === 3 && "activated"}`}
          onClick={(e) => {
            setActiveItem(3);
          }}
        >
          <div className="menu-patent"></div>
          {activeItem === 3 ? (
            <img src={cards.patent03_2} />
          ) : (
            <img
              src={cards.patent03_1}
              onMouseOut={(e) => (e.currentTarget.src = cards.patent03_1)}
              onMouseOver={(e) => (e.currentTarget.src = cards.patent03_2)}
            />
          )}
        </div>
        <div
          className={`menu-thumbnail ${activeItem === 4 && "activated"}`}
          onClick={(e) => {
            setActiveItem(4);
          }}
        >
          <div className="menu-copyright">저작권</div>
          {activeItem === 4 ? (
            <img src={cards.patent04_2} />
          ) : (
            <img
              src={cards.patent04_1}
              onMouseOut={(e) => (e.currentTarget.src = cards.patent04_1)}
              onMouseOver={(e) => (e.currentTarget.src = cards.patent04_2)}
            />
          )}
        </div>
        <div
          className={`menu-thumbnail ${activeItem === 5 && "activated"}`}
          onClick={(e) => {
            setActiveItem(5);
          }}
        >
          <div className="menu-copyright"></div>
          {activeItem === 5 ? (
            <img src={cards.patent05_2} />
          ) : (
            <img
              src={cards.patent05_1}
              onMouseOut={(e) => (e.currentTarget.src = cards.patent05_1)}
              onMouseOver={(e) => (e.currentTarget.src = cards.patent05_2)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Patent;
