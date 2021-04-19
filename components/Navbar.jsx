import NavProducts from './NavProducts'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar() {
    const [menuOn, setMenuOn] = useState(true)
    return (<>
        <nav className="main-nav">
            <FontAwesomeIcon icon={faBars} size="2x" onClick={() => setMenuOn(!menuOn)} />
            <Link href="/"><img className="logo" src="/assets/navbar/logo.jpg" alt="logo" /></Link>
            <ul className="list" style={{display : menuOn ? 'flex' : 'none'}}>
                <Link href="/personalizare"><a>Personalizare</a></Link>
                <Link href="/#livrare"><a>Despre Livrare</a></Link>
                <Link href="/despreCAdesign"><a>Despre Noi</a></Link>
            </ul>
        </nav>
        <NavProducts />
    </>
    )
}