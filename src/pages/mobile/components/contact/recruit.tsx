import React, { useEffect, useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import * as cards from "media";
import styles from './recruit.module.scss';
import './recruit.scss';
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
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [currentEditorInfo, setCurrentEditorInfo] = useState<editorInfoType>({
    type: "announcement",
    writer: "",
    title: "",
    body: "",
  });
  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );
  const onEditorStateChange = (editor_state: any) => {
    try {
      setEditorState(editor_state);
    } catch (e) {
      console.log(e);
    }
  };
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
      // const currentCheckerState = (viewItem.id === 9999);
      // const updatedState = currentCheckerState ? viewItem.key : 9999;
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
  const uploadImageCallBack = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve({ data: { link: e.target.result } });
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  };
  const handleRegister = () => {
    const bodyContent = stateToHTML(editorState.getCurrentContent());
    if (currentEditorInfo.title === "") {
      alert("제목을 입력하세요.");
    } else if (currentEditorInfo.writer === "") {
      alert("작성자를 입력하세요.");
    } else if (bodyContent === "<p><br></p>") {
      alert("내용을 입력하세요.");
      console.log(bodyContent);
    } else {
      const today = new Date();
      const date =
        today.getFullYear() +
        "." +
        (today.getMonth() + 1) +
        "." +
        today.getDate();
      const maxKey = Math.max.apply(
        Math,
        listData.map(function (o) {
          return o.key;
        })
      );

      try {
        axios.post(IPinUSE + "register/", {
          type: currentEditorInfo.type,
          title: currentEditorInfo.title,
          writer: currentEditorInfo.writer,
          body: bodyContent,
        })
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
      }
      setModalState({
        ...modalState,
        type: "",
        key: false,
        confirm_process: false,
      });
      setEditorState(EditorState.createEmpty());
      setCurrentEditorInfo({
        type: "announcement",
        writer: "",
        title: "",
        body: "",
      });
    }
  };
  const handleUpdate = (currentKey: number) => {
    const bodyContent = stateToHTML(editorState.getCurrentContent());
    if (currentEditorInfo.title === "") {
      alert("제목을 입력하세요.");
    } else if (currentEditorInfo.writer === "") {
      alert("작성자를 입력하세요.");
    } else if (bodyContent === "<p><br></p>") {
      alert("내용을 입력하세요.");
      console.log(bodyContent);
    } else {
      const today = new Date();
      const date =
        today.getFullYear() +
        "." +
        (today.getMonth() + 1) +
        "." +
        today.getDate();
      const maxKey = Math.max.apply(
        Math,
        listData.map(function (o) {
          return o.key;
        })
      );

      try {
        axios.put(IPinUSE + viewItem.key + "/", {
          type: currentEditorInfo.type,
          title: currentEditorInfo.title,
          body: bodyContent,
        })
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
      }

      setModalState({
        ...modalState,
        type: "",
        key: false,
        confirm_process: false,
        auth_passed: false,
      });
      setEditorState(EditorState.createEmpty());
      setCurrentEditorInfo({
        type: "announcement",
        writer: "",
        title: "",
        body: "",
      });
    }
  };
  const CustomToolbar = () => (
    <div id="toolbar">
      <select className="ql-header">
        <option value="1"></option>
        <option value="2"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <select className="ql-color">
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
        <option selected></option>
      </select>
      <select className="ql-background"></select>
      <button className="ql-link"></button>
      <button className="ql-image"></button>
    </div>
  );
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
  ];

  const [text, setText] = useState<string>("");

  const handleChange = (value: any) => {
    setText(value);

  };
  const sortedByDate = listData.sort(
    (a: any, b: any) => (b.id > a.id && 1) || -1
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
      {(modalState.type === "") && <div className={styles["hm3-box1"]}>
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
            {filteredData.map(v =>
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
          <div onClick={() => { setModalState({ ...modalState, type: "create", auth_passed: false, auth_process: true }); }}>글쓰기</div>
        </div>
      </div>}
      {!modalState.auth_passed && (modalState.type === "view" ||
        modalState.type === "delete" ||
        modalState.type === "edit" ||
        modalState.type === "announcement") && <div className={styles["hm3-box2"]}>
          <div>{viewItem.title}</div>
          <div>{viewItem.writer} | {viewItem.date}</div>
          <div
            // className="news-view main"
            dangerouslySetInnerHTML={{
              __html: viewItem.body,
            }}
          ></div>
          <div>
            <span
              onClick={() =>
                setModalState({
                  ...modalState,
                  type: "announcement",
                  auth_process: true,
                })}
              style={{
                borderColor: viewItem.id === 9999 ? "#0032A0" : "",
                background: viewItem.id === 9999 ? "#0032A0" : "",
                color: viewItem.id === 9999 ? "white" : ""
              }}>{"\u2713"}</span>
            <span>{"메인공지로 등록"}</span>
          </div>
          <div>
            <span onClick={() => setModalState({ ...modalState, type: "", key: false, confirm_process: false })}>{"뒤로"}</span>
            <span onClick={() => setModalState({ ...modalState, type: "edit", key: viewItem.key, auth_passed: false, auth_process: true })}>{"수정"}</span>
            <span onClick={() => setModalState({ ...modalState, type: "delete", auth_passed: false, auth_process: true })}>{"삭제"}</span>
          </div>
        </div>}
      {modalState.auth_process &&
        (modalState.type === "view" ||
          modalState.type === "create" ||
          modalState.type === "edit" ||
          modalState.type === "delete" ||
          modalState.type === "announcement") && (
          <div className={styles["hm3-box3"]} onClick={() => { setPasswd(""); setModalState({ ...modalState, confirm_process: false, auth_process: false, auth_passed: false }) }}>
            <div className={styles["hm3-box3-auth_process"]}
              onClick={(e) => e.stopPropagation()}>
              <div>
                <img src={cards.lockIcon} /> {"Password"}
              </div>
              <input
                type="password"
                value={passwd.slice(0, 6)}
                placeholder={"1234"}
                onKeyPress={(e) => {
                  if (e.key == "Enter") {
                    if (passwd === modalState.passwd) {
                      console.log(modalState.type);
                      if (modalState.type === "delete") {
                        handleDelete();
                        setPasswd("");
                        setModalState({ ...modalState, type: "", key: false, confirm_process: false, auth_process: false, auth_passed: false })
                      } else if (modalState.type === "create") {
                        // handleDelete();
                        setPasswd("");
                        setModalState({ ...modalState, key: false, confirm_process: false, auth_process: false, auth_passed: true })
                      } else if (modalState.type === "edit") {
                        setPasswd("");

                        // const blocksFromHTML = convertFromHTML(viewItem.body);
                        // const content = ContentState.createFromBlockArray(
                        //   blocksFromHTML.contentBlocks,
                        //   blocksFromHTML.entityMap
                        // );
                        // const editor_state = EditorState.createWithContent(
                        //   content
                        // );
                        // setEditorState(editor_state);
                        setText(viewItem.body);
                        setCurrentEditorInfo({
                          type: viewItem.type,
                          writer: viewItem.writer,
                          title: viewItem.title,
                          body: viewItem.body,
                        });

                        setModalState({ ...modalState, confirm_process: false, auth_process: false, auth_passed: true })
                      } else if (modalState.type === "announcement") {
                        setPasswd("");

                        try {
                          const currentCheckerState = (viewItem.id === 9999);
                          const updatedState = currentCheckerState ? viewItem.key : 9999;
                          axios.put(IPinUSE + viewItem.key + "/", {
                            bno: updatedState,
                          })
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
                              setModalState({
                                ...modalState,
                                type: "view",
                                confirm_process: false,
                                auth_process: false,
                                auth_passed: false,
                              });
                            });
                        } catch (err) {
                          alert('filed post creation, check server network!')
                        } finally {
                          setModalState({
                            ...modalState,
                            confirm_process: false,
                            auth_process: false,
                            auth_passed: false,
                          });
                        }
                        // setModalState({ ...modalState, confirm_process: false, auth_process: false, auth_passed: true })
                      }

                    } else {
                      alert('password failed');
                    }
                  }
                }}
                onChange={(e) => {
                  setPasswd(e.target.value);
                }}
              />
            </div>
          </div>
        )}
      {modalState.auth_passed &&
        (modalState.type === "create" || modalState.type === "edit") &&
        <div className={styles["hm3-box4"]}>
          <select
            className={styles["recruit-select"]}
            name="type"
            value={currentEditorInfo.type}
            onChange={(e) => {
              setCurrentEditorInfo({
                ...currentEditorInfo,
                type: e.target.value,
              });
            }}
          >
            <option value="announcement">공지</option>
            <option value="recruitment">채용</option>
          </select>
          <input
            className={styles["recruit-input"]}
            name="writer"
            type="text"
            value={currentEditorInfo.writer}
            onChange={(e) => {
              setCurrentEditorInfo({
                ...currentEditorInfo,
                writer: e.target.value,
              });
            }}
            placeholder="작성자를 입력해주세요."
          />
          <input
            className={styles["recruit-input"]}
            name="title"
            type="text"
            value={currentEditorInfo.title}
            onChange={(e) => {
              setCurrentEditorInfo({
                ...currentEditorInfo,
                title: e.target.value,
              });
            }}
            placeholder="제목을 입력해 주세요."
          />
          <div
            className={styles["quill-container"]}
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
          >
            <ReactQuill value={text} onChange={handleChange} />
          </div>
          <div
            className={styles["register-container"]}
            style={{ marginBottom: `${keyboardOpen ? "50vw" : "0"}` }}
          >
            {modalState.type === "create" && (
              <div className={styles["register-btn"]} onClick={handleRegister}>
                등록하기
              </div>
            )}
            {modalState.type === "edit" && (
              <div
                className={styles["edit-btn"]}
                onClick={() => handleUpdate(viewItem.key)}
              >
                수정하기
              </div>
            )}
            <div className={styles["register-btn-cancel"]}
              onClick={() => setModalState({ ...modalState, confirm_process: true })}>
              취소
            </div>
          </div>
        </div>
      }
      {modalState.confirm_process &&
        (modalState.type === "view" ||
          modalState.type === "create" ||
          modalState.type === "edit" ||
          modalState.type === "delete") &&
        <div className={styles["hm3-box3"]}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles["hm3-box3-confirm_process"]}>
            <div>
              페이지 이동시 지금까지 작성하신
              <br />
              내용이 모두 삭제됩니다.
              <br />
              페이지를 이동하시겠습니까?
            </div>
            <div>
              <span onClick={() => setModalState({ ...modalState, type: "", key: false, confirm_process: false, auth_process: false, auth_passed: false })}>확인</span>
              <span onClick={() => setModalState({ ...modalState, confirm_process: false })}>취소</span>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Recruit3;