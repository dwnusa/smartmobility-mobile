import React, { useEffect, useRef, useState } from "react";
import "./Organization.scss";
import aboutOrganization1 from "media/about-organization-1.png";

function Organization({ divEl }: { divEl: any }) {
  return (
    <div className="organization" ref={divEl}>
      <div className="contents">
        <img src={aboutOrganization1} width="60%" />
      </div>
    </div>
  );
}

export default Organization;
