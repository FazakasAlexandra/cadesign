import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function despreCAdesign() {
  const BACKGROUND_COLOR_GREEN = "#647058";

  return (
    <Layout>
      <div className="page scroll-snap-page home">
        <div
          className="box"
          style={{
            background:
              "url(assets/green-flower-bg.png) no-repeat center center / cover",
          }}
        >
          Despre comanda coming soon
        </div>
      </div>
      <Footer color={BACKGROUND_COLOR_GREEN}></Footer>
    </Layout>
  );
}
