import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import CircularProgress from '@material-ui/core/CircularProgress';
const envelopes = require('../db/envelopes.json');

export default function EnvelopeCard({ productType, selectedItems, addToOrder }) {
    const [envelope, setEnvelope] = useState(selectedItems?.envelopes?.selection || envelopes[0]);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(2.7)
    const [loading, setLoading] = useState(false)

    const productTypeAlreadyInOrder = () => selectedItems && selectedItems[productType] || false

    const handleColorClick = (e) => {
        if (envelope.id != e.target.id) setLoading(true)
        const chosenEnvelope = envelopes.find((envelope) => envelope.id == e.target.id)
        setEnvelope(chosenEnvelope)
        if (productTypeAlreadyInOrder()) addToOrder(productType, `Plic | Hartie ${chosenEnvelope.papper} | Culoare ${chosenEnvelope.color}`, price, chosenEnvelope)
    }

    useEffect(() => {
        setPrice(quantity * 2.7)
    }, [quantity])

    useEffect(() => {
        setLoading(false)
    }, [envelope])

    const envelopeColors = () => {
        return envelopes.map(envelope => {
            return <div key={envelope.id} id={envelope.id} onClick={(e) => handleColorClick(e)} className="color" style={{ backgroundColor: envelope.hex }}></div>
        })
    }

    return (
        <div className="card envelope">
            {loading ? <CircularProgress className="progress" /> : null}
            <Image
                src={`/assets/envelopes/${envelope.src}`}
                height={359}
                width={500}
                alt="imagine plic"
            />
            <div className="card-envelope-footer">
                <FontAwesomeIcon icon={faGripLines} size="2x" onClick={() => setOpen(!open)} />
                <div className="colors-container">
                    {envelopeColors()}
                </div>
            </div>{
                open ?
                    <div className="card-info">
                        <hr />
                        <span>Compozitie</span>
                        <ul>
                            <li>
                                <p>Hartie</p>
                                <p>{envelope.papper}</p>
                            </li>
                            <li>
                                <p>Culoare</p>
                                <p>{envelope.color}</p>
                            </li>
                            <li>
                                <p>Dimensiune</p>
                                <p>{envelope.smallSize} / {envelope.bigSize}</p>
                            </li>
                            <li>
                                <p>Gramaj</p>
                                <p>{envelope.smallWeight} / {envelope.largeWeight}</p>
                            </li>
                        </ul>
                        <hr />
                        <div className="card-calculator">
                            {selectedItems != undefined ?
                                null :
                                <TextField
                                    className="card-calculator-quantity"
                                    id="outlined-number"
                                    label="Cantitate"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={quantity}
                                    InputProps={{ inputProps: { min: 1 } }}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />}
                            <div className="card-calculator-price">
                                <p>Pret</p>
                                <hr />
                                <p><b>{price.toFixed(2)}</b> lei</p>
                            </div>
                            {productTypeAlreadyInOrder() || selectedItems === undefined ?
                                null :
                                <button className="add-button" onClick={() => addToOrder(productType, `Plic | Hartie ${envelope.papper} | Culoare ${envelope.color}`, price, envelope)}>Adauga</button>}
                        </div>
                    </div> : null
            }

        </div>
    )
}