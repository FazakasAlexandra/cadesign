import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <Layout hideFooter={true}>
      <div className="page home">
        <div
          className="box"
          style={{
            background:
              "url(assets/home/pink_bg.png) no-repeat center center / cover",
          }}
        >
          <img src="/assets/home/pink.png" height="700px" />
        </div>
        <div
          className="box"
          style={{
            background:
              "url(assets/home/black_bg.png) no-repeat center center / cover",
          }}
        >
          <img src="/assets/home/black.png" />
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
          className="box"
          style={{
            background:
              "url(assets/home/green_bg.png) no-repeat center center / cover",
          }}
        >
          <img src="/assets/home/green.png" />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
