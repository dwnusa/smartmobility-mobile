import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./News.scss";
const FilterableTable = require("react-filterable-table");

function News() {
  const divEl = useRef<HTMLDivElement | null>(null);
  const [modalState, setModalState] = useState<number | boolean>(false);
  useEffect(() => {
    const foundFilterDom = document.getElementsByClassName("header-row")[0];
    if (foundFilterDom) {
      // var newDiv1 = document.createElement("div");
      // newDiv1.innerHTML += "검색"
      // foundDom.appendChild(newDiv1)
      var newDiv2 = document.createElement("div");
      newDiv2.innerHTML += "글쓰기";
      foundFilterDom.appendChild(newDiv2);

      console.log(foundFilterDom);
    }
    const foundTableDom = document.querySelectorAll("table tbody tr");
    if (foundTableDom) {
      foundTableDom.forEach((e) =>
        e.addEventListener("click", handleTableClick)
      );
    }
    return () =>
      foundTableDom.forEach((e) =>
        e.removeEventListener("click", handleTableClick)
      );
  }, []);
  const handleTableClick = (e: any) => {
    const tableRow = e.currentTarget;
    const keyValue = tableRow.lastChild.textContent;
    setModalState(keyValue);
  };
  // console.log(modalState);
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const offsetHeight = divEl.current.offsetHeight;
  //   const offsetTop = divEl.current.offsetTop;
  //   console.log("News", offsetTop, offsetTop + offsetHeight / 2);
  // }, []);
  // useEffect(() => {}, []);
  const data = [
    {
      key: 21,
      id: 9999,
      name: "공지사항 테스트 입니다.",
      writer: "관리자0",
      date: "2020.04.10",
    },
    {
      key: 20,
      id: 9999,
      name: "공지사항 테스트 입니다.",
      writer: "관리자0",
      date: "2020.04.19",
    },
    {
      key: 19,
      id: 19,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자1",
      date: "2020.04.08",
    },
    {
      key: 18,
      id: 18,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자1",
      date: "2020.04.07",
    },
    {
      key: 17,
      id: 17,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자2",
      date: "2020.04.06",
    },
    {
      key: 16,
      id: 16,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자2",
      date: "2020.04.05",
    },
    {
      key: 15,
      id: 15,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자3",
      date: "2020.04.04",
    },
    {
      key: 14,
      id: 14,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자3",
      date: "2020.04.03",
    },
    {
      key: 13,
      id: 13,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.04.02",
    },
    {
      key: 12,
      id: 12,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.04.01",
    },

    {
      key: 11,
      id: 11,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자2",
      date: "2020.04.05",
    },
    {
      key: 10,
      id: 10,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자3",
      date: "2020.04.04",
    },
    {
      key: 9,
      id: 9,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자3",
      date: "2020.04.03",
    },
    {
      key: 8,
      id: 8,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.04.02",
    },
    {
      key: 7,
      id: 7,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.04.01",
    },

    {
      key: 6,
      id: 6,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.03.09",
    },
    {
      key: 5,
      id: 5,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.03.08",
    },
    {
      key: 4,
      id: 4,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.03.07",
    },
    {
      key: 3,
      id: 3,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.03.06",
    },
    {
      key: 2,
      id: 2,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.03.05",
    },
    {
      key: 1,
      id: 1,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.03.05",
    },
    {
      key: 0,
      id: 0,
      name: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자4",
      date: "2020.03.05",
    },
  ];

  const renderId = (props: any) => {
    const idStyle = {
      background: "#0A347F",
      color: "white",
      lineHeight: "40px",
      borderRadius: "20px",
    };
    if (props.value === 9999) return <div style={idStyle}>공지</div>;
    else return <div>{props.value}</div>;
  };
  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      render: renderId,
      name: "id",
      displayName: "번호",
      inputFilterable: true,
      sortable: false,
    },
    {
      name: "name",
      displayName: "제목",
      inputFilterable: true,
      sortable: false,
    },
    {
      name: "writer",
      displayName: "작성자",
      inputFilterable: true,
      exactFilterable: false,
      sortable: false,
    },
    {
      name: "date",
      displayName: "작성일",
      inputFilterable: true,
      exactFilterable: false,
      sortable: false,
    },
    { name: "key", displayName: "", visible: true },
  ];
  const sortedByDate = data.sort((a, b) => (b.date > a.date && 1) || -1);
  return (
    <div className="news" ref={divEl}>
      <FilterableTable
        namespace="NewsPost"
        initialSort="id"
        initialSortDir={false}
        data={sortedByDate}
        fields={fields}
        noRecordsMessage="There are no posts to display"
        noFilteredRecordsMessage="No matched on the list"
      />
      {modalState && (
        <div
          className="news-modal"
          onClick={(e) => {
            setModalState(false);
          }}
        >
          <div
            className="news-box"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Hello
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
