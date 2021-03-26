export default function PricesTotal() {
    const { itemPrices } = props
    const [totalPrice, setTotalPrice] = useState(0)

    const displayPrices = itemPrices.map(item => {
        const { itemName, price } = item
        setTotalPrice(totalPrice + price)
        return <li>{itemName} - {price}</li>
    })

    return <div>
        {displayPrices}
        <hr />
        {totalPrice}
    </div>
}