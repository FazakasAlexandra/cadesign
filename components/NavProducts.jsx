import Link from 'next/link'
import useTranslation from '../hooks/useTranslation';

export default function NavProducts() {
    const { t } = useTranslation();

    return (
        <nav className="sec-nav">
            <Link href="/produse/papetarie#produse">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon1.jpg" alt="papetarie" className="menu-image" />
                    <span className="menu-circle title" id="icon-papetarie">{t("PRODUCTS_LINK1")}</span>
                </div>
            </Link>

            <Link href="/produse/modele#produse">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon3.jpg" alt="modele invitatii" className="menu-image" />
                    <span className="menu-circle title" id="icon-modele">{t("PRODUCTS_LINK2")}</span>
                </div>
            </Link>

            <Link href="/produse/carti-de-vizita#produse">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon4.jpg" alt="carti de vizita" className="menu-image" />
                    <span className="menu-circle title" id="icon-carti-vizita">{t("PRODUCTS_LINK3")}</span>
                </div>
            </Link>

            <Link href="/produse/meniuri#produse">
                <div className="menu-circle">
                    <img src="/assets/navbar/menu_icon2.jpg" alt="meniuri" className="menu-image" />
                    <span className="menu-circle title" id="icon-meniuri">{t("PRODUCTS_LINK4")}</span>
                </div>
            </Link>

        </nav>
    );
}