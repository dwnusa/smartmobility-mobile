import React, { useEffect, useRef, useState } from "react";
import "./Vision.scss";
import aboutVision1 from "media/about-vision-1.png";

function Vision() {
  return (
    <div className="vision">
      <div className="contents">
        <div>
          <h2>VISION</h2>
          <h3>
            체계적인 빅데이터 기반의 조사∙분석과 4차산업의 주요 기술을 활용한
            <br />
            다양한 연구 및 학술활동 수행으로 통합교통서비스를 제공하고,
            <br />
            근본적인 도시 ∙ 교통문제 해소에 기여하겠습니다.
          </h3>
        </div>
        <div>
          <img src={aboutVision1} width="70%" />
        </div>
      </div>
    </div>
  );
}

export default Vision;
