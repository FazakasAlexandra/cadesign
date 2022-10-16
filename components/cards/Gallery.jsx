import { Img } from "../Img";
import { useState } from "react";
import {
  faTimes,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function View({ gallery, isOpen, onClose }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (gallery.length > 1) {
      const next = current + 1 === gallery.length ? 0 : current + 1;
      setCurrent(next);
    }
  };

  const previous = () => {
    const previous = current - 1 < 0 ? gallery.length - 1 : current - 1;
    setCurrent(previous);
  };

  return (
    <div
      className="modal"
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <FontAwesomeIcon
        className="cancel"
        icon={faTimes}
        size="2x"
        onClick={onClose}
      />
      <div className="modal-content">
        {gallery.length > 1 && <FontAwesomeIcon
          className="arrow-left"
          icon={faAngleLeft}
          size="3x"
          color="white"
          onClick={previous}
        /> || null}
        <div className="gallery">
          <span className="gallery-counter">
            {current + 1}/{gallery.length}
          </span>
          <Img
            onClick={next}
            src={gallery[current].formats.medium.url}
            alt={""}
          ></Img>
        </div>
        {(gallery.length > 1 && (
          <FontAwesomeIcon
            className="arrow-right"
            icon={faAngleRight}
            size="3x"
            color="white"
            onClick={next}
          />
        )) ||
          null}
      </div>
    </div>
  );
}
