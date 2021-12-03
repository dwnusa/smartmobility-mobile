import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./News.scss";
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
  const [filterState, setFilter] = useState<number>(0);
  const [passwd, setPasswd] = useState<string>("");
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
          // console.log(newData)
          setListData(newData)
        });
    } catch (err) {
    }
  }, [])
  const [listData, setListData] = useState<any>([
    {
      key: 5,
      id: 5,
      type: "announcement",
      title: "공지사항 테스트 입니다.",
      writer: "관리자",
      body: "공지사항 테스트 입니다.",
      date: "2021.4.10",
    },
    {
      key: 4,
      id: 4,
      type: "recruitment",
      title: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자",
      body: "[모빌리티 팀] UX 리서치 (신입/경력)",
      date: "2021.4.10",
    },
    {
      key: 3,
      id: 3,
      type: "recruitment",
      title: "[모빌리티 팀] UX 리서치 (신입/경력)",
      writer: "관리자",
      body: "[모빌리티 팀] UX 리서치 (신입/경력)",
      date: "2021.4.10",
    },
    {
      key: 2,
      id: 9999,
      type: "announcement",
      title: "공지사항 테스트 입니다.",
      writer: "관리자",
      body: "공지사항 테스트 입니다.",
      date: "2021.4.10",
    },
    {
      key: 1,
      id: 1,
      type: "announcement",
      title: "공지사항 테스트 입니다.",
      writer: "관리자",
      body: "공지사항 테스트 입니다.",
      date: "2021.4.10",
    },
    {
      key: 0,
      id: 9999,
      type: "announcement",
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
    console.log(modalState);
    // if (modalState.auth_passed) {
    //   console.log(modalState.type);
    // } else {
    //   console.log('auth failed');
    // }
  }, [modalState])
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
  // useEffect(() => {
  //   const foundTableDom = document.querySelectorAll("table tbody tr");
  //   if (foundTableDom) {
  //     foundTableDom.forEach((e) =>
  //       e.addEventListener("click", handleTableClick)
  //     );
  //   }
  //   return () => {
  //     foundTableDom.forEach((e) =>
  //       e.removeEventListener("click", handleTableClick)
  //     );
  //   };
  // }, [listData, filterState]);
  const handleCreateClick = (e: any) => {
    if (modalState.auth_passed === true) {
      // debugger;
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
  const handleTableClick = (key) => {
    // const tableRow = e.currentTarget;
    // const keyValue = tableRow.lastChild.textContent;
    // debugger;
    setModalState({ ...modalState, type: "view", key: Number(key) });
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
      background: "#0032A0",
      color: "white",
      lineHeight: "40px",
      borderRadius: "20px",
      width: "80%",
    };
    if (props.value === 9999) {
      return (
        <div onClick={(e) => handleTableClick(props.record.key)}
          style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={idStyle}>공지</div>
        </div>
      )
    } else {
      return (
        <div onClick={(e) => handleTableClick(props.record.key)}
          style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {props.record.key}
        </div>
      )
    };
  };
  const renderTitle = (props: any) => {
    const is9999 = props.record.id;
    const type = props.record.type;
    if (is9999 === 9999) return <div onClick={(e) => handleTableClick(props.record.key)}
      style={{ height: "100%", width: "100%", display: "flex", alignItems: "center" }}>{props.value}</div>;
    else {
      if (type === "recruitment")
        return (
          <div onClick={(e) => handleTableClick(props.record.key)}
            style={{ height: "100%", width: "100%", display: "flex", alignItems: "center" }}>
            <span style={{ fontWeight: "bold" }}>{"채용"}</span>&nbsp;&emsp;
            {props.value}
          </div>
        );
      else if (type === "announcement")
        return (
          <div onClick={(e) => handleTableClick(props.record.key)}
            style={{ height: "100%", width: "100%", display: "flex", alignItems: "center" }}>
            <span style={{ fontWeight: "bold" }}>{"공지"}</span>&nbsp;&emsp;
            {props.value}
          </div>
        );
    }
  };
  const renderClick = (props: any) => {
    return (
      <div onClick={(e) => handleTableClick(props.record.key)}
        style={{ height: "100%", width: "100%", display: "flex", alignItems: "center" }}>
        {props.value}
      </div>
    )
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
      render: renderTitle,
      name: "title",
      displayName: "제목",
      inputFilterable: true,
      sortable: false,
    },
    {
      render: renderClick,
      name: "writer",
      displayName: "작성자",
      inputFilterable: true,
      exactFilterable: false,
      sortable: false,
    },
    {
      render: renderClick,
      name: "date",
      displayName: "작성일",
      inputFilterable: true,
      exactFilterable: false,
      sortable: false,
    },
    {
      render: renderClick,
      name: "key",
      displayName: "",
      visible: true
    },
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

      // const updatedData = listData.map((v) => {
      //   if (v.key === currentKey) {
      //     return {
      //       ...v,
      //       type: currentEditorInfo.type,
      //       title: currentEditorInfo.title,
      //       writer: currentEditorInfo.writer,
      //       body: bodyContent,
      //       date: date,
      //     };
      //   } else {
      //     return {
      //       ...v,
      //     };
      //   }
      // });
      // setListData(updatedData);

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
    <div className="news" ref={divEl}>
      <div className="news-filter">
        <div>
          <span
            className={`news-filter-1 ${filterState === 0 && "active"}`}
            onClick={() => setFilter(0)}
          >
            전체
          </span>
          <span
            className={`news-filter-2 ${filterState === 1 && "active"}`}
            onClick={() => setFilter(1)}
          >
            공지
          </span>
          <span
            className={`news-filter-3 ${filterState === 2 && "active"}`}
            onClick={() => setFilter(2)}
          >
            채용
          </span>
        </div>
      </div>
      <FilterableTable
        namespace="NewsPost"
        initialSort="id"
        initialSortDir={false}
        data={filteredData}
        fields={fields}
        noRecordsMessage="게시된 공지글이 없습니다."
        noFilteredRecordsMessage="검색내역이 없습니다."
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
                        const editor_state = EditorState.createWithContent(
                          content
                        );
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
                      } else if (modalState.type === "announcement") {

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
