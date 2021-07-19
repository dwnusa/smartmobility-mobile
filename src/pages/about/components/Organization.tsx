import React, { useEffect, useRef, useState } from "react";
import "./Organization.scss";
import aboutOrganization from "media/about-organization-3.png";

function Organization() {
  return (
    <div className="organization">
      <div className="contents">
        <img src={aboutOrganization} />
      </div>
    </div>
  );
}

export default Organization;
