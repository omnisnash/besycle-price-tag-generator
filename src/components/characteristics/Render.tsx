import React from 'react';
import styled from "styled-components";

import Spacer from "../Spacer.tsx";
import StateValue from "./state/StateRender.tsx";
import {
    Placeholder
} from "./CharacteristicUtils.tsx";
import {LogoIcon} from "../Icons.tsx";
import {ProductTag} from "../../model.ts";
import PriceRender from "./price/PriceRender.tsx";
import BatteryRender from "./battery/BatteryRender.tsx";
import AutonomyRender from "./autonomy/AutonomyRender.tsx";
import MotorRender from "./motor/MotorRender.tsx";
import MaxSpeedRender from "./max-speed/MaxSpeedRender.tsx";
import ControllerRender from "./controller/ControllerRender.tsx";
import WatertightnessRender from "./watertightness/WatertightnessRender.tsx";
import WeightRender from "./weight/WeightRender.tsx";
import ColorRender from "./color/ColorRender.tsx";

const PADDING_BORDER = '3rem';
const BLEED_EDGE_CONTENT = '3mm';
const BLEED_EDGE_REAL = '5mm';

const RenderContainer = styled.div`
  position: relative;
  height: 209mm;
  width: 148mm;
  background: white;
  margin: auto;
  padding: ${BLEED_EDGE_CONTENT};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: black;
  height: 100px;
  
  svg {
    height: 60px;
  }
`

const Title = styled.h1`
  font-family: "Avenir Heavy", serif;
  text-transform: uppercase;
  padding-left: ${PADDING_BORDER};
  font-weight: 600;
  font-size: 1.5em;
`

const PriceAndState = styled.div`
  display: flex;
`

const PriceItem = styled.div`
  flex: 1 1 auto;
`

const PriceValueContainer = styled.span`
  background: var(--main-green);
  color: white; 
  padding: 0.2rem 1rem 0.2rem ${PADDING_BORDER};
  font-size: 1.5em;
  border-radius: 0 10px 10px 0;
  font-family: "Avenir Next Condensed DemiBold", serif;
`

const StateItem = styled.div`
  flex: 1 1 auto;
  padding-right: ${PADDING_BORDER};
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Characteristics = styled.div`
  padding: 0 ${PADDING_BORDER};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-height: 475px;
  
  div:nth-child(even) {
    margin-left: ${PADDING_BORDER};
  }
`

const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;

  text-align: center;
  border-bottom: 1px solid #9b9b9b;
  line-height: 0.1em;
  margin: 10px ${BLEED_EDGE_CONTENT} 20px ${BLEED_EDGE_CONTENT};
  box-sizing: border-box;

  span {
    font-family: "Avenir Medium Oblique", serif;
    background: #fff;
    padding: 0 10px;
    font-size: 0.9em;
  }
`

const BleedSpace = styled.div`
  position: absolute;
  width: ${BLEED_EDGE_REAL};
  height: ${BLEED_EDGE_REAL};
  border: 1px solid #000000;

  &.top-left {
    top: 0;
    left: 0;
    border-left: none;
    border-top: none;
  }

  &.top-right {
    top: 0;
    right: 0;
    border-right: none;
    border-top: none;
  }

  &.bottom-right {
    bottom: 0;
    right: 0;
    border-right: none;
    border-bottom: none;
  }

  &.bottom-left {
    bottom: 0;
    left: 0;
    border-left: none;
    border-bottom: none;
  }
`


const Render = (props: {product: ProductTag}) => {
    const {product} = props;
    return (
        <RenderContainer id={"render"}>
            <BleedSpace className={"top-left"}/>
            <BleedSpace className={"top-right"}/>
            <BleedSpace className={"bottom-right"}/>
            <BleedSpace className={"bottom-left"}/>
            <Header>
                <LogoIcon/>
            </Header>

            <Spacer height={1}/>

            <Title>{product.name ? product.name : <Placeholder>nom du produit</Placeholder>}</Title>

            <Spacer height={1}/>

            <PriceAndState>
                <PriceItem>
                    <PriceValueContainer>
                        <PriceRender price={product.price}/>
                    </PriceValueContainer>
                </PriceItem>
                <StateItem>
                    <StateValue state={product.state}/>
                </StateItem>
            </PriceAndState>

            <Spacer height={2}/>

            <Characteristics>
                <BatteryRender battery={product.battery}/>
                <AutonomyRender autonomy={product.autonomy}/>
                <MotorRender motor={product.motor}/>
                <MaxSpeedRender maxSpeed={product.speed}/>
                <ControllerRender controller={product.controller}/>
                <WatertightnessRender watertightness={product.watertightness}/>
                <WeightRender weight={product.weight}/>
                <ColorRender colors={product.colors}/>
            </Characteristics>

            <Footer>
                <span>besycle.fr</span>
            </Footer>
        </RenderContainer>
    );
};

export default Render;