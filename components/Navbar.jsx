import NavProducts from './NavProducts'
import Link from 'next/link'

export default function Navbar() {
    return (<>
        <nav className="main-nav">
            <img className="logo" src="/assets/navbar/logo.jpg" alt="logo" />
            <ul className="list">
                <Link href="/prices"><a>Preturi</a></Link>
                <Link href="/delivery"><a>Livrare</a></Link>
            </ul>
        </nav>
        <NavProducts />
    </>
    )
}