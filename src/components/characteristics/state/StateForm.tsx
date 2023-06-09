import React, {ChangeEvent, useState} from 'react';
import {FormBlock, FormInput, FormLabel, FormSubLabel, FormUnit} from "../FormUtils.tsx";
import {SetupProps, StateType, StateUsed} from "../../../model.ts";
import Spacer from "../../Spacer.tsx";

const StateForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const [type, setType] = useState<StateType>(product.state?.type ?? 'new')

    // const updateType = (event: ChangeEvent<HTMLInputElement>) => onUpdate({
    //     ...product,
    //     state: {
    //         ...product.state,
    //         type: type
    //     }
    // })

    const handleWarrantyChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate({
            ...product,
            state: {
                ...product.state,
                warranty: +event.target.value,
                type: type
            }
        })
    }

    const handleTypeChange = (type: StateType) => {
        setType(type);
        onUpdate({
            ...product,
            state: {
                ...product.state,
                type: type
            }
        })
    }

    const handleUsedFormChange = (used: StateUsed) => {
        onUpdate({
            ...product,
            state: {
                ...used
            }
        })
    }

    return (
        <FormBlock>
            <FormLabel>État du produit</FormLabel>
            <FormInput defaultChecked={type === "new"} type={"radio"} name="state" id={"state-new"} value={"new"}
                       onClick={() => handleTypeChange('new')}/>
            <label htmlFor="state-new">Neuf</label>
            <FormInput defaultChecked={type === "used"} type={"radio"} name="state" id={"state-used"} value={"used"}
                       onClick={() => handleTypeChange('used')}/>
            <label htmlFor="state-used">Occasion</label>
            <Spacer height={0.5}/>
            <FormSubLabel>Garantie <FormUnit>{type === "new" ? "(années)" : "(mois)"}</FormUnit></FormSubLabel>
            <FormInput type={"number"} value={product.state?.warranty ?? 0} onChange={handleWarrantyChange}/>

            {product.state?.type === "used" && (
                <>
                    <Spacer height={0.5}/>
                    <UsedForm state={product.state} onUpdate={handleUsedFormChange}/>
                </>
            )}
        </FormBlock>
    );
};

const UsedForm = (props: { state?: StateUsed, onUpdate: (state: StateUsed) => void }) => {
    const handleKilometerChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onUpdate({
            ...props.state,
            type: 'used',
            kilometers: +event.target.value
        })
    }


    return (
        <>
            <FormSubLabel>Kilométrage <FormUnit>(Km)</FormUnit></FormSubLabel>
            <FormInput type={"number"} value={props.state?.kilometers ?? 0} onChange={handleKilometerChange}/>
        </>
    )
}

export default StateForm;