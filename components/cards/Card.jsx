import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Img } from "../Img.jsx";

export default function Card({ data }) {
  const [currentSrcIdx, setcurrentSrcIdx] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className="card model">
      <div style={{ position: "relative" }}>
        {currentSrcIdx > 0 ? (
          <FontAwesomeIcon
            className="arrow L"
            icon={faChevronLeft}
            size="2x"
            onClick={() => {
              if (currentSrcIdx != 0) setcurrentSrcIdx(currentSrcIdx - 1);
            }}
          />
        ) : null}
        <Img
          size={data.position}
          src={data.gallery[currentSrcIdx].formats.large.url}
          alt={`meniu ${data.description}`}
        />
        {data.gallery.length > 1 &&
        currentSrcIdx !== data.gallery.length - 1 ? (
          <FontAwesomeIcon
            className="arrow R"
            icon={faChevronRight}
            size="2x"
            onClick={() => {
              if (currentSrcIdx < data.gallery.length - 1)
                setcurrentSrcIdx(currentSrcIdx + 1);
            }}
          />
        ) : null}
      </div>
      <div className="card-envelope-footer">
        <FontAwesomeIcon
          icon={faGripLines}
          size="2x"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open ? (
        <div className="wraper">
          <div className="card-info">
            <span style={{ color: "#8d8d8d" }}>Descriere</span>
            <p>{data.description}</p>
            <p>
              <strong>{data.price.toFixed(2)}</strong> lei
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
