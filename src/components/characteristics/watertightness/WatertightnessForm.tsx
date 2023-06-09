import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock,
    FormInput
} from "../FormUtils.tsx";

const WatertightnessForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            watertightness: event.target.value
        })
    }

    return (
        <CollapsibleFormBlock name={"Étanchéité"}>
            <FormInput type={"text"} value={product.watertightness ?? ""} onChange={handleChange}/>
        </CollapsibleFormBlock>
    );
};

export default WatertightnessForm;