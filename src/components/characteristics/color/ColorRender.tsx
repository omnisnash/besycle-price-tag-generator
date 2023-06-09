import React from 'react';
import {BlockTitle, BlockTitleEmphasis, CharacteristicUtils} from "../CharacteristicUtils.tsx";
import PieChart from "../../PieChart.tsx";

const ColorRender = (props: {colors?: string[]}) => {
    const {colors} = props;

    if (!colors || !colors.length) return null;

    return (
        <CharacteristicUtils icon={<PieChart colors={colors} radius={25}/> }>
            <BlockTitle>
                <BlockTitleEmphasis>{colors.length}</BlockTitleEmphasis> coloris disponible{colors.length > 1 ? "s" : ""}
            </BlockTitle>

        </CharacteristicUtils>
    );
};

export default ColorRender;