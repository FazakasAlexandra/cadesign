import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from "react";
import OrderForm from './OrderForm'
import {preferinte} from './EmailTemplates.js'

export default function PricesTotal({ selectedItems, setSelectedItems }) {
    let totalPrice = 0
    const [quantity, setQuantity] = useState(1);
    const [openForm, setOpenForm] = useState(false);

    const handleClickOpen = () => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setOpenForm(false);
    };

    const handleOrderSubmit = (client) => {
        const emailHTML = preferinte(client, selectedItems, quantity, totalPrice, (totalPrice * quantity).toFixed(2))
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "samannaphala@gmail.com",
            Password: '717370EBF1DCA0F434803816E737D17E37F5',
            To: 'designca18@gmail.com',
            From: "samannaphala@gmail.com",
            Subject: "CA Design - Comanda",
            Body: emailHTML
        }).then(console.log)
    }

    const displayPrices = Object.keys(selectedItems).map((productType, i) => {
        const { itemName, price } = selectedItems[productType] || {}
        totalPrice += price
        return (
            <li key={i} id={itemName} className="receipt-item">
                <span>{itemName}</span>  <span>{price.toFixed(2)} lei</span>
                { // every order needs paper and envelope - don't show delete button for those
                    productType === 'paper' || productType === 'envelopes' ? null :
                    <FontAwesomeIcon size="1x" className="remove" icon={faMinusCircle} onClick={() => setSelectedItems(_.omit(selectedItems, productType))} />
                }
            </li>
        )
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
            <div className="total">
                <span>Total <span className="receipt-price">{totalPrice < 6 ? 6 : (totalPrice * quantity).toFixed(2)} lei</span></span>
                <TextField
                    className="card-calculator-quantity"
                    id="outlined-number"
                    label="Cantitate"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    variant="outlined"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button className="add-button" onClick={handleClickOpen}>Comanda</button>
        </div>
        <OrderForm
            handleOrderSubmit={handleOrderSubmit}
            handleClose={handleClose}
            open={openForm}
        />
    </div>

}