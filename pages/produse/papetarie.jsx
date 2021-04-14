import EnvelopeCard from '../../components/EnvelopeCard'
import SealCard from '../../components/SealCard'
import PaperCard from '../../components/PaperCard'
import Layout from '../../components/Layout'

export default function Papetarie() {
    return (
        <Layout>
            <div className="cards-container" id="produse">
                <EnvelopeCard />
                <SealCard />
                <PaperCard />
            </div>
        </Layout>
    )
}