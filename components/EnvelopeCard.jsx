import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import CircularProgress from '@material-ui/core/CircularProgress';
const envelopes = require('../db/envelopes.json');

export default function EnvelopeCard({ selectedItems, setSelectedItems }) {
    const [envelope, setEnvelope] = useState(envelopes[0]);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(2.7)
    const [loading, setLoading] = useState(false)

    const handleColorClick = (e) => {
        if (envelope.id != e.target.id) setLoading(true)

        const chosenEnvelope = envelopes.find((envelope) => envelope.id == e.target.id)
        setEnvelope(chosenEnvelope)
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
        <div className="card envelope">
            {loading ? <CircularProgress className="progress" /> : null}
            <Image
                src={`/assets/envelopes/${envelope.src}`}
                height={359}
                width={500}
                alt="imagine plic"
            />
            <div className="card-envelope-footer">
                <FontAwesomeIcon icon={faGripLines} size="lg" onClick={() => setOpen(!open)} />
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
                                <p>{envelope.smallWeight} / {envelope.largeWeight}</p>
                            </li>
                            <li>
                                <p>Gramaj</p>
                                <p>{envelope.smallSize} / {envelope.bigSize}</p>
                            </li>
                        </ul>
                        <hr />
                        <div className="card-calculator">
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
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <div className="card-calculator-price">
                                <p>Pret</p>
                                <hr />
                                <p><b>{price.toFixed(2)}</b> lei</p>
                            </div>
                            <button onClick={() => addToOrder(`Hartie ${envelope.papper} - ${envelope.color}`, price)}>Add to Order</button>
                        </div>
                    </div> : null
            }

        </div>
    )
}