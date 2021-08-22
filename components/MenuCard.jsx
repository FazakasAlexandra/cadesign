import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Img } from './Img.jsx'

export default function ModelCard({ cardMenu, type }) {
    const [model] = useState(cardMenu);
    const [currentSrcIdx, setcurrentSrcIdx] = useState(0)
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(cardMenu.pret)

    useEffect(() => {
        setPrice(quantity * cardMenu.pret)
    }, [quantity])

    return (
        <div className="card model">
            <div style={{ position: "relative" }}>
                {currentSrcIdx > 0 ?
                    <FontAwesomeIcon className="arrow L"
                        icon={faChevronLeft} size="2x"
                        onClick={() => { if (currentSrcIdx != 0) setcurrentSrcIdx(currentSrcIdx - 1) }}
                    /> : null
                }
                <Img
                    size={model.height}
                    src={`/assets/${type}/${model.src[currentSrcIdx]}`}
                    alt={`meniu ${cardMenu.nume}`}
                />
                {
                    model.src.length > 1 && currentSrcIdx !== model.src.length - 1 ?
                        <FontAwesomeIcon className="arrow R"
                            icon={faChevronRight} size="2x"
                            onClick={() => { if (currentSrcIdx < model.src.length - 1) setcurrentSrcIdx(currentSrcIdx + 1) }}
                        /> : null
                }
            </div>
            <div className="card-envelope-footer">
                <FontAwesomeIcon icon={faGripLines} size="2x" onClick={() => setOpen(!open)} />
            </div>{
                open ? <div className="wraper">
                    <div className="card-info">
                        <span style={{ color: '#8d8d8d' }}>Descriere</span>
                        <p>{model.descriere}</p>
                        <hr style={{ margin: `1.5rem 0rem` }} />
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
                                InputProps={{ inputProps: { min: 1 } }}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <div className="card-calculator-price">
                                <p>Pret</p>
                                <hr />
                                <p><b>{price.toFixed(2)}</b> lei</p>
                            </div>
                        </div>
                    </div> </div> : null
            }

        </div>
    )
}