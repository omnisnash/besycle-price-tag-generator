import React from 'react';
import {AutonomyIcon} from "../../Icons.tsx";
import {BlockName, BlockTitle, BlockTitleEmphasis, CharacteristicUtils, Placeholder} from "../CharacteristicUtils.tsx";
import {AutonomyProperty} from "../../../model.ts";

const AutonomyRender = (props: {autonomy?: AutonomyProperty}) => {
    const {autonomy} = props;

    if (!autonomy || !autonomy.autonomy) return null;

    return (
        <CharacteristicUtils icon={<AutonomyIcon/>}>
            <BlockTitle>
                <BlockTitleEmphasis>{autonomy.autonomy ?? <Placeholder>??</Placeholder>}</BlockTitleEmphasis>{autonomy.variationAutonomy ? <>-<BlockTitleEmphasis>{autonomy.variationAutonomy}</BlockTitleEmphasis></> : null}Kms
            </BlockTitle>
            <BlockName>
                Autonomie
            </BlockName>
        </CharacteristicUtils>
    );
};

export default AutonomyRender;