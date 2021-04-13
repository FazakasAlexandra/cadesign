import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
const papers = require('../db/papersB.json');

export default function PaperCard({ productType, selectedItems, addToOrder }) {
    console.table(selectedItems.paper?.selection.paper)
    const [type, setType] = useState(selectedItems.paper?.selection.type || 'cartonata')
    const [paper, setPaper] = useState(selectedItems.paper?.selection.paper || papers['cartonata'].papers[0])
    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(2.7)
    const [weight, setWeight] = useState(selectedItems.paper?.selection.weight || papers.weights[0])

    const handleColorClick = (e) => {
        const chosenPaper = papers[type].papers.find((paper) => paper.hex === e.target.id)
        setPaper(chosenPaper)
    }

    const productTypeAlreadyInOrder = () => selectedItems && selectedItems[productType] || false

    useEffect(() => {
        setPaper(selectedItems.paper?.selection.paper || papers[type].papers[0])
    }, [type])

    useEffect(() => {
        setPrice(quantity * 2.7)
    }, [quantity])

    useEffect(()=>{
        if (productTypeAlreadyInOrder()) addToOrder(productType, `Hartie ${type} | Culoare ${paper.color} | ${weight}`, price, {type, paper, weight})
    },[paper, weight])

    const paperColors = () => {
        return papers[type].colors.map((color, idx) => {
            return <div key={idx} id={color} onClick={(e) => handleColorClick(e)} className="color" style={{ backgroundColor: color }}></div>
        })
    }

    const getWeights = () => {
        return papers.weights.map((w, idx) => {
            return <i
                className={weight === w ? 'active' : null}
                id={w}
                key={idx}
                onClick={() => setWeight(w)}>
                {w}
            </i>
        })
    }

    return (
        <div className="card paper">
            <div className="img-container">
                <Image
                    src={`/assets/papers/${paper.src}`}
                    height={509}
                    width={300}
                    alt="imagine hartie"
                />
            </div>
            <div className="card-paper-footer">
                <FontAwesomeIcon icon={faGripLines} size="2x" onClick={() => setOpen(!open)} />
                <div className="colors-container">
                    {paperColors()}
                </div>
            </div>{
                open ?
                    <div className="card-info">
                        <hr />
                        <span>Compozitie</span>
                        <ul>
                            <li>
                                <div className="model-container">
                                    <FormControl variant="outlined">
                                        <InputLabel id="demo-simple-select-outlined-label">Tip de hartie</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            label="Tip de hartie"
                                        >
                                            <MenuItem value='cartonata'>Cartonata</MenuItem>
                                            <MenuItem value='handmade'>Handmade</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </li>
                            <li>
                                <p>Culoare</p>
                                <p>{paper.color}</p>
                            </li>
                            <li>
                                <p>Gramaje</p>
                                <div className="gramaje-container">{getWeights()}</div>
                            </li>
                        </ul>
                        <hr />
                        <div className="card-calculator">
                            {selectedItems !== undefined ? null :
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
                                <button
                                    className="add-button"
                                    onClick={() => addToOrder(productType, `Hartie ${type} | Culoare ${paper.color} | ${weight}`, price, {type, paper, weight})}
                                >
                                    Adauga
                                 </button>
                            }
                        </div>
                    </div> : null
            }

        </div>
    )
}