import Link from "next/link";

export default function Layout({color}) {
  const BACKGROUND_COLOR_GREEN = "#647058";

  return (
    <footer
      style={{
        backgroundColor: color || BACKGROUND_COLOR_GREEN,
      }}
    >
      <div className="sections">
        <div className="section produse">
          <h3>Produse</h3>
          <ul>
            <Link href="/produse/papetarie">
              <li>Papetarie</li>
            </Link>

            <Link href="/produse/modele">
              <li>Modele</li>
            </Link>

            <Link href="/produse/carti-de-vizita">
              <li>Carti de Vizita</li>
            </Link>

            <Link href="/produse/meniuri">
              <li>Meniuri</li>
            </Link>
          </ul>
        </div>
        <Link href="/comanda">
          <div className="section">
            <h3>Despre comanda</h3>
            <p>Detalii despre procesul de comanda, livrare si plata</p>
          </div>
        </Link>
        <Link href="/despreCAdesign">
          <div className="section">
            <h3>Despre noi</h3>
            <p>Afla mai multe despre oamenii din spatele cadesign</p>
          </div>
        </Link>

        <Link href="/personalizare">
          <div className="section">
            <h3>Personalizare</h3>
            <p>Ghid complet despre cum pot sa iti personalizezi invitatia</p>
          </div>
        </Link>
        <div className="section contact">
          <h3>Contacteaza-ne</h3>
          <p>
            <strong>Email</strong>
            <span>designca18@gmail.com</span>
          </p>
          <p>
            <strong>Telefon</strong>
            <span>0740858539</span>
          </p>
        </div>
      </div>
      <span className="copyright">© cadesign 2023</span>
    </footer>
  );
}
