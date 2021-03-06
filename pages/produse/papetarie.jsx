import EnvelopeCard from '../../components/EnvelopeCard'
import SealCard from '../../components/SealCard'
import PaperCard from '../../components/PaperCard'
import Layout from '../../components/Layout'

export default function Papetarie() {
    return (
        <Layout>
            <div className="cards-container papetarie" id="produse">
                <EnvelopeCard isOpen={false} />
                <SealCard isOpen={false}/>
                <PaperCard isOpen={false}/>
            </div>
        </Layout>
    )
}