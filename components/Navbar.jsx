import Link from "next/link";

export default function Navbar() {
  return (
      <nav className="sec-nav">
         <Link href="/"><img className="logo" src="/assets/navbar/logo.jpg" alt="logo" /></Link>
        <Link href="/produse/papetarie#produse">
          <div className="menu-circle">
            <img
              src="/assets/navbar/menu_icon1.jpg"
              alt="papetarie"
              className="menu-image"
            />
            <span className="menu-circle title" id="icon-papetarie">
              Papetarie
            </span>
          </div>
        </Link>

        <Link href="/produse/modele#produse">
          <div className="menu-circle">
            <img
              src="/assets/navbar/menu_icon3.jpg"
              alt="modele invitatii"
              className="menu-image"
            />
            <span className="menu-circle title" id="icon-modele">
              Modele
            </span>
          </div>
        </Link>

        <Link href="/produse/carti-de-vizita#produse">
          <div className="menu-circle">
            <img
              src="/assets/navbar/menu_icon4.jpg"
              alt="carti de vizita"
              className="menu-image"
            />
            <span className="menu-circle title" id="icon-carti-vizita">
              Carti de vizita
            </span>
          </div>
        </Link>

        <Link href="/produse/meniuri#produse">
          <div className="menu-circle">
            <img
              src="/assets/navbar/menu_icon2.jpg"
              alt="meniuri"
              className="menu-image"
            />
            <span className="menu-circle title" id="icon-meniuri">
              Meniuri
            </span>
          </div>
        </Link>
      </nav>
  );
}
