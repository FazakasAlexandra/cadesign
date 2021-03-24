import Link from 'next/link'

export default function NavProducts() {
    return (
        <nav className="sec-nav">
            <Link href="/produse/papetarie">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon1.png" alt="menu illustration" className="menu-image" />
                    <span className="menu-circle title" id="icon-papetarie">Papetarie</span>
                </div>
            </Link>

            <Link href="/produse/modele">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon3.png" alt="menu illustration" className="menu-image" />
                    <span className="menu-circle title" id="icon-modele">Modele</span>
                </div>
            </Link>

            <Link href="/produse/carti-de-vizita">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon4.png" alt="menu illustration" className="menu-image" />
                    <span className="menu-circle title" id="icon-carti-vizita">Carti de vizita</span>
                </div>
            </Link>

            <Link href="/produse/meniuri">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon2.png" alt="menu illustration" className="menu-image" />
                    <span className="menu-circle title" id="icon-meniuri">Meniuri</span>
                </div>
            </Link>

        </nav>
    );
}