import Layout from "../../../components/Layout";
import Footer from "../../../components/Footer";

export default function Modele() {
  const BACKGROUND_COLOR_GREEN = "#647058";
  return (
    <Layout>
      <div className="page scroll-snap-page papetarie">
        <div
          className="box"
          style={{
            background: `url(../assets/green-leafy-bg.png) no-repeat center center / cover`,
          }}
        >
          Hartie
        </div>
        <Footer color={BACKGROUND_COLOR_GREEN}></Footer>
      </div>
    </Layout>
  );
}
