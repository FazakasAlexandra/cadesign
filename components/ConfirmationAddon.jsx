import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import confirmationAddon from '../db/confirmationAddon.json'


const BlueRadio = withStyles({
    root: {
        color: blue[400],
        '&$checked': {
            color: blue[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export default function ConfirmationAddon({ productType, selectedItems, addToOrder, removeFromOrder }) {
    const [addon, setAddon] = useState(selectedItems?.confirmationAddon?.selection || confirmationAddon['none'])

    const handleAddonClick = (e) => setAddon(confirmationAddon[e.target.value])

    useEffect(()=>{
        if (addon.name != 'none'){
            addToOrder(productType, `Card de confirmare | asortat invitatiei `, addon.price, addon)
        } else {
            removeFromOrder(productType)
        } 
    }, [addon])

    return (
        <div className="card addons">
            <div className="addons-wraper">
                <div>
                    <h4>Card de confirmare</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="card_confirmare" value={addon.name} onChange={(e) => handleAddonClick(e)}>
                            <FormControlLabel value="card confirmare" control={<BlueRadio />} label="Da" />
                            <FormControlLabel value="none" control={<BlueRadio />} label="Nu" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Image
                    src={`/assets/confirmationCard/${addon.src}`}
                    height={`${addon.h}px`}
                    width={`${addon.w}px`}
                    alt="card confirmare">
                </Image>
            </div>
        </div>
    )
}