import React, {ChangeEvent} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock,
    FormColumn,
    FormColumnContainer,
    FormInput,
    FormSubLabel,
    FormUnit
} from "../FormUtils.tsx";

const BatteryForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const handleMinVoltageChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            battery: {
                ...product.battery,
                voltage: +event.target.value
            }
        })
    }

    const handleMaxVoltageChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            battery: {
                ...product.battery,
                variationVoltage: +event.target.value
            }
        })
    }

    const handleMinAmperageChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            battery: {
                ...product.battery,
                amperage: +event.target.value
            }
        })
    }

    const handleMaxAmperageChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdate( {
            ...product,
            battery: {
                ...product.battery,
                variationAmperage: +event.target.value
            }
        })
    }


    return (
        <CollapsibleFormBlock name={"Batterie"}>
            <FormColumnContainer>
                <FormColumn>
                    <FormSubLabel>Voltage <FormUnit>(V)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.battery?.voltage ?? "0"} onChange={handleMinVoltageChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Voltage (variation) <FormUnit>(V)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.battery?.variationVoltage ?? 0} onChange={handleMaxVoltageChange}/>
                </FormColumn>
            </FormColumnContainer>
            <FormColumnContainer>
                <FormColumn>
                    <FormSubLabel>Ampérage <FormUnit>(Ah)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.battery?.amperage ?? 0} onChange={handleMinAmperageChange}/>
                </FormColumn>
                <FormColumn>
                    <FormSubLabel>Ampérage (variation)<FormUnit>(Ah)</FormUnit></FormSubLabel>
                    <FormInput type={"number"} value={product.battery?.variationAmperage ?? 0} onChange={handleMaxAmperageChange}/>
                </FormColumn>
            </FormColumnContainer>
        </CollapsibleFormBlock>
    );
};

export default BatteryForm;