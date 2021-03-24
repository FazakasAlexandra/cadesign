import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function SealCard() {
    return (<>
        <div className="cards-container">
            <div className="card seal">
                <Image
                    src="/assets/seals/sigiliu_bronz_frunza_1.5ron.png" // Route of the image file
                    height={360} // Desired size with correct aspect ratio
                    width={300} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
                <div>

                </div>
            </div>
        </div>
    </>
    )
}