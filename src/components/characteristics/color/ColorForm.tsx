import React, {ChangeEvent, useState} from 'react';
import {SetupProps} from "../../../model.ts";
import {
    CollapsibleFormBlock,
    FormInput, FormSelect
} from "../FormUtils.tsx";
import styled from "styled-components";

 const ColorContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   
   & input, & select {
     max-width: 50px;
   }
 `

const DEFAULT_COLOR = "#000000"
const MAX_COLORS = 5;

const ColorForm = (props: SetupProps) => {
    const {product, onUpdate} = props;
    const [colorCount, setColorCount] = useState<number>(props.product.colors?.length ?? 1)

    const handleColorCountChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const count = +event.target.value;
        const completeColors: string[] = [];
        for (let i = 0; i < MAX_COLORS; i++) {
            completeColors.push((product.colors ?? [])[i] ?? DEFAULT_COLOR);
        }

        onUpdate( {
            ...product,
            colors: completeColors.slice(0, count)
        })

        setColorCount(count)
    }
    const handleColorChange = (indexToUpdate: number, updatedColor: string) => {
        const updatedColors: string[] = [];
        for (let i = 0; i < MAX_COLORS; i++) {
            updatedColors.push(i === indexToUpdate ? updatedColor : (product.colors ?? [])[i] ?? DEFAULT_COLOR)
        }
        onUpdate( {
            ...product,
            colors: updatedColors.slice(0, colorCount)
        })
    }

    let options: React.ReactElement[] = [];
    for (let i = 0; i < MAX_COLORS; i++) {
        options.push(<option selected={product.colors?.length === i + 1} key={i + 1} value={i + 1}>{i + 1}</option>)
    }

    let colors: React.ReactElement[] = [];
    for (let i = 0; i < colorCount; i++) {
        colors.push(<ColorItem key={i} index={i} value={(product.colors ?? [])[i] ?? DEFAULT_COLOR} onChange={handleColorChange} />)
    }

    return (
        <CollapsibleFormBlock name={"Couleurs"}>

            <ColorContainer>
                <FormSelect onChange={handleColorCountChange} >
                    {options}
                </FormSelect>
                {colors}
            </ColorContainer>
        </CollapsibleFormBlock>
    );
};

const ColorItem = (props: {index: number, value: string, onChange: (index: number, value: string) => void}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.index, event.target.value)
    }

    return (
        <FormInput type={"color"} value={props.value} onChange={handleChange}/>
    )
}

export default ColorForm;