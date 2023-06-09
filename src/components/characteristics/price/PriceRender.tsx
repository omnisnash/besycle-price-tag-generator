import React from 'react';
import {Price} from "../../../model.ts";
import {Placeholder} from "../CharacteristicUtils.tsx";



const PriceRender = (props: {price?: Price}) => {
    const {price} = props;

    if (!price || !price.base) {
        return <Placeholder>aucun prix</Placeholder>
    }

    const numberToEuro = (value: number): string => {
        return value.toLocaleString('fr-Fr', { style: 'currency', currency: 'EUR' })
    }

    return (
        <>
            {numberToEuro(price.base)}
            {price.variant ? <> - {numberToEuro(price.variant)}</>: undefined}
        </>
    );
};

export default PriceRender;