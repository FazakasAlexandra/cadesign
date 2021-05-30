import Layout from '../components/Layout'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function despreCAdesign() {
    return (
        <Layout>
            <div className="page despre-noi">
                <div className="background"></div>
                <div className="content">
                    <img
                        src={`/assets/about-page/catasiana.JPG`}
                        height={450}
                        width={450}
                        style={{ position: "absolute" }}
                        alt="imagine sigiliu"
                        className="us-img"
                    >
                    </img>
                    <div className="text">
                        <h1>Noi suntem Cata si Ana</h1>
                        <p>In urma cu aproximativ  doi ani , am început afacerea CA design, cu invitații de nuntă personalizate și realizate manual, ceva nou pentru România.</p>
                        <p>Amândurora ne place arta și dorim ca prin invitațile create de noi, mirii să își prezinte viitoare nuntă, pentru că știm cu toții, invitația este prima imagine a nunții tale. Si ne bucurăm ca prin invitațile noastre să fim parte a nunții fiecărui cuplu care alege să lucreze cu noi.</p>
                        <p>Pentru noi e extrem de important dorința mirilor, ca totul sa arate cum ei visează și sa fie cea mai buna calitate, de aceea suntem atenți la fiecare detaliu și invest mult în materialele care le folosim.</p>
                    </div>
                    <div className="images-container">
                        <Image
                            src={`/assets/about-page/img1.png`}
                            height={190}
                            width={280}
                            alt="imagine masurat dimensiuni invitatii">
                        </Image>
                        <Image
                            src={`/assets/about-page/img2.png`}
                            height={190}
                            width={280}
                            alt="imagine invitatii si plicuri">
                        </Image>
                        <Image
                            src={`/assets/about-page/img3.png`}
                            height={190}
                            width={280}
                            alt="imagine imprimanta invitatii">
                        </Image>
                    </div>
                    <p style={{ fontWeight: "bold", fontSize: "18px", textDecoration: "underline", marginBottom: "1rem" }}>cadesign18@gmail.com</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/cadesignbistrita"><FontAwesomeIcon icon={faFacebookSquare} size="4x" style={{marginRight:"1rem", color:"#828580"}} className="brand-icons"/></a>
                        <a href="https://www.instagram.com/cadesign.ro/"><FontAwesomeIcon icon={faInstagram} size="4x" style={{color:"#828580"}} className="brand-icons"/></a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}