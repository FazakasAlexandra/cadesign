import { useState } from 'react'
import NavSteps from "../components/NavSteps";
import EnvelopeCard from "../components/EnvelopeCard";
import SealCard from '../components/SealCard'
import PricesTotal from "../components/PricesTotal";
import PaperCard from '../components/PaperCard';
import EnvelopeAddon from '../components/EnvelopeAddon';
import SealAddon from '../components/SealAddon'

export default function Preturi() {
    const [selectedItems, setSelectedItems] = useState({}) // { [productType]: { <productName>: <price> }, ...}
    const [steps, setSteps] = useState([
        { id: 1, productType: 'envelopes', currentSelection: true, component: EnvelopeCard },
        { id: 2, productType: 'paper', currentSelection: false, component: PaperCard },
        { id: 3, productType: 'seals', currentSelection: false, component: SealCard },
        { id: 4, productType: 'envelopeAddons', currentSelection: false, component: EnvelopeAddon },
        { id: 5, productType: 'sealAddon', currentSelection: false, component: SealAddon },
        { id: 6, productType: 'menus', currentSelection: false, component: 'MenuCard' }
    ])

    const addToOrder = (productType, itemName, price) => setSelectedItems({ ...selectedItems, [productType]: { itemName, price } })

    const removeFromOrder = (productType) => setSelectedItems(_.omit(selectedItems, productType))

    const currentStep = steps.find(({ currentSelection }) => currentSelection === true)
    const CurrentComponent = currentStep.component

    return (<div className="page preturi row">
        <div className="navsteps-component-wraper">
            <NavSteps steps={steps} setSteps={setSteps} />
            <div className="step-component">
                <CurrentComponent
                    productType={currentStep.productType}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                    addToOrder={addToOrder}
                    removeFromOrder={removeFromOrder}
                />
            </div>
        </div>
        <div className="price-calculator">
            <PricesTotal selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
    </div>
    )
}