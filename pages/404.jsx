import Layout from "../components/Layout";

export default function notFound() {
  const BACKGROUND_COLOR_GREEN = "#647058"

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
           Nu am putut gasi pagina pe care o cutati.
        </div>
      </div>
      <Footer color={BACKGROUND_COLOR_GREEN}></Footer>
    </Layout>
  );
}