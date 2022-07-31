import Layout from "../../../components/Layout";
import Footer from "../../../components/Footer";
import { normalize } from "../../../utils/normalize";
import { useState } from "react";
import { Img } from "../../../components/Img";

export async function getServerSideProps(_context) {
  let data = null;
  try {
    const res = await fetch(
      `${process.env.STRAPI_ENDPOINT}/api/seals?populate=*`
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

  const getHex = (str) => str.split("_")[1];
  
  const colors = [...new Set(data.map((seal) => getHex(seal.culoare)))];
  const inscriptions = [...new Set(data.map((seal) => seal.inscription))];

  const [color, setColor] = useState(colors[0]);
  const [inscription, setInscription] = useState(inscriptions[0]);

  const seals = data.filter((seal) => getHex(seal.culoare) === color);

  return (
    <Layout>
      <div className="page scroll-snap-page sigilii">
        <div
          className="box"
          style={{
            background: `url(../../assets/green-leafy-bg.png) no-repeat center center / cover`,
          }}
        >
          <div className="seals-container">
            <Img
              className="selected-seal"
              src={
                data.find((seal) => {
                  return (
                    getHex(seal.culoare) === color &&
                    seal.inscription === inscription
                  );
                })?.picture.formats.medium.url
              }
            />
            <div className="wraper">
              <span>Inscriptii</span>
              <div className="seals-box">
                {seals
                  .filter((seal) => seal.inscription !== inscription)
                  .map((seal) => (
                    <Img
                      key={`${seal.inscription}-${seal.culoare}`}
                      onClick={() => setInscription(seal.inscription)}
                      src={seal.picture.formats.thumbnail.url}
                      className="thumbnail-seal"
                    />
                  ))}
              </div>
            </div>
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
            </div>
          </div>
        </div>
        <Footer color={BACKGROUND_COLOR_GREEN}></Footer>
      </div>
    </Layout>
  );
}
