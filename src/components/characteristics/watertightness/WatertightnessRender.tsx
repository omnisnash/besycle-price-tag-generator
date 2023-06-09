import React from 'react';
import {WatertightnessIcon} from "../../Icons.tsx";
import {BlockName, BlockTitle, BlockTitleEmphasis, CharacteristicUtils} from "../CharacteristicUtils.tsx";

const WatertightnessRender = (props: {watertightness?: string}) => {
    const {watertightness} = props;

    if (!watertightness) return null;

    return (
        <CharacteristicUtils icon={<WatertightnessIcon/>}>
            <BlockTitle>
                <BlockTitleEmphasis>{props.watertightness}</BlockTitleEmphasis>
            </BlockTitle>
            <BlockName>
                Étanchéité
            </BlockName>
        </CharacteristicUtils>
    );
};

export default WatertightnessRender;