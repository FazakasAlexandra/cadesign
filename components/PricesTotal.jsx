import { useState } from 'react'

export default function PricesTotal(props) {
    const { itemPrices } = props
    const [totalPrice, setTotalPrice] = useState(0)

    const displayPrices = itemPrices.map(item => {
        const { itemName, price } = item
        
        return <li>{itemName} - {price}</li>
    })

    return <div>
        {displayPrices}
        <hr />
        {totalPrice}
    </div>
}