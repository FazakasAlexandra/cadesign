import Card from "../../components/cards/Card";
import Layout from "../../components/Layout";
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

  return (
    <Layout>
      <div className="cards-container" id="produse">
        {(data.length &&
          data.map((model, idx) => <Card key={idx} data={model} />)) || (
          <p>
            Oops, momentan avem niste dificultati tehnice! Reveniti mai tarziu.
          </p>
        )}
      </div>
    </Layout>
  );
}
