import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./News.scss";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { stateToHTML } from "draft-js-export-html";
import * as cards from "media";
const FilterableTable = require("react-filterable-table");
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
function News() {
  const [passwd, setPasswd] = useState<string>("");
  const [listData, setListData] = useState<any>([
    {
      key: 1,
      id: 9999,
      type: "announcement",
      title: "공지사항 테스트 입니다.",
      writer: "관리자",
      body: "공지사항 테스트 입니다.",
      date: "2021.4.10",
    },
    {
      key: 0,
      id: 0,
      type: "recruitment",
      title: "홈페이지 개설을 축하합니다.",
      writer: "관리자",
      body: "홈페이지 개설 축하합니다!",
      date: "2021.4.08",
    },
  ]);
  const [currentEditorInfo, setCurrentEditorInfo] = useState<editorInfoType>({
    type: "announcement",
    writer: "",
    title: "",
    body: "",
  });
  const divEl = useRef<HTMLDivElement | null>(null);
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
    const foundFilterDom = document.getElementsByClassName("header-row")[0];
    if (foundFilterDom) {
      var newDiv2 = document.createElement("div");
      newDiv2.innerHTML += "글쓰기";
      newDiv2.setAttribute("id", "create-btn");
      foundFilterDom.appendChild(newDiv2);
      newDiv2.addEventListener("click", handleCreateClick);
    }
    return () => {
      newDiv2.removeEventListener("click", handleCreateClick);
    };
  }, []);
  useEffect(() => {
    const foundTableDom = document.querySelectorAll("table tbody tr");
    if (foundTableDom) {
      foundTableDom.forEach((e) =>
        e.addEventListener("click", handleTableClick)
      );
    }
    return () => {
      foundTableDom.forEach((e) =>
        e.removeEventListener("click", handleTableClick)
      );
    };
  }, [listData]);
  const handleCreateClick = (e: any) => {
    if (modalState.auth_passed === true) {
      setModalState({ ...modalState, type: "create", key: false });
    } else {
      setModalState({
        ...modalState,
        type: "create",
        key: false,
        auth_passed: false,
        auth_process: true,
      });
    }
  };
  const handleTableClick = (e: any) => {
    const tableRow = e.currentTarget;
    const keyValue = tableRow.lastChild.textContent;
    setModalState({ ...modalState, type: "view", key: Number(keyValue) });
  };
  const uploadImageCallBack = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve({ data: { link: e.target.result } });
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  };

  const onEditorStateChange = (editor_state: any) => {
    try {
      setEditorState(editor_state);
    } catch (e) {
      console.log(e);
    }
  };
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
  const fields = [
    {
      render: renderId,
      name: "id",
      displayName: "번호",
      inputFilterable: true,
      sortable: false,
    },
    {
      name: "title",
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
      const appendData = [
        ...listData,
        {
          key: maxKey + 1,
          id: currentEditorInfo.type === "announcement" ? 9999 : maxKey + 1,
          type: currentEditorInfo.type,
          title: currentEditorInfo.title,
          writer: currentEditorInfo.writer,
          body: bodyContent,
          date: date,
        },
      ];
      setListData(appendData);
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
      const updatedData = listData.map((v) => {
        if (v.key === currentKey) {
          return {
            ...v,
            id: currentEditorInfo.type === "announcement" ? 9999 : v.key,
            type: currentEditorInfo.type,
            title: currentEditorInfo.title,
            writer: currentEditorInfo.writer,
            body: bodyContent,
            date: date,
          };
        } else {
          return {
            ...v,
          };
        }
      });
      setListData(updatedData);
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
  const sortedByDate = listData.sort(
    (a: any, b: any) => (b.key > a.key && 1) || -1
  );
  const viewItem =
    modalState.key !== false &&
    sortedByDate.filter((v: any) => v.key === modalState.key)[0];
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
      {(modalState.type === "view" || modalState.type === "delete") && (
        <div
          className="news-modal"
          onMouseDown={(e) => {
            setModalState({ ...modalState, type: "", key: false });
          }}
        >
          <div
            className="news-box view"
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="news-view title">{viewItem.title}</div>
            <div className="news-view info">
              {viewItem.writer} | {viewItem.date} | 조회수:{" "}
            </div>
            <div
              className="news-view main"
              dangerouslySetInnerHTML={{
                __html: viewItem.body,
              }}
            ></div>
            <div className="news-view btn-grp">
              <div className="board-agreement check">
                <input
                  type="checkbox"
                  id="cb1"
                  defaultChecked={viewItem.id === 9999}
                  onChange={() => {
                    setModalState({
                      ...modalState,
                      type: "announcement",
                      auth_process: true,
                    });
                  }}
                />
                <label htmlFor="cb1"></label>
                메인 공지로 등록
              </div>
              <div
                onClick={() => {
                  setModalState({
                    ...modalState,
                    type: "edit",
                    key: viewItem.key,
                    auth_passed: false,
                    auth_process: true,
                  });
                }}
              >
                수정
              </div>
              <div
                onClick={() => {
                  setModalState({
                    ...modalState,
                    type: "delete",
                    auth_passed: false,
                    auth_process: true,
                  });
                }}
              >
                삭제
              </div>
            </div>
          </div>
        </div>
      )}
      {modalState.auth_passed &&
        (modalState.type === "create" || modalState.type === "edit") && (
          <div
            className="news-modal"
            onMouseDown={(e) => {
              setModalState({ ...modalState, confirm_process: true });
            }}
          >
            {
              <div
                className="news-box create"
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="drop-type">
                  <select
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
                </div>
                <div className="news-input writer">
                  <input
                    name="writer"
                    type="text"
                    value={currentEditorInfo.writer}
                    onChange={(e) => {
                      setCurrentEditorInfo({
                        ...currentEditorInfo,
                        writer: e.target.value,
                      });
                    }}
                    placeholder="작성자를 입력해 주세요."
                  />
                </div>
                <div className="news-input title">
                  <input
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
                </div>
                <Editor
                  placeholder="내용을 입력해 주세요."
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  localization={{
                    locale: "ko",
                  }}
                  toolbar={{
                    image: {
                      uploadCallback: uploadImageCallBack,
                      alt: { present: true, mandatory: false },
                    },
                    blockType: {
                      inDropdown: false,
                      options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"],
                      className: undefined,
                      component: undefined,
                      dropdownClassName: undefined,
                    },
                  }}
                />
                <div className="register-container">
                  {modalState.type === "create" && (
                    <div className="register-btn" onClick={handleRegister}>
                      등록하기
                    </div>
                  )}
                  {modalState.type === "edit" && (
                    <div
                      className="edit-btn"
                      onClick={() => handleUpdate(viewItem.key)}
                    >
                      수정하기
                    </div>
                  )}
                </div>
              </div>
            }
          </div>
        )}
      {modalState.confirm_process &&
        (modalState.type === "view" ||
          modalState.type === "create" ||
          modalState.type === "edit" ||
          modalState.type === "delete") && (
          <div className="news-modal">
            <div
              className="news-box confirm"
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="confirm-msg">
                페이지 이동시 지금까지 작성하신 내용이 모두 삭제됩니다.
                <br />
                페이지를 이동하시겠습니까?
              </div>
              <div className="confirm-btn-grp">
                <div
                  onClick={() => {
                    setModalState({
                      ...modalState,
                      type: "",
                      key: false,
                      confirm_process: false,
                    });
                    setCurrentEditorInfo({
                      type: "announcement",
                      writer: "",
                      title: "",
                      body: "",
                    });
                    setEditorState(EditorState.createEmpty());
                  }}
                >
                  확인
                </div>
                <div
                  onClick={() => {
                    setModalState({ ...modalState, confirm_process: false });
                  }}
                >
                  취소
                </div>
              </div>
            </div>
          </div>
        )}
      {modalState.auth_process &&
        (modalState.type === "view" ||
          modalState.type === "create" ||
          modalState.type === "edit" ||
          modalState.type === "delete" ||
          modalState.type === "announcement") && (
          <div className="news-modal">
            <div
              className="news-box authorization"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="authorization-msg">
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
              <div className="autorization-btn-grp">
                <div
                  onClick={() => {
                    if (passwd === modalState.passwd) {
                      setPasswd("");
                      if (modalState.type === "edit") {
                        const blocksFromHTML = convertFromHTML(viewItem.body);
                        const content = ContentState.createFromBlockArray(
                          blocksFromHTML.contentBlocks,
                          blocksFromHTML.entityMap
                        );
                        const editor_state =
                          EditorState.createWithContent(content);
                        setEditorState(editor_state);
                        setCurrentEditorInfo({
                          type: viewItem.type,
                          writer: viewItem.writer,
                          title: viewItem.title,
                          body: viewItem.body,
                        });
                        setModalState({
                          ...modalState,
                          confirm_process: false,
                          auth_process: false,
                          auth_passed: true,
                        });
                      } else if (modalState.type === "create") {
                        setModalState({
                          ...modalState,
                          confirm_process: false,
                          auth_process: false,
                          auth_passed: true,
                        });
                      } else if (modalState.type === "delete") {
                        const filteredData = sortedByDate.filter(
                          (v) => v.key !== viewItem.key
                        );
                        setListData(filteredData);
                        setModalState({
                          ...modalState,
                          type: "",
                          key: false,
                          confirm_process: false,
                          auth_process: false,
                          auth_passed: false,
                        });
                      } else if (modalState.type === "announcement") {
                        const currentCheckerState = !(viewItem.id === 9999);
                        console.log(currentCheckerState);
                        const updatedListData = sortedByDate.map((v) => {
                          if (v.key === viewItem.key) {
                            return {
                              ...v,
                              id: currentCheckerState ? 9999 : viewItem.key,
                              type: currentCheckerState
                                ? "announcement"
                                : "recruitment",
                            };
                          } else {
                            return {
                              ...v,
                            };
                          }
                        });
                        setListData(updatedListData);
                        setModalState({
                          ...modalState,
                          type: "view",
                          confirm_process: false,
                          auth_process: false,
                          auth_passed: false,
                        });
                      }
                    } else {
                      setPasswd("");
                      alert("잘못된 비밀번호입니다.");
                    }
                  }}
                >
                  확인
                </div>
                <div
                  onClick={() => {
                    setPasswd("");
                    setModalState({
                      ...modalState,
                      type: "",
                      confirm_process: false,
                      auth_process: false,
                      auth_passed: false,
                    });
                  }}
                >
                  취소
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default News;
