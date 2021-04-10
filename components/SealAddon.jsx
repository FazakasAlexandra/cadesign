import React, { useState, useEffect } from "react";
import Image from 'next/image'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import sealDetails from '../db/sealDetails.json'

export default function SealAddon({ productType, addToOrder, removeFromOrder }) {
    const [sealDetail, setSealDetail] = useState(sealDetails["none"][0])

    useEffect(()=>{
        if (sealDetail.detailType != 'none'){
            addToOrder(productType, `Detaliu plic | ${sealDetail.detailType} ${sealDetail.material}`, sealDetail.price)
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
                    <div class="select-wraper">
                        {sealDetail.detailType === 'panglica' ?
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Material</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={sealDetail.material}
                                    onChange={(e) => handleRibbonChange(e)}
                                    label="Model"
                                >
                                    <MenuItem value="matase naturala">Matase naturala</MenuItem>
                                    <MenuItem value="bumbac">Bumbac natural</MenuItem>
                                </Select>
                            </FormControl>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}