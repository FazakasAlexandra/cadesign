import Link from "next/link";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useState } from "react";

export default function Navbar() {
  const isMobile = useMediaQuery(1300);
  const [isNavOn, setIsNavOn] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        className="bars_icon"
        icon={faBars}
        size="2x"
        style={{
          display: isMobile ? "block" : "none",
        }}
        onClick={() => setIsNavOn(true)}
      />
      <nav
        className="nav"
        style={{
          display: !isMobile || isNavOn ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          className="cancel_icon"
          icon={faTimes}
          size="2x"
          style={{
            display: isNavOn ? "block" : "none",
          }}
          onClick={() => setIsNavOn(false)}
        />
        <Link href="/">
          <img className="logo" src="/assets/navbar/logo.jpg" alt="logo" />
        </Link>
        <div className="circles-container">
          <Link href="/produse/papetarie">
            <div>
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
            </div>
          </Link>

          <Link href="/produse/modele#produse">
            <div>
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
            </div>
          </Link>

          <Link href="/produse/carti-de-vizita#produse">
            <div>
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
            </div>
          </Link>

          <Link href="/produse/meniuri#produse">
            <div>
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
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
