import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock, FormColumn, FormColumnContainer,
    FormInput, FormSubLabel, FormUnit
} from "../FormUtils.tsx";

const MaxSpeedForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            speed: {
                ...product.speed,
                variationSpeed: +event.target.value
            }
        })
    }
    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            speed: {
                ...product.speed,
                speed: +event.target.value
            }
        })
    }

    return (
        <CollapsibleFormBlock name={"Vitesse"}>
            <FormColumnContainer>
                <FormColumn>
                    <FormSubLabel>Vitesse <FormUnit>(km/h)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.speed?.speed ?? 0} onChange={handleMinChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Vitesse (variation) <FormUnit>(km/h)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.speed?.variationSpeed ?? 0} onChange={handleMaxChange}/>
                </FormColumn>
            </FormColumnContainer>

        </CollapsibleFormBlock>
    );
};

export default MaxSpeedForm;