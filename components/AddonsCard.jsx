import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
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

export default function AddonsCard({ productType, selectedItems, addToOrder }) {
    const [isEnvelopeDecorated, setEnvelopeDecorated] = useState(false)
    const [sealDetail, setSealDetail] = useState(false)
    const [ribbonMaterial, setRibbonMaterial] = useState('matase naturala')

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
                        <RadioGroup aria-label="interior_decorat" value={isEnvelopeDecorated} onChange={(e) => setEnvelopeDecorated(e.target.value)}>
                            <FormControlLabel value="true" control={<BlueRadio />} label="Da" />
                            <FormControlLabel value={false} control={<BlueRadio />} label="Nu" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Image
                    src={`/assets/envelopes_details/interiordecorat_plic_2ron.png`}
                    height={210}
                    width={170}
                    alt="imagine sigiliu">
                </Image>
            </div>
            <hr />
            <div className="addons-wraper">
                <div>
                    <h4>Sigiliu cernut</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="sigliu_cernut" value={sealDetail} onChange={(e) => setSealDetail(e.target.value)}>
                            <FormControlLabel value="snur" control={<BlueRadio />} label="Da, cu snur" />
                            <FormControlLabel value="panglica" control={<BlueRadio />} label="Da, cu panglica" />
                            <FormControlLabel value={false} control={<BlueRadio />} label="Nu" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="img-wraper">
                    <Image
                        src={`/assets/envelopes_details/panglica_matasenaturala_3ron.png`}
                        height={144}
                        width={204}
                        alt="imagine sigiliu">
                    </Image>
                    <div class="select-wraper">
                        {sealDetail === 'panglica' ?
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Material</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={ribbonMaterial}
                                    onChange={(e) => setRibbonMaterial(e.target.value)}
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