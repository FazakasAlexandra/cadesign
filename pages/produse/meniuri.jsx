import Card from "../../components/cards/Card";
import Layout from "../../components/Layout";
import { normalize } from "../../utils/normalize";

export async function getServerSideProps(_context) {
  let data = null;
  try {
    const res = await fetch(
      `${process.env.STRAPI_ENDPOINT}/api/menus?populate=*`
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

export default function Meniuri({ data }) {
  return (
    <Layout>
      <div className="cards-container" id="produse">
        {(data.length &&
          data.map((menu, idx) => (
            <Card key={idx} data={menu} type="menus" />
          ))) || (
          <p>
            Oops, momentan avem niste dificultati tehnice! Reveniti mai tarziu.
          </p>
        )}
      </div>
    </Layout>
  );
}
