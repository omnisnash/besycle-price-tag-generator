import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {FormBlock, FormColumn, FormColumnContainer, FormInput, FormLabel, FormUnit} from "../FormUtils.tsx";



const PriceForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const updateBase = (event: ChangeEvent<HTMLInputElement>) => onUpdate({
        ...product,
        price: {
            ...product.price,
            base: +event.target.value
        }
    })
    const updateVariant = (event: ChangeEvent<HTMLInputElement>) => onUpdate({
        ...product,
        price: {
            ...product.price,
            variant: +event.target.value
        }
    })

    return (
        <FormBlock>
            <FormColumnContainer>
                <FormColumn>
                    <FormLabel>Prix base <FormUnit>(€)</FormUnit></FormLabel>
                    <FormInput type={"number"} value={product.price?.base ?? 0} onChange={updateBase}/>
                </FormColumn>
                <FormColumn>
                    <FormLabel>Variation <FormUnit>(€)</FormUnit></FormLabel>
                    <FormInput type={"number"} value={product.price?.variant ?? 0} onChange={updateVariant}/>
                </FormColumn>


            </FormColumnContainer>
        </FormBlock>
    );
};

export default PriceForm;