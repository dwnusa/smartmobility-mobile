import React, { useEffect, useRef, useState } from "react";
import "./News.scss";
const FilterableTable = require('react-filterable-table');

function News({ divEl }: { divEl: any }) {
  // const divEl = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const scrollY = window.scrollY;
  //   const offsetHeight = divEl.current.offsetHeight;
  //   const offsetTop = divEl.current.offsetTop;
  //   console.log("News", offsetTop, offsetTop + offsetHeight / 2);
  // }, []);
  // useEffect(() => {}, []);
const data = [
	{ id:0, name: "공지사항 테스트 입니다.", writer: "관리자", date: "2020.04.06" },
	{ id:1, name: "공지사항 테스트 입니다.", writer: "관리자", date: "2020.04.06" },
	{ id:2, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:3, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:4, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:5, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:6, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:7, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:8, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:9, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:10, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:11, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:12, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
	{ id:13, name: "[모빌리티 팀] UX 리서치 (신입/경력)", writer: "관리자", date: "2020.04.06" },
];

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
	{ name: 'id', displayName: "번호", inputFilterable: true, sortable: true },
	{ name: 'name', displayName: "제목", inputFilterable: true, sortable: true },
	{ name: 'writer', displayName: "작성자", inputFilterable: true, exactFilterable: true, sortable: true },
	{ name: 'date', displayName: "작성일", inputFilterable: true, exactFilterable: true, sortable: true }
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
