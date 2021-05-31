import { useState, useEffect } from 'react'
import NavSteps from "../components/NavSteps";
import EnvelopeCard from "../components/EnvelopeCard";
import SealCard from '../components/SealCard'
import PricesTotal from "../components/PricesTotal";
import PaperCard from '../components/PaperCard';
import EnvelopeAddon from '../components/EnvelopeAddon';
import SealAddon from '../components/SealAddon'
import ConfirmationAddon from '../components/ConfirmationAddon'
import EmborsareAddon from '../components/EmborsareAddon'
import Layout from '../components/Layout'
const envelopes = require('../db/envelopes.json')
const papers = require('../db/papersB.json')

const defaultOrder = {
    'envelopes': { 
        itemName: 'Plic | Hartie Texturata cu insertii aurii | Culoare Alb',
        price: 2.7,
        selection: envelopes[0]
    },
    'paper': {
        itemName: 'Hartie cartonata | Culoare Alb | 270 g',
        price: 2.7,
        selection: papers['cartonata'].papers[0]
    }
}

export default function Preturi() {
    const getUserSelection = () => typeof window !== "undefined" ? JSON.parse(localStorage.getItem('userSelection') || JSON.stringify(defaultOrder)) : defaultOrder
    const [selectedItems, setSelectedItems] = useState(getUserSelection()) // { [productType]: { <productName>: <price> }, ...}
    const [steps, setSteps] = useState([
        { id: 1, productType: 'envelopes', currentSelection: true, component: EnvelopeCard },
        { id: 2, productType: 'paper', currentSelection: false, component: PaperCard },
        { id: 3, productType: 'seals', currentSelection: false, component: SealCard },
        { id: 4, productType: 'envelopeAddons', currentSelection: false, component: EnvelopeAddon },
        { id: 5, productType: 'sealAddon', currentSelection: false, component: SealAddon },
        { id: 6, productType: 'confirmationAddon', currentSelection: false, component: ConfirmationAddon },
        { id: 7, productType: 'emborsareAddon', currentSelection: false, component: EmborsareAddon },
        { id: 8, productType: 'menus', currentSelection: false, component: 'MenuCard' }
    ])

    useEffect(() => {
        console.log('component rendered', selectedItems)
    }, [])

    // selection contains the individual choices stored as an object; itemName is the string representation of those choices
    const addToOrder = (productType, itemName, price, selection) => setSelectedItems({ ...selectedItems, [productType]: { itemName, price, selection } })

    const removeFromOrder = (productType) => {
        setSelectedItems(_.omit(selectedItems, productType))
        if (typeof window !== "undefined") localStorage.setItem('userSelection', JSON.stringify(selectedItems))
    }

    const currentStep = steps.find(({ currentSelection }) => currentSelection === true)
    const CurrentComponent = currentStep.component

    return (
        <Layout>
            <div className="page preturi row" id="invitatii">
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