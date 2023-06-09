import React from 'react';
import styled from "styled-components";
import {State, StateNew, StateUsed} from "../../../model.ts";
import {Placeholder} from "../CharacteristicUtils.tsx";

const Title = styled.span`
  font-size: 1.2em;
  display: block;
  font-family: "Avenir Heavy", serif;
  line-height: 0.80;
`

const TitleInfo = styled.span`
  color: #3d3d3d;
  font-family: "Avenir Heavy Oblique", serif;
  font-size: 0.8em;
`

const Subtitle = styled.span`
  color: var(--main-green);
  font-family: "Avenir Heavy Oblique", serif;
  font-size: 0.9em;
`

const StateValue = (props: {state?: State}) => {
    if (!props.state) {
        return <Placeholder>aucun état</Placeholder>
    }

    switch (props.state.type) {
        case "new":
            return <StateValueNew state={props.state}/>;
        case "used":
            return <StateValueUsed state={props.state}/>;
    }

    return (
        <Title>Neuf</Title>
    );
};

const StateValueNew = (props: {state: StateNew }) => {
    const {state} = props;

    return (
        <>
            <Title>Neuf</Title>
            {state.warranty &&
                <Subtitle>Garantie {state.warranty} an{state.warranty > 1 ? "s" : ""}</Subtitle>}
        </>
    );
};

export const StateValueUsed = (props: {state: StateUsed }) => {
    const {state} = props;
    const kilometers = state.kilometers ? `(${state.kilometers} Km)` : <Placeholder>aucun kilometre</Placeholder>

    return (
        <>
            <Title>Occasion <TitleInfo>{kilometers}</TitleInfo></Title>
            {state.warranty &&
            <Subtitle>Garantie {state.warranty} mois</Subtitle>}
        </>

);
};

export default StateValue;