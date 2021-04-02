import { useState } from 'react'
import NavSteps from "../components/NavSteps";
import EnvelopeCard from "../components/EnvelopeCard";
import SealCard from '../components/SealCard'
import PricesTotal from "../components/PricesTotal";

const optionsComponents = [EnvelopeCard, SealCard]

export default function Preturi(props) {
    const [selectedItems, setSelectedItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const CurrentComponent = optionsComponents[0]
    const [steps, setSteps] = useState([
        { id: 1, product: 'envelopes', currentSelection: true },
        { id: 2, product: 'paper', currentSelection: false },
        { id: 3, product: 'menus', currentSelection: false },
        { id: 4, product: 'addons', currentSelection: false }
    ])

    return (<div className="page preturi row">
        <div className="navsteps-component-wraper">
            <NavSteps steps={steps} setSteps={setSteps}/>
        <div className="step-component">
            <CurrentComponent selectedItems={selectedItems} setSelectedItems={setSelectedItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
        </div>
        </div>
        <div className="price-calculator">
            <PricesTotal totalPrice={totalPrice} selectedItems={selectedItems} />
        </div>
    </div>
    )
}