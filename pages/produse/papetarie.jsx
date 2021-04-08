import EnvelopeCard from '../../components/EnvelopeCard'
import SealCard from '../../components/SealCard'
import PaperCard from '../../components/PaperCard'

export default function Papetarie() {
    return (
        <>
            <div className="cards-container" id="produse">
                <EnvelopeCard/>
                <SealCard/>
                <PaperCard/>
            </div>
        </>
    )
}