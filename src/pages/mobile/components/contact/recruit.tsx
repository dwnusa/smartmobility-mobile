import React, {useEffect, useState} from 'react';
import * as cards from "media";
import styles from './recruit.module.scss';

const itemList = [
  {key:11,id:9999, type:"공지", title:"공지사항 테스트입니다.", writer:"작성자"},
  {key:10,id:10, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:9,id:9, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:8,id:8, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:7,id:7, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:6,id:6, type:"공지", title:"공지사항 테스트입니다.", writer:"작성자"},
  {key:5,id:5, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:4,id:4, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:3,id:3, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:2,id:2, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:1,id:1, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
  {key:0,id:0, type:"채용", title:"채용  |  [모빌리티 팀] UX 리서처 (신입/경력)", writer:"작성자"},
];
function Recruit3({ishm3Scroll}) {
  const [filterIndex, setFilterIndex] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [filteredItem, setFileteredItem] = useState(itemList);
  useEffect(()=>{
    if (filterIndex===1){
      const newItem = itemList.filter(v=>v.type==="공지").sort((a,b)=>{return b.id-a.id});
      setFileteredItem(newItem);
    } else if (filterIndex===2){
      const newItem = itemList.filter(v=>v.type==="채용").sort((a,b)=>{return b.id-a.id});
      console.log(newItem)
      setFileteredItem(newItem);
    } else {
      const newItem = itemList.sort((a,b)=>{return b.id-a.id});
      setFileteredItem(newItem);
    }
  }, [filterIndex])
  return (
    <div className={styles["hm3-body-wrapper"]} style={{overflow: ishm3Scroll ? "scroll":"hidden"}}>
      {/* recruit3 */}
      <div className={styles["hm3-box1"]}>
        <div>
          <div style={{fontWeight: filterIndex === 0 ? "bold":"normal"}} onClick={()=>setFilterIndex(0)}>전체</div>
          <div style={{fontWeight: filterIndex === 1 ? "bold":"normal"}} onClick={()=>setFilterIndex(1)}>공지</div>
          <div style={{fontWeight: filterIndex === 2 ? "bold":"normal"}} onClick={()=>setFilterIndex(2)}>채용</div>
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
            {filteredItem.map(v=>
              <tr onClick={()=>setModalOpened(!modalOpened)}>
                <td>{v.id === 9999 ? "공지":v.id}</td>
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
          <input/>
          <div>검색</div>
          <div onClick={()=>setModalOpened(!modalOpened)}>글쓰기</div>
        </div>
      </div>
      {modalOpened && <div onClick={()=>setModalOpened(false)} style={{display:"flex", alignItems:"center", justifyContent:"center", boxSizing:"border-box", position:"fixed", top:0, left:0, width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.5)"}}>
          <div style={{width:"100%"}}>
            <img src={cards.m_passwordModal} alt="" style={{width:"100%"}}/>
          </div>
        </div>}
    </div>
  );
}

export default Recruit3;