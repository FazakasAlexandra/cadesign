import { useState } from 'react'

export default function PricesTotal(props) {
    const { itemPrices } = props
    const [totalPrice, setTotalPrice] = useState(0)

    const displayPrices = itemPrices.map(item => {
        const { itemName, price } = item

        return <li className="receipt-item"><span>{itemName}</span>  <span>{price}</span></li>
    })

    return <div className="receipt">
        <div className="receipt-items">
            {displayPrices}
            <hr />
        </div>
        <span>Total <span className="receipt-price">{totalPrice}</span></span>
    </div>

}