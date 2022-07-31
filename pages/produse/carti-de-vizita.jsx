import View from "../../components/cards/View";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import { normalize } from "../../utils/normalize";

export async function getServerSideProps(_context) {
  let data = null;

  try {
    const res = await fetch(
      `${process.env.STRAPI_ENDPOINT}/api/visit-cards?populate=*`
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

export default function CartiDeVizita({ data }) {
  const BACKGROUND_COLOR_GREEN = "#647058"

  return (
    <Layout>
      <div className="page scroll-snap-page">
        {(data.length &&
          data.map((model, idx) => (
            <View
              key={idx}
              data={model}
              isEven={idx % 2 === 0}
              type="Carte de vizita"
              background={{
                image: "green-leafy-bg.png",
                color: BACKGROUND_COLOR_GREEN
              }}
            />
          ))) || (
          <p>
            Oops, momentan avem niste dificultati tehnice! Reveniti mai tarziu.
          </p>
        )}
        <Footer color={BACKGROUND_COLOR_GREEN}></Footer>
      </div>
    </Layout>
  );
}
