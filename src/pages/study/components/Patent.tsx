import React, { useEffect, useRef, useState } from "react";
import "./Patent.scss";

function Patent({ divEl }: { divEl: any }) {
  return (
    <div className="patent" ref={divEl}>
      <h2>Patent</h2>
    </div>
  );
}

export default Patent;
