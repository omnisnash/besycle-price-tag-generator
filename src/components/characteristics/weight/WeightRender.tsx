import React from 'react';
import {WeightIcon} from "../../Icons.tsx";
import {BlockName, BlockTitle, BlockTitleEmphasis, CharacteristicUtils} from "../CharacteristicUtils.tsx";
import {WeightProperty} from "../../../model.ts";

const WeightRender = (props: {weight?: WeightProperty}) => {
    const {weight} = props;

    if (!weight) return null;

    return (
        <CharacteristicUtils icon={<WeightIcon/>}>
            <BlockTitle>
                <BlockTitleEmphasis>{weight.weight}</BlockTitleEmphasis>{weight.variationWeight ? <>-<BlockTitleEmphasis>{weight.variationWeight}</BlockTitleEmphasis></> : null} Kg
            </BlockTitle>
            <BlockName>
                Poids
            </BlockName>
        </CharacteristicUtils>
    );
};

export default WeightRender;