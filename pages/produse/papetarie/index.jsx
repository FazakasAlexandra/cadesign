import Layout from "../../../components/Layout";
import Footer from "../../../components/Footer";
import Link from "next/link";

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
          <div className="options-wraper">
            <Link href="/produse/papetarie/hartie">
              <div
                className="option"
                style={{
                  background: `url(../assets/paper.png) no-repeat center center / cover`,
                }}
              >
                <p>Hartie</p>
              </div>
            </Link>
            <Link href="/produse/papetarie/plicuri">
              <div className="option">
                <p>Plicuri</p>
              </div>
            </Link>
            <Link href="/produse/papetarie/sigilii">
              <div className="option">
                <p>Sigilii</p>
              </div>
            </Link>
            <Link href="/produse/papetarie/accesori">
              <div className="option">
                <p>Accesori</p>
              </div>
            </Link>
          </div>
        </div>
        <Footer color={BACKGROUND_COLOR_GREEN}></Footer>
      </div>
    </Layout>
  );
}
