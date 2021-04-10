import React, { useState, useEffect } from "react";
import EnvelopeaAddon from './EnvelopeAddon';
import SealAddon from './SealAddon'

export default function AddonsCard({ productType, selectedItems, addToOrder }) {


    return (
        <div className="card addons">
            <EnvelopeaAddon
                selectedItems={selectedItems}
                addToOrder={addToOrder}
                productType={productType}
            >
            </EnvelopeaAddon>
            <hr />
            <SealAddon
                addToOrder={addToOrder}
            >
            </SealAddon>
        </div>
    )
}