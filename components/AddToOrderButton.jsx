export default function AddToOrderButton({ productType, productName, productPrice, selectedItems, setSelectedItems }) {
    const addToOrder = (itemName, price) => {
        const itemAlreadyInOrder = selectedItems.find(item => itemName === item.itemName)
        if (itemAlreadyInOrder) {
            return setSelectedItems(selectedItems.map(item => {
                if (itemName === item.itemName) return { itemName, price: price + item.price }
                return { itemName: item.itemName, price: item.price } // update price if item exists, else keep it the same
            }))
        }
        setSelectedItems([...selectedItems, { itemName, price }])
    }
    return (
        <button onClick={() => addToOrder(productName, productPrice)}>
            Add to order
        </button>
    )
}