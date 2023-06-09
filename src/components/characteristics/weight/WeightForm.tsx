import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock, FormColumn, FormColumnContainer,
    FormInput, FormSubLabel, FormUnit
} from "../FormUtils.tsx";

const WeightForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            weight: {
                ...product.weight,
                weight: +event.target.value
            }
        })
    }

    const handleVariationChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            weight: {
                ...product.weight,
                variationWeight: +event.target.value
            }
        })
    }

    return (
        <CollapsibleFormBlock name={"Poids"}>
            <FormColumnContainer>
                <FormColumn>
                    <FormSubLabel>Poids <FormUnit>(kg)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.weight?.weight ?? ""} onChange={handleChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Poids (variation)<FormUnit>(kg)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.weight?.variationWeight ?? ""} onChange={handleVariationChange}/>
                </FormColumn>
            </FormColumnContainer>
        </CollapsibleFormBlock>
    );
};

export default WeightForm;