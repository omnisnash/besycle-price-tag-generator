import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock, FormColumn, FormColumnContainer,
    FormInput,
    FormSubLabel,
    FormUnit
} from "../FormUtils.tsx";

const AutonomyForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            autonomy: {
                ...product.autonomy,
                autonomy: +event.target.value
            }
        })
    }

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            autonomy: {
                ...product.autonomy,
                variationAutonomy: +event.target.value
            }
        })
    }

    return (
        <CollapsibleFormBlock name={"Autonomie"}>
            <FormColumnContainer>
                <FormColumn>
                    <FormSubLabel>Kilomètres <FormUnit>(Km)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.autonomy?.autonomy ?? 0} onChange={handleMinChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Kilomètres (variation) <FormUnit>(Km)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.autonomy?.variationAutonomy ?? 0} onChange={handleMaxChange}/>
                </FormColumn>
            </FormColumnContainer>
        </CollapsibleFormBlock>
    );
};


export default AutonomyForm;