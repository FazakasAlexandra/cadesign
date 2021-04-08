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

export default function EnvelopeCard() {
    const [type, setType] = useState('cartonata')
    const [paper, setPaper] = useState(papers['cartonata'].papers[0])
    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(2.7)

    const handleColorClick = (e) => {
        const chosenPapper = papers[type].papers.find((paper) => paper.hex === e.target.id)
        setPaper(chosenPapper)
    }

    useEffect(()=>{
        setPaper(papers[type].papers[0])
    }, [type])

    useEffect(() => {
        setPrice(quantity * 2.7)
    }, [quantity])

    const paperColors = () => {
        return papers[type].colors.map((color, idx) => {
            return <div key={idx} id={color} onClick={(e) => handleColorClick(e)} className="color" style={{ backgroundColor: color }}></div>
        })
    }

    const getWeights = () => {
        return papers[type].weights.map((w)=>{
            return <p style={{ color: "#4f4f4f", fontSize: "16px", margin: "0.5rem", marginLeft: "0rem"}}>{w.weight}</p>
        })
    }

    return (
        <div className="card envelope">
            <Image
                src={`/assets/papers/${paper.src}`}
                height={509}
                width={300}
                alt="imagine hartie"
            />
            <div className="card-envelope-footer">
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
                                <p>{getWeights()}</p>
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
                        </div>
                    </div> : null
            }

        </div>
    )
}