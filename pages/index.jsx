import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import OrderStepCard from '../components/OrderStepCard'
const envelopes = require('../db/envelopes.json');
import Image from 'next/image'
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function HomePage() {
  return (
    <html lang="ro-RO">
      <Head>
        <title>CAdesign invitatii handmade pentru nunta</title>
        <meta name="keywords" content="invitatii pentru nunti, hartie handmade, anvelope, siginii, nunta, plicuri"></meta>
        <meta name="description" content="Confectionam invitatii de nunta handmade personalizate, menuri pentru nunti, carti de vizita, hartie, sigilii si plicuri."></meta>
        <link rel="icon" href="/assets/logo.png"></link>
      </Head>
      <div className="page home">
        <div className="slogan-container">
          <Image
            src={`/assets/envelopes_details/interiordecorat_plic_2ron.png`}
            height={585}
            width={450}
            alt="plic invitatie nunta"
          />
          <div className="slogan">
            <i>CAdesign</i>
            <h1>INVITATII HANDMADE</h1>
            <a href="/assets/catalog2021.pdf">Catalog</a>
          </div>
        </div>
        <div className="order-steps-cards" id="procedura">
          <OrderStepCard
            text={
              <>
                <p>Alegerea unui model nu este intodteauna un lucru usor.</p>
                <p>Noi stim lucrul acesta si dorim sa va ajutam punandu-va la dispozitie o gama diversificata de <Link href="/produse/modele"><a>modele de invitatii handmade.</a></Link></p>
                <p>Puteti alege un unul dintre modelele de invitatii, puteti sugera modifcari ale acesteia sau, daca aveti ceva special in gand, invitatiile noastre pot fi <i>personalizate in intregime !</i></p>
                <p>Daca v-ati decis pentru modificari in privinta unui model, pretul modelului se schimba ( poate scadea sau creste )  in functie de modificarile cerute. </p>
                <p>Daca v-ati decis pentru o invitatie de nunta in intregime personalizata, puteti calcula pretul final raspunzand la <Link href="/preturi"><a>chestionarul nostru.</a></Link></p>
              </>
            }

            number={1}
            title={"Alegerea modelului"}
          />
          <OrderStepCard
            text={
              <>
                <p>Daca te-ai decis in privinta unui model, tot ce ramane de facut este sa ne trimiti modelul impreuna cu textul care ti-ar placea ! </p>
                <p>Odata ce am primit aceste lucruri, noi va trimitem un <a href="/assets/contract.pdf">contract</a> pe care puteti sa il semnati fie in mod digital, fie in mod fizic.</p>
              </>
            }
            number={2}
            title={"Contract"}
          />
          <OrderStepCard
            text={
              <>
                <p>In decurs de cateva zile de la semnarea contractului, veti primi doua mostre din care o veti alege pe cea favorita.</p>
                <p>Pentru a se incepe realizarea invitatiilor, trebuie achitat un <b>avans de 50%</b> din pretul total.</p>
                <p>Odata avansul primit invitatiile vor fi livrate in <b>minimun 15 zile.</b></p>
              </>
            }
            number={3}
            title={"Mostre si livrare"}
            id="livrare"
          />
        </div>
        <MessengerCustomerChat
          pageId="2204227486254620"
          appId="3205299383049134"
          loggedInGreeting="Buna, suntem aici pentru a raspunde la orice intrebari !"
          loggedOutGreeting="Buna, suntem aici pentru a raspunde la orice intrebari !"
        />
      </div>
      </html>
  )
}