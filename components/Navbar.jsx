import NavProducts from './NavProducts'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useTranslation from '../hooks/useTranslation';

export default function Navbar() {
    const [menuOn, setMenuOn] = useState(true)
    const { t, setLocale, locales, locale } = useTranslation();

    return (<>
        <nav className="main-nav">
            <FontAwesomeIcon icon={faBars} size="2x" onClick={() => setMenuOn(!menuOn)} />
            <div className="language-options" onClick={() => {
                locale === 'en' ? setLocale('ro') : setLocale('en')
            }}>
              <img src={`/assets/${locale}.png`}/>
              <span>{locale}</span>
            </div>
            <Link href="/"><img className="logo" src="/assets/navbar/logo.jpg" alt="logo" /></Link>
            <ul className="list" style={{ display: menuOn ? 'flex' : 'none' }}>
                <Link href="/#livrare"><a>{t("HEADER_LINK2")}</a></Link>
                <Link href="/despreCAdesign#noi"><a>{t("HEADER_LINK3")}</a></Link>
            </ul>
        </nav>
        <NavProducts />
    </>
    )
}