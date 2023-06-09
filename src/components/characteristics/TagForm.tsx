import React, {ChangeEvent, useEffect} from 'react';
import {SetupProps} from "../../model.ts";
import {FormBlock, FormInput, FormLabel} from "./FormUtils.tsx";
import PriceForm from "./price/PriceForm.tsx";
import StateForm from "./state/StateForm.tsx";
import BatteryForm from "./battery/BatteryForm.tsx";
import AutonomyForm from "./autonomy/AutonomyForm.tsx";
import MotorForm from "./motor/MotorForm.tsx";
import MaxSpeedForm from "./max-speed/MaxSpeedForm.tsx";
import styled from "styled-components";
import ControllerForm from "./controller/ControllerForm.tsx";
import WatertightnessForm from "./watertightness/WatertightnessForm.tsx";
import WeightForm from "./weight/WeightForm.tsx";
import ColorForm from "./color/ColorForm.tsx";

export const ClearContainer = styled.div`
  display: flex;
`

export const Title = styled.h2`
  flex: 1 1 auto;
  color: white;
  margin: 0;
`

export const ClearButton = styled.button`
  flex: 0 0 max-content;
  background: transparent;
  border: 1px solid var(--main-green);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: var(--main-green);
  }
`

const TagForm = (props: SetupProps) => {
    const {product, onUpdate} = props;

    const updateName = (event: ChangeEvent<HTMLInputElement>) => onUpdate({
        ...product,
        name: event.target.value
    })

    useEffect(() => {
        document.title = props.product.name ?? "Be'Sycle - Etiquette produit"
    }, [props.product.name])

    return (
        <>
            <FormBlock>
                <ClearContainer>
                    <Title>Données produit</Title>
                    <ClearButton onClick={props.onReset}>Vider le formulaire</ClearButton>
                </ClearContainer>
            </FormBlock>

            <FormBlock>
                <FormLabel>Nom du produit </FormLabel>
                <FormInput type={"text"} value={product.name ?? ""} onChange={updateName}/>
            </FormBlock>

            <PriceForm {...props} />
            <StateForm {...props} />
            <BatteryForm {...props} />
            <AutonomyForm {...props} />
            <MotorForm {...props} />
            <MaxSpeedForm {...props} />
            <ControllerForm {...props} />
            <WatertightnessForm {...props} />
            <WeightForm {...props} />
            <ColorForm {...props} />


        </>
    );
};

export default TagForm;