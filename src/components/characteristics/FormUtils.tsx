import React from 'react';
import styled from "styled-components";

export const FormBlockDetails = styled.details`
  margin: 1rem 0;
  max-width: 400px;
  color: white;

  summary {
    color: var(--main-green);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`

export interface CollapsibleFormBlockProps extends React.PropsWithChildren {
    name: string
    unit?: string;
}

export const CollapsibleFormBlock: React.FC<CollapsibleFormBlockProps> = (props) => {
    return (
        <FormBlockDetails>
            <summary>{props.name} {props.unit ? <FormUnit>{props.unit}</FormUnit> : null}</summary>
            {props.children}
        </FormBlockDetails>
    )
}


export const FormBlock = styled.div`
  margin: 1rem 0;
  max-width: 400px;
  color: white;
`


export const FormUnit = styled.span`
  font-size: 0.8em;
  color: #989898;
  font-weight: 600;
`

export const FormLabel = styled.label`

  color: var(--main-green);
  display: block;
  margin: 0 0 0.25rem 0;
  font-weight: 600;
`

export const FormSubLabel = styled.label`
  font-size: 0.7em;
  color: white;
  display: block;
  margin: 0.25rem 0 0.25rem 0;
  font-weight: 600;
`

export const FormInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  
  &[type="radio"] {
    width: unset;
    margin-right: 0.5rem;
  }

  &[type="radio"] + label {
    margin-right: 1rem;
  }
  
  &[type="color"] {
    padding: unset;
  }
  
`

export const FormColumnContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const FormColumn = styled.div`
  flex: 1 1 auto
`

export const FormSelect = styled.select`
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;

`