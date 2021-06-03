import React, { useEffect, useRef, useState } from "react";
import "./Greeting.scss";
import aboutGreeting1 from "media/about-greeting-1.png";

function Greeting({ divEl }: { divEl: any }) {
  return (
    <div className="greeting" ref={divEl}>
      <div className="contents">
        <img src={aboutGreeting1} width="60%" />
        <div>
          <h2>
            ㈜스마트모빌러티에 오신 것을 <br /> 진심으로 환영합니다.
          </h2>
          {/* <br /> */}
          <h3>
            ‘이동’에 대한 사람들의 요구는 지속적으로 커지고 있습니다.
            <br />
            최근에는 다양한 디지털기술을 기반으로 하는
            <br />
            4차 산업혁명을 통해 도시 및 교통에 새로운 패러다임을 가져오고
            있으며,
            <br />
            새로운 모빌리티가 활성화되고 있습니다.
            <br />
            <br />
            ㈜스마트모빌러티는 다양한 도시 ∙ 교통문제를 해결하고 있습니다.
            <br />
            다양한 국정과제 및 중 ∙ 장기 / 기초연구, 데이터 기반의 정책 연구
            등을 수행하고 있으며,
            <br />
            이를 통해 ‘사람 중심’의 다양한 통합모빌리티 서비스를 제공합니다.
            <br />
            <br />
            계속해서 변화하고 진보하는 신기술을 선도하고, 끊임없는 도전을 통해
            <br />
            도시 및 교통분야의 새로운 문을 열기 위해 노력하겠습니다.
            <br />
            <br />
            앞으로 저희 스마트모빌러티의 다양한 활동에 많은 관심과 성원을
            부탁드립니다.
          </h3>
          {/* <br /> */}
          <h3>㈜스마트모빌러티 CEO / 공학박사</h3>
          <h2>김 승 현</h2>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
