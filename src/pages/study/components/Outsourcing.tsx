import React, { useEffect, useRef, useState } from "react";
import "./Outsourcing.scss";
import * as cards from "media";
function Outsourcing() {
  const [currentFilter, setCurrentFilter] = useState<string>("all");

  const imageItem = [
    {
      type: "general",
      imgPassive: cards.osrcg01_1,
      imgActive: cards.osrcg01_2,
      id: 1,
    },
    {
      type: "general",
      imgPassive: cards.osrcg02_1,
      imgActive: cards.osrcg02_2,
      id: 2,
    },
    {
      type: "general",
      imgPassive: cards.osrcg03_1,
      imgActive: cards.osrcg03_2,
      id: 3,
    },
    {
      type: "general",
      imgPassive: cards.osrcg04_1,
      imgActive: cards.osrcg04_2,
      id: 4,
    },
    {
      type: "general",
      imgPassive: cards.osrcg05_1,
      imgActive: cards.osrcg05_2,
      id: 5,
    },
    {
      type: "general",
      imgPassive: cards.osrcg06_1,
      imgActive: cards.osrcg06_2,
      id: 6,
    },
    {
      type: "general",
      imgPassive: cards.osrcg07_1,
      imgActive: cards.osrcg07_2,
      id: 7,
    },
    {
      type: "general",
      imgPassive: cards.osrcg08_1,
      imgActive: cards.osrcg08_2,
      id: 8,
    },
    {
      type: "research",
      imgPassive: cards.osrcr01_1,
      imgActive: cards.osrcr01_2,
      id: 9,
    },
    {
      type: "general",
      imgPassive: cards.osrcg09_1,
      imgActive: cards.osrcg09_2,
      id: 10,
    },
    {
      type: "research",
      imgPassive: cards.osrcr02_1,
      imgActive: cards.osrcr02_2,
      id: 11,
    },
    {
      type: "research",
      imgPassive: cards.osrcr03_1,
      imgActive: cards.osrcr03_2,
      id: 12,
    },
    {
      type: "research",
      imgPassive: cards.osrcr04_1,
      imgActive: cards.osrcr04_2,
      id: 13,
    },
    {
      type: "general",
      imgPassive: cards.osrcg10_1,
      imgActive: cards.osrcg10_2,
      id: 14,
    },
    {
      type: "general",
      imgPassive: cards.osrcg11_1,
      imgActive: cards.osrcg11_2,
      id: 15,
    },
    {
      type: "research",
      imgPassive: cards.osrcr05_1,
      imgActive: cards.osrcr05_2,
      id: 16,
    },
    {
      type: "general",
      imgPassive: cards.osrcg12_1,
      imgActive: cards.osrcg12_2,
      id: 17,
    },
    {
      type: "general",
      imgPassive: cards.osrcg13_1,
      imgActive: cards.osrcg13_2,
      id: 18,
    },
    {
      type: "general",
      imgPassive: cards.osrcg14_1,
      imgActive: cards.osrcg14_2,
      id: 19,
    },
    {
      type: "general",
      imgPassive: cards.osrcg15_1,
      imgActive: cards.osrcg15_2,
      id: 20,
    },
    {
      type: "general",
      imgPassive: cards.osrcg16_1,
      imgActive: cards.osrcg16_2,
      id: 21,
    },
    {
      type: "research",
      imgPassive: cards.osrcr06_1,
      imgActive: cards.osrcr06_2,
      id: 22,
    },
    {
      type: "general",
      imgPassive: cards.osrcg17_1,
      imgActive: cards.osrcg17_2,
      id: 23,
    },
    {
      type: "general",
      imgPassive: cards.osrcg18_1,
      imgActive: cards.osrcg18_2,
      id: 24,
    },
    {
      type: "research",
      imgPassive: cards.osrcr07_1,
      imgActive: cards.osrcr07_2,
      id: 25,
    },
    {
      type: "general",
      imgPassive: cards.osrcg19_1,
      imgActive: cards.osrcg19_2,
      id: 26,
    },
  ];
  const AllCards = imageItem.map((v) => (
    <img
      src={v.imgPassive}
      onMouseOut={(e) => (e.currentTarget.src = v.imgPassive)}
      onMouseOver={(e) => (e.currentTarget.src = v.imgActive)}
    />
  ));
  const filteredCards = imageItem
    .filter((v, i) => v.type === currentFilter)
    .map((v) => (
      <img
        src={v.imgPassive}
        onMouseOut={(e) => (e.currentTarget.src = v.imgPassive)}
        onMouseOver={(e) => (e.currentTarget.src = v.imgActive)}
      />
    ));
  // console.log(filteredCards)
  return (
    <div className="outsourcing">
      <div className="service-filter">
        <ul>
          <li
            className={`${currentFilter === "all" && "active"}`}
            onClick={() => setCurrentFilter("all")}
          >
            All
          </li>
          <li
            className={`${currentFilter === "research" && "active"}`}
            onClick={() => setCurrentFilter("research")}
          >
            연구용역
          </li>
          <li
            className={`${currentFilter === "general" && "active"}`}
            onClick={() => setCurrentFilter("general")}
          >
            일반용역
          </li>
        </ul>
      </div>
      {currentFilter === "all" && (
        <div className="outsourcing-grid">{AllCards}</div>
      )}
      {currentFilter === "research" && (
        <div className="outsourcing-grid">{filteredCards}</div>
      )}
      {currentFilter === "general" && (
        <div className="outsourcing-grid">{filteredCards}</div>
      )}
    </div>
  );
}

export default Outsourcing;
