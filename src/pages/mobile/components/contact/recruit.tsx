import React, { useEffect, useState } from 'react';
import * as cards from "media";
import styles from './recruit.module.scss';
import { Editor } from "react-draft-wysiwyg";
import axios from "axios";
import { IPinUSE } from "api/IPs";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";

interface editorInfoType {
  type: string;
  writer: string;
  title: string;
  body: string;
}
interface modalType {
  type: "" | "view" | "edit" | "create" | "delete" | "announcement";
  key: number | boolean;
  confirm_process: boolean;
  passwd: string;
  auth_process: boolean;
  auth_passed: boolean;
}
const itemList = [
  { key: 11, id: 9999, type: "announcement", title: "공지사항 테스트입니다.", writer: "작성자" },
  { key: 10, id: 10, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 9, id: 9, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 8, id: 8, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 7, id: 7, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 6, id: 6, type: "announcement", title: "공지사항 테스트입니다.", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 5, id: 5, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 4, id: 4, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 3, id: 3, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 2, id: 2, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 1, id: 1, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
  { key: 0, id: 0, type: "recruitment", title: "채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer: "작성자", body: "홈페이지 개설 축하합니다!", date: "2021.4.08" },
];
function Recruit3({ ishm3Scroll, setPos, pos }) {
  const [filterState, setFilter] = useState<number>(0);
  const [filterIndex, setFilterIndex] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [listData, setListData] = useState(itemList);
  const [passwd, setPasswd] = useState<string>("");
  const [currentEditorInfo, setCurrentEditorInfo] = useState<editorInfoType>({
    type: "announcement",
    writer: "",
    title: "",
    body: "",
  });
  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );
  const [modalState, setModalState] = useState<modalType>({
    type: "",
    key: false,
    confirm_process: false,
    passwd: "1234",
    auth_process: false,
    auth_passed: false,
  });
  useEffect(() => {
    try {
      axios
        .get(IPinUSE + "list/")
        .then((res) => {
          const newData = res.data.map(v => {
            return {
              key: Number(v.id),
              id: Number(v.bno),
              type: v.type.toLowerCase(),
              title: v.title,
              writer: v.writer,
              body: v.body,
              date: v.date,
            }
          })
          // debugger;
          console.log(newData)
          setListData(newData)
        });
    } catch (err) {
    }
  }, [])
  useEffect(() => {
    if (filterIndex === 1) {
      const newItem = itemList.filter(v => v.type === "공지").sort((a, b) => { return b.id - a.id });
      setListData(newItem);
    } else if (filterIndex === 2) {
      const newItem = itemList.filter(v => v.type === "채용").sort((a, b) => { return b.id - a.id });
      console.log(newItem)
      setListData(newItem);
    } else {
      const newItem = itemList.sort((a, b) => { return b.id - a.id });
      setListData(newItem);
    }
  }, [filterIndex])
  const handleTableClick = (e: any, item: any) => {
    // debugger;
    setModalState({ ...modalState, type: "view", key: Number(item.key) });
  };
  const handleDelete = () => {
    try {
      const currentCheckerState = (viewItem.id === 9999);
      const updatedState = currentCheckerState ? viewItem.key : 9999;
      axios.delete(IPinUSE + viewItem.key + "/")
        .then((res) => {

          const newData = res.data.map(v => {
            return {
              key: Number(v.id),
              id: Number(v.bno),
              type: v.type.toLowerCase(),
              title: v.title,
              writer: v.writer,
              body: v.body,
              date: v.date,
            }
          })
          setListData(newData);
        });
    } catch (err) {
      alert('filed post creation, check server network!')
    } finally {

      setModalState({
        ...modalState,
        type: "",
        key: false,
        confirm_process: false,
        auth_process: false,
        auth_passed: false,
      });
    }
  };
  const sortedByDate = listData.sort(
    (a: any, b: any) => (b.key > a.key && 1) || -1
  );
  const filteredData = sortedByDate.filter((v: any) => {
    if (filterState == 1) return v.type === "announcement";
    else if (filterState == 2) return v.type === "recruitment";
    else return v;
  });
  const viewItem =
    modalState.key !== false &&
    sortedByDate.filter((v: any) => v.key === modalState.key)[0];
  return (
    <div className={styles["hm3-body-wrapper"]} style={{ overflow: ishm3Scroll ? "scroll" : "hidden" }}>
      {/* recruit3 */}
      {modalState.type !== "view" && <div className={styles["hm3-box1"]}>
        <div>
          <div style={{ fontWeight: filterIndex === 0 ? "bold" : "normal" }} onClick={() => setFilterIndex(0)}>전체</div>
          <div style={{ fontWeight: filterIndex === 1 ? "bold" : "normal" }} onClick={() => setFilterIndex(1)}>공지</div>
          <div style={{ fontWeight: filterIndex === 2 ? "bold" : "normal" }} onClick={() => setFilterIndex(2)}>채용</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {listData.map(v =>
              <tr onClick={(e) => handleTableClick(e, v)}>
                <td>{v.id === 9999 ? <div>{v.type === "announcement" ? "공지" : "채용"}</div> : v.id}</td>
                <td>{v.title}</td>
                <td>{v.writer}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <select value={"전체"}>
            <option value="전체">전체</option>
            <option value="공지">공지</option>
            <option value="채용">채용</option>
          </select>
          <input />
          <div>검색</div>
          <div onClick={() => setModalOpened(!modalOpened)}>글쓰기</div>
        </div>
      </div>}
      {modalState.type === "view" && <div className={styles["hm3-box2"]}>
        <div>{viewItem.title}</div>
        <div>{viewItem.writer} | {viewItem.date}</div>
        <div
          // className="news-view main"
          dangerouslySetInnerHTML={{
            __html: viewItem.body,
          }}
        ></div>
        <div>{"메인공지로 등록"}</div>
        <div>
          <span onClick={() => setModalState({ ...modalState, type: "", key: false, confirm_process: false })}>{"뒤로"}</span>
          <span onClick={() => { setModalState({ ...modalState, key: viewItem.key, auth_passed: false, auth_process: true }); }}>{"수정"}</span>
          <span onClick={() => setModalState({ ...modalState, type: "delete", auth_passed: false, auth_process: true })}>{"삭제"}</span>
        </div>
      </div>}
      {modalState.auth_process &&
        (modalState.type === "view" ||
          modalState.type === "create" ||
          modalState.type === "edit" ||
          modalState.type === "delete" ||
          modalState.type === "announcement") && (
          <div className={styles["hm3-box3"]} onClick={() => setModalState({ ...modalState, type: "", key: false, confirm_process: false, auth_process: false, auth_passed: false })}>
            <div onClick={(e) => e.stopPropagation()}>
              <div>
                <img src={cards.lockIcon} /> {"Password"}
              </div>
              <input
                type="password"
                value={passwd.slice(0, 6)}
                onChange={(e) => {
                  setPasswd(e.target.value);
                }}
              />
            </div>
          </div>
        )}
    </div>
  );
}

export default Recruit3;