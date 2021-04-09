import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const seals = require('../db/seals.json');

export default function SealCard({ productType, selectedItems, addToOrder }) {
    const [hex, setColor] = useState('#3e260f')
    const [seal, setSeal] = useState(seals['#3e260f'][0]);
    const [model, setModel] = useState(seals['#3e260f'][0]['model']);

    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(1.5)

    const productTypeAlreadyInOrder = () => selectedItems && selectedItems[productType] || false

    useEffect(() => {
        const newSeal = seals[hex].find((seal) => seal.model === model)
        setSeal(newSeal);
        if (productTypeAlreadyInOrder()) addToOrder(productType, `${newSeal.model} | ${newSeal.color}`, price)
    }, [hex])

    useEffect(() => {
        setPrice(quantity * 1.5)
    }, [quantity])

    const sealColors = () => {
        return Object.keys(seals).map((hex, i) => {
            return <div key={i} id={hex} onClick={(e) => setColor(e.target.id)} className="color" style={{ backgroundColor: hex }}></div>
        })
    }

    const getOptions = () => {
        return seals[hex].map((element, i) => {
            return <MenuItem key={i} value={element.model}>{element.model}</MenuItem>
        })
    }

    const handleModelChange = (e) => {
        const newSeal = seals[hex].find((seal) => seal.model === e.target.value)
        setSeal(newSeal);
        setModel(newSeal.model)
        if (productTypeAlreadyInOrder()) addToOrder(productType, `${newSeal.model} | ${newSeal.color}`, price)
    }

    return (
        <div className="card seal">
            <Image
                src={`/assets/seals/${seal.src}`}
                height={300}
                width={300}
                alt="imagine sigiliu"
            />
            <div className="card-seal-footer">
                <FontAwesomeIcon icon={faGripLines} onClick={() => setOpen(!open)} />
                <div className="colors-container">
                    {sealColors()}
                </div>
                <div className="model-container">
                    <FormControl variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={model}
                            onChange={(e) => handleModelChange(e)}
                            label="Model"
                        >
                            {getOptions()}
                        </Select>
                    </FormControl>
                </div>
            </div>{
                open ?
                    <>
                        <hr />
                        <div className="card-calculator">
                            {selectedItems !== undefined ?
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
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            }
                            <div className="card-calculator-price">
                                <p>Pret</p>
                                <hr />
                                <p><b>{price.toFixed(2)}</b> lei</p>
                            </div>
                            {productTypeAlreadyInOrder() || selectedItems === undefined ?
                                null :
                                <button onClick={() => addToOrder(productType, `${seal.model} | ${seal.color}`, price)}>Add to order</button>}
                        </div>
                    </> : null
            }

        </div>
    )
}