import { useState, useEffect } from 'react'
import NavSteps from "../components/NavSteps";
import EnvelopeCard from "../components/EnvelopeCard";
import SealCard from '../components/SealCard'
import PricesTotal from "../components/PricesTotal";
import PaperCard from '../components/PaperCard';
import EnvelopeAddon from '../components/EnvelopeAddon';
import SealAddon from '../components/SealAddon'
import Layout from '../components/Layout'

export default function Preturi() {
    const getUserSelection = () => typeof window !== "undefined" ? JSON.parse(localStorage.getItem('userSelection') || '{}') : {}
    const [selectedItems, setSelectedItems] = useState(getUserSelection()) // { [productType]: { <productName>: <price> }, ...}
    const [steps, setSteps] = useState([
        { id: 1, productType: 'envelopes', currentSelection: true, component: EnvelopeCard },
        { id: 2, productType: 'paper', currentSelection: false, component: PaperCard },
        { id: 3, productType: 'seals', currentSelection: false, component: SealCard },
        { id: 4, productType: 'envelopeAddons', currentSelection: false, component: EnvelopeAddon },
        { id: 5, productType: 'sealAddon', currentSelection: false, component: SealAddon },
        { id: 6, productType: 'menus', currentSelection: false, component: 'MenuCard' }
    ])

    useEffect(() => {
        console.log('component rendered', selectedItems)
    }, [])

    // selection contains the individual choices stored as an object; itemName is the string representation of those choices
    const addToOrder = (productType, itemName, price, selection) => setSelectedItems({ ...selectedItems, [productType]: { itemName, price, selection } })

    const removeFromOrder = (productType) => setSelectedItems(_.omit(selectedItems, productType))

    const currentStep = steps.find(({ currentSelection }) => currentSelection === true)
    const CurrentComponent = currentStep.component

    return (
        <Layout>
            <div className="page preturi row">
                <div className="navsteps-component-wraper">
                    <NavSteps selectedItems={selectedItems} steps={steps} setSteps={setSteps} />
                    <div className="step-component">
                        <CurrentComponent
                            productType={currentStep.productType}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            getUserSelection={getUserSelection}
                            addToOrder={addToOrder}
                            removeFromOrder={removeFromOrder}
                            isOpen={true}
                        />
                    </div>
                </div>
                <div className="price-calculator">
                    <PricesTotal selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                </div>
            </div>
        </Layout>
    )
}