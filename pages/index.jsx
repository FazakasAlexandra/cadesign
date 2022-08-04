import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <div className="page scroll-snap-page home">
        <div
          className="box"
          style={{
            background:
              "url(assets/home/pink_bg.png) no-repeat center center / cover",
          }}
        >
          <img className="img" src="/assets/pink-ball.png" />
        </div>
        <div
          className="box left"
          style={{
            background:
              "url(assets/home/black_bg.png) no-repeat center center / cover",
          }}
        >
          <div className="text center">
            <div>
            <h1>Promotii</h1>
            <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
            </p>
            <Link href="/oferte">
              <i>
                Vezi oferte{" "}
                <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    color="white"
                  />{" "}
              </i>
            </Link>
            </div>
          </div>
          <img src="/assets/home/black.png"/>
        </div>
        <div
          className="box"
          style={{
            background:
              "url(assets/home/blue_bg.png) no-repeat center center / cover",
          }}
        >
          <img src="/assets/home/blue.png" />
        </div>
        <div
          className="box col"
          style={{
            background:
              "url(assets/home/green_bg.png) no-repeat center center / cover",
          }}
        >
          <div>
            <div className="text">
              <h1>Personalizeaza-ti invitatia!</h1>
              <p>
                Transforma-ti paleta de culori preferate intr-o invitatie de
                vis!
              </p>
              <Link href="/personalizare">
                <i>
                  Vezi ghidul de personalizare{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    color="white"
                  />{" "}
                </i>
              </Link>
            </div>
            <img src="/assets/home/green.png" style={{marginTop: "30px"}}/>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
