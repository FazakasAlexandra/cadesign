import NavProducts from './NavProducts'
import Link from 'next/link'

export default function Navbar() {
    return (<>
        <nav className="main-nav">
            <img className="logo" src="/assets/navbar/logo.jpg" alt="logo" />
            <ul className="list">
                <Link href="/preturi"><a>Preturi</a></Link>
                <Link href="/livrare"><a>Livrare</a></Link>
            </ul>
        </nav>
        <NavProducts />
    </>
    )
}