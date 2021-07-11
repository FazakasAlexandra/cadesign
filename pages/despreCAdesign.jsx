import Layout from '../components/Layout'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import useTranslation from '../hooks/useTranslation';

export default function despreCAdesign() {
     const { t } = useTranslation();
    return (
        <Layout>
            <div className="page despre-noi" id="noi">
                <div className="background"></div>
                <div className="content">
                    <img
                        src={`/assets/about-page/catasiana.jpg`}
                        height={450}
                        width={450}
                        style={{ position: "absolute" }}
                        alt={t("ABOUT_img1")}
                        className="us-img"
                    >
                    </img>
                    <div className="text">
                        <h1>{t("ABOUT_h1")}</h1>
                        <p>{t("ABOUT_p1")}</p>
                        <p>{t("ABOUT_p2")}</p>
                        <p>{t("ABOUT_p3")}</p>
                    </div>
                    <div className="images-container">
                        <Image
                            src={`/assets/about-page/img1.png`}
                            height={190}
                            width={280}
                            alt={t("ABOUT_img2")}>
                        </Image>
                        <Image
                            src={`/assets/about-page/img2.png`}
                            height={190}
                            width={280}
                            alt={t("ABOUT_img3")}>
                        </Image>
                        <Image
                            src={`/assets/about-page/img3.png`}
                            height={190}
                            width={280}
                            alt={t("ABOUT_img4")}>
                        </Image>
                    </div>
                    <p style={{ fontWeight: "bold", fontSize: "18px", textDecoration: "underline", marginBottom: "1rem" }}>{t("ABOUT_email")}</p>
                    <div className="icons">
                        <a target="_blank" href="https://www.facebook.com/cadesignbistrita"><FontAwesomeIcon icon={faFacebookSquare} size="4x" style={{marginRight:"1rem", color:"#828580"}} className="brand-icons"/></a>
                        <a target="_blank" href="https://www.instagram.com/cadesign.ro/"><FontAwesomeIcon icon={faInstagram} size="4x" style={{color:"#828580"}} className="brand-icons"/></a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}