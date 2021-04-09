import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

export default function PricesTotal({ selectedItems, setSelectedItems }) {
    const displayPrices = Object.keys(selectedItems).map((productType, i) => {
        const { itemName, price } = selectedItems[productType] || []
        return (
            <li key={i} id={itemName} className="receipt-item">
                <span>{itemName}</span>  <span>{price.toFixed(2)} lei</span>
                <FontAwesomeIcon size="1x" className="remove" icon={faMinusCircle} onClick={() => setSelectedItems(_.omit(selectedItems, productType))} />
            </li>
        )
    })
    const totalPrice = 0

    return <div className="receipt">
        <div className="prices-info">
            <p>Pretul invitatiei incepe de la 6 lei si creste in functie de elementele pe care le selectati .</p>
        </div>
        <div className="receipt-content">
            <h3>Pret invitatie</h3>
            <div className="receipt-items">
                {displayPrices}
                <hr />
            </div>
            <span>Total <span className="receipt-price">{totalPrice.toFixed(2)} lei</span></span>
        </div>
    </div>

}