import { Img } from "../Img";
import { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function View({ data, isEven, background, type }) {
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(false);

  const changeImage = () => {
    if (data.gallery.length > 1) {
      const next = current + 1 === data.gallery.length ? 0 : current + 1;
      setCurrent(next);
    }
  };

  return (
    <div
      className="box"
      style={{
        background: isEven
          ? `url(../assets/${background.image}) no-repeat center center / cover`
          : background.color,
      }}
    >
      <div className={`card ${data.position}`}>
        <div className="card-details">
          <div className="wraper">
            {data.name ? <span>{type}</span> : null}
            <h3>{data.name || type}</h3>
            <span>{data.slogan || "Made with love by cadesign"}</span>
            <p>{data.description}</p>
            <span className="card-price">{data.price} Lei </span>
          </div>
        </div>

        <div
          className="card-gallery"
          onClick={() => {
            setZoom(true);
          }}
        >
          <span className="gallery-counter">
            {current + 1}/{data.gallery.length}
          </span>
          <Img src={data.gallery[current].formats.medium.url} alt={data.name} />
        </div>
      </div>
      <div
        className="modal"
        onClick={(e) => {
         
          if (e.target === e.currentTarget) {
            setZoom(false);
            return true;
        }
        }}
        style={{
          display: zoom ? "block" : "none",
        }}
      >
        <FontAwesomeIcon
          className="cancel"
          icon={faTimes}
          size="2x"
          onClick={() => setZoom(false)}
        />
        <div className="modal-content">
          <Img
            onClick={changeImage}
            src={data.gallery[current].formats.medium.url}
            alt={data.name}
          ></Img>
        </div>
      </div>
    </div>
  );
}
