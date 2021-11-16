import React, {useState} from 'react';
import * as cards from "media";
import styles from './call.module.scss';

function Call3({ishm3Scroll}) {
  const [checkState, setCheckState] = useState(false);
  const [item, setItem] = useState({
    name:"",
    phone:"",
    email:"",
    contents:"",
  })
  return (
    <div className={styles["m-call"]}>
      <div><span>성함</span><input value={item.name} onChange={(e)=>setItem({...item, name:e.target.value})}/></div>
      <div><span>연락처</span><input value={item.phone} onChange={(e)=>setItem({...item, phone:e.target.value})}/></div>
      <div><span>메일주소</span><input value={item.email} onChange={(e)=>setItem({...item, email:e.target.value})}/></div>
      <div><span>문의내용</span><textarea value={item.contents} onChange={(e)=>setItem({...item, contents:e.target.value})}/></div>
      <div>
        <span>기타</span>
        <textarea value="개인정보의 처리목적 ('www.smartmobilityinc.co.kr'이하'(주)스마트모빌러티')은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다. ('(주)스마트모빌러티') 은(는) 회사의 개인정보처리방침을 개정하는경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.○ 본 방침은 2019년 12월 1일부터 시행됩니다."/>
      </div>
      <div>
        <span></span>
        <div>
          <span onClick={()=>setCheckState(!checkState)}
            style={{
              background:checkState ? "#0032A0":"",
              borderColor:checkState ? "#0032A0":"",
            }}
          >
            {"\u2713"}
          </span>
          <span>{'개인정보의 수집 및 이용목적에 동의합니다.'}</span>
        </div>
      </div>
      <div><div onClick={()=>{alert('등록되었습니다.'); setItem({name:"", phone:"", email:"", contents:""})}}>등록하기</div></div>
    </div>
  );
}

export default Call3;