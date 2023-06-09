import React from 'react';
import {ControllerIcon} from "../../Icons.tsx";
import {BlockName, BlockTitle, BlockTitleEmphasis, CharacteristicUtils} from "../CharacteristicUtils.tsx";

const ControllerRender = (props: {controller?: string}) => {
    const {controller} = props;

    if (!controller) return null;

    return (
        <CharacteristicUtils icon={<ControllerIcon/>}>
            <BlockTitle>
                <BlockTitleEmphasis>{props.controller}</BlockTitleEmphasis>
            </BlockTitle>
            <BlockName>
                Contrôleur
            </BlockName>
        </CharacteristicUtils>
    );
};

export default ControllerRender;