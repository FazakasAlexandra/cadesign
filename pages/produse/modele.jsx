import View from "../../components/cards/View";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import { normalize } from "../../utils/normalize";

export async function getServerSideProps(_context) {
  let data = null;
  try {
    const res = await fetch(
      `${process.env.STRAPI_ENDPOINT}/api/models?populate=*`
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
  const BACKGROUND_COLOR_PINK = "#DDBEBB"
  return (
    <Layout>
      <div className="page scroll-snap-page">
        {(data.length &&
          data.map((model, idx) => (
            <View
              key={idx}
              data={model}
              background={{
                image: "rosy-bg.png",
                color: BACKGROUND_COLOR_PINK
              }}
              type="Model"
              isEven={idx % 2 === 0}
            />
          ))) || (
          <p>
            Oops, momentan avem niste dificultati tehnice! Reveniti mai tarziu.
          </p>
        )}
        <Footer color={BACKGROUND_COLOR_PINK}></Footer>
      </div>
    </Layout>
  );
}
