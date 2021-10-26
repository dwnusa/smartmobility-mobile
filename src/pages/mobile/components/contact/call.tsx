import React from 'react';
import * as cards from "media";
import styles from './call.module.scss';

function Call3({ishm3Scroll}) {
  return (
    <div className={styles["m-call"]}>
      <div><span>성함</span><input/></div>
      <div><span>연락처</span><input/></div>
      <div><span>메일주소</span><input/></div>
      <div><span>문의내용</span><textarea/></div>
      <div><span>기타</span><textarea/></div>
      <div><div><input type="checkbox"/>개인정보의 수집 및 이용목적에 동의합니다.</div></div>
      <div><div>등록하기</div></div>
    </div>
  );
}

export default Call3;