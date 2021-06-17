import React, { useEffect, useRef, useState } from "react";
import "./Organization.scss";
import aboutOrganization1 from "media/about-organization-1.png";

function Organization() {
  return (
    <div className="organization">
      <div className="contents">
        <img src={aboutOrganization1} width="60%" />
      </div>
    </div>
  );
}

export default Organization;
