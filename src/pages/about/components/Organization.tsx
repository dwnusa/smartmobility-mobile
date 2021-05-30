import React, { useEffect, useRef, useState } from "react";
import "./Organization.scss";

function Organization({ divEl }: { divEl: any }) {
  return (
    <div className="organization" ref={divEl}>
      <h2>Organization</h2>
    </div>
  );
}

export default Organization;
