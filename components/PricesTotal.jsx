import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

export default function PricesTotal({ selectedItems }) {
    const displayPrices = selectedItems.map((item, i) => {
        const { itemName, price } = item
        return (
            <li key={i} id={itemName} className="receipt-item">
                <span>{itemName}</span>  <span>{price.toFixed(2)} lei</span>
                <FontAwesomeIcon icon={faMinusCircle} onClick={() => {}} />
            </li>
        )
    })
    const totalPrice = selectedItems.reduce((acc, { price }) => acc + price, 0)

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