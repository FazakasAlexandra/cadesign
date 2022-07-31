import { Img } from '../Img'
import { useState } from 'react'

export default function View({ data, isEven, background, type }) {
  console.log(data);
  const [current, setCurrent] = useState(1);

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
          <div className="card-gallery">
          <span className="gallery-counter">{current}/{data.gallery.length}</span>
            <Img src={data.gallery[0].formats.medium.url} alt={data.name} />
          </div>
        </div>
      </div>
  );
}