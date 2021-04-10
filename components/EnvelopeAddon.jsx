import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import envelopeAddon from '../db/envelopeAddon.json'

export default function EnvelopeAddon({ productType, addToOrder, removeFromOrder }) {
    const [addon, setAddon] = useState(envelopeAddon['none'])

    const handleAddonClick = (e) => {
        setAddon(envelopeAddon[e.target.value])
    }

    useEffect(()=>{
        if (addon.name != 'none'){
            addToOrder(productType, `Detaliu plic | ${addon.name}`, addon.price)
        } else {
            removeFromOrder(productType)
        } 
    },[addon])

    const BlueRadio = withStyles({
        root: {
            color: blue[400],
            '&$checked': {
                color: blue[600],
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    return (
        <div className="card addons">
            <div className="addons-wraper">
                <div>
                    <h4>Plic cu interior decorat</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="interior_decorat" value={addon.name} onChange={(e) => handleAddonClick(e)}>
                            <FormControlLabel value="interior decorat plic" control={<BlueRadio />} label="Da" />
                            <FormControlLabel value="none" control={<BlueRadio />} label="Nu" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Image
                    src={`/assets/envelopes_details/${addon.src}`}
                    height={`${addon.h}px`}
                    width={`${addon.w}px`}
                    alt="imagine sigiliu">
                </Image>
            </div>
        </div>
    )
}