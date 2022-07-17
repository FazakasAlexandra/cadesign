import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
export default function HomePage() {
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "250px 0px",
    backgroundSize: "cover",
    scrollSnapAlign: "center",
  };

  return (
    <>
      <div
        style={{
          maxHeight: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
       <Navbar />
        <div
          style={{
            background: "url(assets/home/pink_bg.png) no-repeat",
            ...boxStyle,
          }}
        >
          <img src="/assets/home/pink.png" height="700px" />
        </div>
        <div
          style={{
            background: "url(assets/home/black_bg.png) no-repeat",
            ...boxStyle,
          }}
        >
          <img src="/assets/home/black.png" />
        </div>
        <div
          style={{
            background: "url(assets/home/blue_bg.png) no-repeat",
            ...boxStyle,
          }}
        >
          <img src="/assets/home/blue.png" />
        </div>
        <div
          style={{
            background: "url(assets/home/green_bg.png) no-repeat",
            ...boxStyle,
          }}
        >
          <img src="/assets/home/green.png" />
        </div>
        <div
          style={{
            backgroundColor: "#647058",
            ...boxStyle,
            flexDirection: "column",
          }}
        >
          <img src="/assets/home/logo.png" width="500px" />
          <div
            className="slogan"
            style={{
              margin: "0px",
            }}
          >
            <a target="_blank" href="/assets/catalog2021.pdf">
              Catalog
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
