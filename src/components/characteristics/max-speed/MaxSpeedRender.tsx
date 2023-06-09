import React from 'react';
import {MaxSpeedIcon} from "../../Icons.tsx";
import {
    BlockName,
    BlockSubtitle,
    BlockTitle,
    BlockTitleEmphasis,
    CharacteristicUtils,
    Placeholder
} from "../CharacteristicUtils.tsx";
import {SpeedProperty} from "../../../model.ts";

const MaxSpeedRender = (props: {maxSpeed?: SpeedProperty}) => {
    const {maxSpeed} = props;

    if (!maxSpeed || !maxSpeed.speed) return null;

    return (
        <CharacteristicUtils icon={<MaxSpeedIcon/>}>
            <BlockTitle>
                <BlockTitleEmphasis>{props.maxSpeed?.speed ?? <Placeholder>??</Placeholder>}</BlockTitleEmphasis>{props.maxSpeed?.variationSpeed ? <>-<BlockTitleEmphasis>{props.maxSpeed?.variationSpeed}</BlockTitleEmphasis></>  : null}Km/h
            </BlockTitle>
            <BlockName>
                Vitesse maxi
            </BlockName>
            <BlockSubtitle>
                (voie privée)
            </BlockSubtitle>
        </CharacteristicUtils>
    );
};

export default MaxSpeedRender;