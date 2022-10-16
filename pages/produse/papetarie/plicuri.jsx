import Layout from "../../../components/Layout";
import Footer from "../../../components/Footer";
import { normalize } from "../../../utils/normalize";
import { useState } from "react";
import { Img } from "../../../components/Img";

export async function getServerSideProps(_context) {
  let data = null;
  try {
    const res = await fetch(
      `${process.env.STRAPI_ENDPOINT}/api/envelopes?populate=*`
    );
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: (data && normalize(data)) || [],
    },
  };
}

export default function Modele({ data }) {
  const BACKGROUND_COLOR_GREEN = "#647058";
  const colors = data.map((envelope) => envelope.hex);
  const [color, setColor] = useState(colors[0]);

  const envelope = data.find((envelope) => envelope.hex === color);

  return (
    <Layout>
      <div className="page scroll-snap-page sigilii">
        <div
          className="box"
          style={{
            background: `url(../../assets/green-flower-bg.png) no-repeat center center / cover`,
          }}
        >
          <div className="seals-container">
            <Img
              className="selected-seal"
              src={envelope?.picture.formats.medium.url}
            />
            <div className="wraper">
              <span>Culori</span>
              <div className="color-box-container">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="color-box"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setColor(color);
                    }}
                  ></div>
                ))}
              </div>
              <small>
                * Plicurile pot sa vina si in alte culori in functie de cerere
              </small>
              <br />
              <small>* Culoarea poate sa difere in functie de lumina</small>
            </div>
            <div className="wraper">
              <p className="description">{envelope.description}</p>
              <p>
                Pret dimensiune mare <small>{envelope.sizeLarge} cm</small>
                {envelope.priceLarge} Lei
              </p>
              <p>
                Pret dimensiune mica <small>{envelope.sizeSmall} cm</small>
                {envelope.priceSmall} Lei
              </p>
            </div>
          </div>
        </div>
        <Footer color={BACKGROUND_COLOR_GREEN}></Footer>
      </div>
    </Layout>
  );
}
