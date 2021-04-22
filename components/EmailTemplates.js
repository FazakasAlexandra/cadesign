const preferinte = (client, selectedItems, quantity, price, totalPrice) => { 
return`
<html>
<body style="font-family: serif;">
    <div style="background-color: white; margin: 0 auto; max-width:400px;"
        <a href="https://imgbb.com/">
            <img src="https://i.ibb.co/C0B5VkG/logo-circle.jpg" alt="logo" style="width: 100px; display: block; margin-left: auto; margin-right: auto;">
        </a>
        <div style="color:#858C81; padding : 2rem;">
            <h1 style="text-align:Center; margin-top:0px;">Comanda</h1>
            <p><b>Numar invitatii </b>${quantity}</p>
            <p><b>Pret invitatie </b>${price} lei</p>
            <p><b>Pret total </b>${totalPrice} lei</p>
            ${getSelectedItemsHtml(selectedItems)}
            <hr style="margin:3rem 0rem; width: 100%;"/>
            <h1 style="text-align:Center;  margin-top:0px;">Client</h1>
            <p style="margin-bottom:0px"><b>Nume</b></p>
            <p style="margin-top:0px">${client.nume}</p>
            <p style="margin-bottom:0px"><b>Email</b></p>
            <p style="margin-top:0px">${client.email}</p>
            <p style="margin-bottom:0px"><b>Telefon</b></p>
            <p style="margin-top:0px">${client.telefon}</p>
            <p style="margin-bottom:0px"><b>Obervatii suplimentare</b></p>
            <p style="margin-top:0px">${client.observatii}</p>
    </div>
</body>
</html>
`}

const getSelectedItemsHtml = (selectedItems) => {
    return Object.keys(selectedItems).reduce((acc, key) => {
        return `${acc}<p>${selectedItems[key].itemName}</p>`
    }, "")
}

module.exports = {
    preferinte
}