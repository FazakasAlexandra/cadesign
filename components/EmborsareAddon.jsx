import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import emborsareAddon from '../db/emborsareAddon.json'


const BlueRadio = withStyles({
    root: {
        color: blue[400],
        '&$checked': {
            color: blue[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export default function EmborsareAddon({ productType, selectedItems, addToOrder, removeFromOrder }) {
    const [addon, setAddon] = useState(selectedItems?.emborsareAddon?.selection || emborsareAddon['none'])

    const handleAddonClick = (e) => setAddon(emborsareAddon[e.target.value])

    useEffect(()=>{
        if (addon.name != 'none'){
            addToOrder(productType, `Plic emborsat cu initialele mirilor`, addon.price, addon)
        } else {
            removeFromOrder(productType)
        } 
    }, [addon])

    return (
        <div className="card addons">
            <div className="addons-wraper">
                <div>
                    <h4>Plic emborsat cu initialele mirilor</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="plic_emborsat" value={addon.name} onChange={(e) => handleAddonClick(e)}>
                            <FormControlLabel value="plic_emborsat" control={<BlueRadio />} label="Da" />
                            <FormControlLabel value="none" control={<BlueRadio />} label="Nu" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Image
                    src={`/assets/emborsareAddon/${addon.src}`}
                    height={`${addon.h}px`}
                    width={`${addon.w}px`}
                    alt="card confirmare">
                </Image>
            </div>
        </div>
    )
}