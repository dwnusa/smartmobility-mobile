import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./News.scss";
const FilterableTable = require('react-filterable-table');

function News() {
  const divEl = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const foundDom = document.getElementsByClassName('header-row')[0];
    if (foundDom) {
      // var newDiv1 = document.createElement("div");
      // newDiv1.innerHTML += "검색"
      // foundDom.appendChild(newDiv1)
      var newDiv2 = document.createElement("div");
      newDiv2.innerHTML += "글쓰기"
      foundDom.appendChild(newDiv2)

      console.log(foundDom)
    }
  }, [])
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const offsetHeight = divEl.current.offsetHeight;
  //   const offsetTop = divEl.current.offsetTop;
  //   console.log("News", offsetTop, offsetTop + offsetHeight / 2);
  // }, []);
  // useEffect(() => {}, []);
  const data = [
    { id: <div style={{ background: "#0A347F", color: "white", lineHeight: "40px", borderRadius: "20px" }}>공지</div>, name: "공지사항 테스트 입니다.", writer: "관리자0", date: "2020.04.10" },
    { id: 1, name: "공지사항 테스트 입니다.", writer: "관리자0", date: "2020.04.09" },
    { id: 2, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자1", date: "2020.04.08" },
    { id: 3, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자1", date: "2020.04.07" },
    { id: 4, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자2", date: "2020.04.06" },
    { id: 5, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자2", date: "2020.04.05" },
    { id: 6, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자3", date: "2020.04.04" },
    { id: 7, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자3", date: "2020.04.03" },
    { id: 8, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.04.02" },
    { id: 9, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.04.01" },

    { id: 10, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자2", date: "2020.04.05" },
    { id: 11, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자3", date: "2020.04.04" },
    { id: 12, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자3", date: "2020.04.03" },
    { id: 13, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.04.02" },
    { id: 14, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.04.01" },

    { id: 15, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.03.09" },
    { id: 16, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.03.08" },
    { id: 17, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.03.07" },
    { id: 18, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.03.06" },
    { id: 19, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자4", date: "2020.03.05" },
  ];

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    // { name: 'priority', displayName: "우선순위", inputFilterable: false, sortable: false, visible: false },
    { name: 'id', displayName: "번호", inputFilterable: false, sortable: false },
    { name: 'name', displayName: "제목", inputFilterable: false, sortable: false },
    { name: 'writer', displayName: "작성자", inputFilterable: false, exactFilterable: false, sortable: false },
    { name: 'date', displayName: "작성일", inputFilterable: false, exactFilterable: false, sortable: false }
  ];
  return (
    <div className="news" ref={divEl}>
      <FilterableTable
        namespace="People"
        initialSort="id"
        initialSortDir={false}
        data={data}
        fields={fields}
        noRecordsMessage="There are no people to display"
        noFilteredRecordsMessage="No people match your filters!"
      />
    </div>
  );
}

export default News;
