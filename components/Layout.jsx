import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Invitatii handmade</title>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="invitatii pentru nunta, hartie handmade, arta manual, plicuri, siginii, nunta, invitatie, special"></meta>
                <meta name="description" content="Confectionam invitatii personalizate pentru nunta lucrate manual, de cea mai buna calitate si la cel mai bun pret"></meta>
                <link rel="icon" href="/assets/logo.png"></link>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {props.children}
            </main>
        </>
    )

}