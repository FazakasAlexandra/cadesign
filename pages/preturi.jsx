import { useState } from 'react'
import NavSteps from "../components/NavSteps";
import EnvelopeCard from "../components/EnvelopeCard";
import SealCard from '../components/SealCard'
import PricesTotal from "../components/PricesTotal";

export default function Preturi() {
    const [selectedItems, setSelectedItems] = useState([])
    const [steps, setSteps] = useState([
        { id: 1, product: 'envelopes', currentSelection: true, component: EnvelopeCard },
        { id: 2, product: 'paper', currentSelection: false, component: 'PaperCard' },
        { id: 3, product: 'menus', currentSelection: false, component: 'MenuCard' },
        { id: 4, product: 'seals', currentSelection: false, component: SealCard },
        { id: 5, product: 'addons', currentSelection: false, component: 'AddonsCard' }
    ])

    const currentStep = steps.find(({currentSelection}) => currentSelection === true)
    const CurrentComponent = currentStep.component

    return (<div className="page preturi row">
        <div className="navsteps-component-wraper">
            <NavSteps steps={steps} setSteps={setSteps}/>
        <div className="step-component">
            <CurrentComponent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
        </div>
        <div className="price-calculator">
            <PricesTotal selectedItems={selectedItems} />
        </div>
    </div>
    )
}