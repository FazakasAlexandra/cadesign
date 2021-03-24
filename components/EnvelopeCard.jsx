import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
const envelopes = require('../db/envelopes.json');

export default function EnvelopeCard(props) {
    const [envelope, setEnvelope] = useState(envelopes[0]);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(2.7)

    const handleColorClick = (e) => {
        console.log(e.target.id)
        const chosenEnvelope = envelopes.find((envelope) => envelope.id == e.target.id)
        setEnvelope(chosenEnvelope)
    }

    useEffect(() => {
        console.log(quantity)
        setPrice(quantity * 2.7)
    }, [quantity])

    const envelopeColors = () => {
        return envelopes.map(envelope => {
            return <div id={envelope.id} onClick={(e) => handleColorClick(e)} className="color" style={{ backgroundColor: envelope.hex }}></div>
        })
    }

    return (
        <div className="card envelope">
            <Image
                src={`/assets/envelopes/${envelope.src}`}
                height={359}
                width={500}
                alt="imagine plic"
            />
            <div className="card-envelope-footer">
                <FontAwesomeIcon icon={faGripLines} onClick={() => setOpen(!open)} />
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
                                <p><span>Mica </span>{envelope.smallWeight}</p>
                                <p><span>Mare </span>{envelope.largeWeight}</p>
                            </li>
                            <li>
                                <p>Gramaj</p>
                                <p><span>Mic </span>{envelope.smallSize}</p>
                                <p><span>Mare </span>{envelope.bigSize}</p>
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
                                <p><b>{price}</b> lei</p>
                            </div>
                        </div>
                    </div> : null
            }

        </div>
    )
}