import { useState } from 'react'
import NavSteps from "../components/NavSteps";
import EnvelopeCard from "../components/EnvelopeCard";
import SealCard from '../components/SealCard'
import PricesTotal from "../components/PricesTotal";
import PaperCard from '../components/PaperCard';
import AddonsCard from '../components/AddonsCard';

export default function Preturi() {
    const [selectedItems, setSelectedItems] = useState({}) // { [productType]: { <productName>: <price> }, ...}
    const [steps, setSteps] = useState([
        { id: 1, productType: 'envelopes', currentSelection: true, component: EnvelopeCard },
        { id: 2, productType: 'paper', currentSelection: false, component: PaperCard},
        { id: 3, productType: 'menus', currentSelection: false, component: SealCard },
        { id: 4, productType: 'addons', currentSelection: false, component: AddonsCard },
        { id: 5, productType: 'seals', currentSelection: false, component: 'MenuCard' }
    ])

    const addToOrder = (productType, itemName, price) => setSelectedItems({...selectedItems, [productType]: { itemName, price }})

    const currentStep = steps.find(({currentSelection}) => currentSelection === true)
    const CurrentComponent = currentStep.component

    return (<div className="page preturi row">
        <div className="navsteps-component-wraper">
            <NavSteps steps={steps} setSteps={setSteps}/>
        <div className="step-component">
            <CurrentComponent
                productType={currentStep.productType} 
                selectedItems={selectedItems} 
                setSelectedItems={setSelectedItems} 
                addToOrder={addToOrder} />
        </div>
        </div>
        <div className="price-calculator">
            <PricesTotal selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
        </div>
    </div>
    )
}