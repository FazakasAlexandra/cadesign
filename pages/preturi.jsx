import NavSteps from "../components/NavSteps";
import EnvelopeCard from "../components/EnvelopeCard";
import OptionSelection from "../components/OptionSelection";
import PricesTotal from "../components/PricesTotal";

export default function Preturi() {
    const steps = [
        { id: 1, currentSelection: true },
        { id: 2, currentSelection: false },
        { id: 3, currentSelection: false },
        { id: 4, currentSelection: false }
    ]
    const itemPrices = [
        {
            itemName: 'hartie handmade', price: 2.7,
            itemName: 'hartie cartonata', price: 1.7
        }
    ]
    const component = <EnvelopeCard />

    return (<div className="page preturi row">
        <div className="navsteps-component-wraper">
            <NavSteps steps={steps} />
            <OptionSelection component={component} />
        </div>
        <div className="price-calculator">
            <PricesTotal itemPrices={itemPrices} />
        </div>
    </div>
    )
}