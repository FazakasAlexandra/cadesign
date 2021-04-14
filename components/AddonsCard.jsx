import React, { useState, useEffect } from "react";
import EnvelopeAddon from './EnvelopeAddon';
import SealAddon from './SealAddon'

export default function AddonsCard({ productType, selectedItems, addToOrder }) {


    return (
        <div className="card addons">
            <EnvelopeAddon
                selectedItems={selectedItems}
                addToOrder={addToOrder}
                productType={productType}
            >
            </EnvelopeAddon>
            <hr />
            <SealAddon
                addToOrder={addToOrder}
            >
            </SealAddon>
        </div>
    )
}