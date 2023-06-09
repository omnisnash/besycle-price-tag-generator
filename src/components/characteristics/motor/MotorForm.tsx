import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock, FormColumn, FormColumnContainer,
    FormInput,
    FormSubLabel,
    FormUnit
} from "../FormUtils.tsx";


const MotorForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate({
            ...product,
            motor: {
                ...product.motor,
                name: event.target.value
            }
        })
    }
    const handlePowerChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate({
            ...product,
            motor: {
                ...product.motor,
                wattPower: event.target.value
            }
        })
    }
    const handlePeakChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate({
            ...product,
            motor: {
                ...product.motor,
                wattPeak: +event.target.value
            }
        })
    }

    const handleVariationNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate({
            ...product,
            motor: {
                ...product.motor,
                variationName: event.target.value
            }
        })
    }
    const handleVariationPowerChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate({
            ...product,
            motor: {
                ...product.motor,
                variationWattPower: event.target.value
            }
        })
    }
    const handleVariationPeakChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate({
            ...product,
            motor: {
                ...product.motor,
                variationWattPeak: +event.target.value
            }
        })
    }

    return (
        <CollapsibleFormBlock name={"Moteur"}>
            <FormColumnContainer>
                <FormColumn>
                    <FormSubLabel>Nom</FormSubLabel>
                    <FormInput type={"text"} value={product.motor?.name ?? ""} onChange={handleNameChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Puissance<FormUnit>(W)</FormUnit></FormSubLabel>
                    <FormInput type={"text"} value={product.motor?.wattPower ?? 0} onChange={handlePowerChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Puissance Crête <FormUnit>(W)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.motor?.wattPeak ?? 0} onChange={handlePeakChange}/>
                </FormColumn>
            </FormColumnContainer>
            <FormColumnContainer>
                <FormColumn>
                    <FormSubLabel>Nom</FormSubLabel>
                    <FormInput type={"text"} value={product.motor?.variationName ?? ""} onChange={handleVariationNameChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Puissance<FormUnit>(W)</FormUnit></FormSubLabel>
                    <FormInput type={"text"} value={product.motor?.variationWattPower ?? 0} onChange={handleVariationPowerChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Puissance Crête <FormUnit>(W)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.motor?.variationWattPeak ?? 0} onChange={handleVariationPeakChange}/>
                </FormColumn>
            </FormColumnContainer>
        </CollapsibleFormBlock>
    );
};

export default MotorForm;