import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock,
    FormInput
} from "../FormUtils.tsx";

const ControllerForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            controller: event.target.value
        })
    }

    return (
        <CollapsibleFormBlock name={"Forme du controller"}>
            <FormInput type={"text"} value={product.controller ?? ""} onChange={handleChange}/>
        </CollapsibleFormBlock>
    );
};

export default ControllerForm;