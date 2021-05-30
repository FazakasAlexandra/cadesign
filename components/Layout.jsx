import Head from 'next/head'
import Navbar from './Navbar'
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Layout({ children }) {
    return (
        <html lang="ro">
            <Head>
                <title>Invitatii handmade pentru nunta</title>
                <meta charset="UTF-8"/>
                <meta name="keywords" content="invitatii pentru nunta, hartie handmade, arta manual, plicuri, siginii, nunta, invitatie, special"></meta>
                <meta name="description" content="Confectionam invitatii personalizate pentru nunta lucrate manual, de cea mai buna calitate si la cel mai bun pret"></meta>
                <link rel="icon" href="/assets/logo.png"></link>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
                <MessengerCustomerChat
                    pageId="2204227486254620"
                    appId="3205299383049134"
                    loggedInGreeting="Buna, suntem aici pentru a raspunde la orice intrebari !"
                    loggedOutGreeting="Buna, suntem aici pentru a raspunde la orice intrebari !"
                />
            </main>
            <footer>
                <script src="https://smtpjs.com/v3/smtp.js"></script>
            </footer>
        </html>
    )

}