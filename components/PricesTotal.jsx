import { useState } from 'react'

export default function PricesTotal(props) {
    const { itemPrices } = props
    const [totalPrice, setTotalPrice] = useState(6)

    const displayPrices = itemPrices.map(item => {
        const { itemName, price } = item

        return <li className="receipt-item"><span>{itemName}</span>  <span>{price} lei</span></li>
    })

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
        <span>Total <span className="receipt-price">{totalPrice} lei</span></span>
        </div>
    </div>

}