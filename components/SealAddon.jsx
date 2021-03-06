import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import sealDetails from '../db/sealDetails.json'

export default function SealAddon({ productType, selectedItems, addToOrder, removeFromOrder }) {
    const [sealDetail, setSealDetail] = useState(selectedItems?.sealAddon?.selection || sealDetails["none"][0])

    useEffect(()=>{
        if (sealDetail.detailType != 'none'){
            addToOrder(productType, `Detaliu plic | ${sealDetail.detailType} ${sealDetail.material}`, sealDetail.price, sealDetail)
        } else {
            removeFromOrder(productType)
        } 
    },[sealDetail])

    const handleSealDetailChange = (e) => {
        setSealDetail(sealDetails[e.target.value][0])
    }

    const handleRibbonChange = (e) => {
        let newSealDetail = sealDetails["panglica"].find((ribbon) => ribbon.material === e.target.value)
        setSealDetail(newSealDetail)
    }

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
                    <h4>Sigiliu cernut</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="sigliu_cernut" value={sealDetail.detailType} onChange={(e) => handleSealDetailChange(e)}>
                            <FormControlLabel value="snur" control={<BlueRadio />} label="Da, cu snur" />
                            <FormControlLabel value="panglica" control={<BlueRadio />} label="Da, cu panglica" />
                            <FormControlLabel value="none" control={<BlueRadio />} label="Nu" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="img-wraper">
                    <Image
                        src={`/assets/envelopes_details/${sealDetail.src}`}
                        height={144}
                        width={204}
                        alt="imagine sigiliu">
                    </Image>
                </div>
            </div>
        </div>
    )
}