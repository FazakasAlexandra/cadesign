import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import CircularProgress from '@material-ui/core/CircularProgress';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function ModelCard({ cardModel }) {
    const [model] = useState(cardModel);
    const [currentSrcIdx, setcurrentSrcIdx] = useState(0)
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(model.pret)

    useEffect(() => {
        setPrice(quantity * price)
    }, [quantity])

    return (
        <div className="card model">
            <div style={{position : "relative"}}>
                {currentSrcIdx > 0 ?
                    <FontAwesomeIcon className="arrow L"
                        icon={faChevronLeft} size="2x"
                        onClick={() => { if (currentSrcIdx != 0) setcurrentSrcIdx(currentSrcIdx - 1) }}
                    /> : null
                }
                <Image
                    src={`/assets/models/${model.src[currentSrcIdx]}`}
                    height={model.height === 'tall' ? 760 : 450}
                    width={model.height === 'tall' ? 560 : 560}
                    alt="imagine plic"
                />
                {
                    cardModel.src.length > 1 && currentSrcIdx !== cardModel.src.length - 1 ?
                        <FontAwesomeIcon className="arrow R"
                            icon={faChevronRight} size="2x"
                            onClick={() => { if (currentSrcIdx < cardModel.src.length - 1) setcurrentSrcIdx(currentSrcIdx + 1) }}
                        /> : null
                }
            </div>
            <div className="card-envelope-footer">
                <FontAwesomeIcon icon={faGripLines} size="2x" onClick={() => setOpen(!open)} />
            </div>{
                open ? <div className="wraper">
                    <div className="header">
                        <p>Model</p>
                        <i>{model['nume']}</i>
                    </div>
                    <hr style={{ margin: `1.5rem 0rem` }} />
                    <div className="card-info">
                        <span style={{ color: '#8d8d8d' }}>Compozitie</span>
                        <ul>
                            <li>
                                <p>Hartie card</p>
                                <p>{model['hartie card']}</p>
                            </li>
                            <li>
                                <p>Hartie plic</p>
                                <p>{model['hartie plic']}</p>
                            </li>
                            <li>
                                <p>Sigiliu</p>
                                <p>{model['sigiliu']}</p>
                            </li>
                            {model["detaliu card"] ? <li>
                                <p>Detaliu card</p>
                                <p>{model["detaliu card"]}</p>
                            </li> : null}
                            {model["detaliu plic"] ? <li>
                                <p>Detaliu plic</p>
                                <p>{model["detaliu plic"]}</p>
                            </li> : null}
                            {model["detaliu sigiliu"] ? <li>
                                <p>Detaliu sigiliu</p>
                                <p>{model["detaliu plic"]}</p>
                            </li> : null}
                        </ul>
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