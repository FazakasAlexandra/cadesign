import Link from 'next/link'
import Layout from '../components/Layout'
import OrderStepCard from '../components/OrderStepCard'
import Image from 'next/image'
import useTranslation from '../hooks/useTranslation';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout>
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
            <h1>{t("HOMEPAGE_h1")}</h1>
            <a  target="_blank" href="/assets/catalog2021.pdf">{t("HOMEPAGE_CATALOG")}</a>
          </div>
        </div>
        <div className="order-steps-cards" id="procedura">
          <OrderStepCard
            text={
              <>
                <p>{t("DELIVERY_STEP1_p1")}</p>
                <p>{t("DELIVERY_STEP1_p2a")} <Link href="/produse/modele"><a target="_blank">{t("DELIVERY_STEP1_p2b")}</a></Link></p>
                <p>{t("DELIVERY_STEP1_p3a")} <i>{t("DELIVERY_STEP1_p3b")}</i></p>
                <p>{t("DELIVERY_STEP1_p4")}</p>
                <p>{t("DELIVERY_STEP1_p5a")}<Link href="/personalizare#invitatii"><a target="_blank">{t("DELIVERY_STEP1_p5b")}</a></Link></p>
              </>
            }

            number={1}
            title={t("DELIVERY_STEP1_TITLE")}
          />
          <OrderStepCard
            text={
              <>
                <p>{t("DELIVERY_STEP2_p1")}</p>
                <p>{t("DELIVERY_STEP2_p2a")} <a target="_blank" href="/assets/contract.pdf">{t("DELIVERY_STEP2_p2b")}</a> {t("DELIVERY_STEP2_p2c")}</p>
              </>
            }
            number={2}
            title={"Contract"}
          />
          <OrderStepCard
            text={
              <>
                <p>{t("DELIVERY_STEP3_p1")}</p>
                <p>{t("DELIVERY_STEP3_p2")} <b>{t("DELIVERY_STEP3_p2a")} </b>{t("DELIVERY_STEP3_p2b")}</p>
                <p>{t("DELIVERY_STEP3_p3")} <b>{t("DELIVERY_STEP3_p3a")}</b></p>
              </>
            }
            number={3}
            title={t("DELIVERY_STEP3_TITLE")}
            id="livrare"
          />
        </div>
      </div>
      </Layout>
  )
}