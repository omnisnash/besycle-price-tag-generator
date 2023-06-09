import React from 'react';
import {BatteryIcon} from "../../Icons.tsx";
import {BlockName, BlockTitle, BlockTitleEmphasis, CharacteristicUtils, Placeholder} from "../CharacteristicUtils.tsx";
import {BatteryProperty} from "../../../model.ts";

const BatteryRender = (props: {battery?: BatteryProperty}) => {
    const {battery} = props;

    if (!battery || (!battery.amperage && !battery.voltage)) return null;

    return (
        <CharacteristicUtils icon={<BatteryIcon/>}>
            <BlockTitle >
                <BlockTitleEmphasis>{battery.voltage ?? <Placeholder>??</Placeholder>}</BlockTitleEmphasis>{battery.variationVoltage ? <>-<BlockTitleEmphasis>{battery.variationVoltage}</BlockTitleEmphasis></> : null}V -
                <BlockTitleEmphasis>{battery.amperage ?? <Placeholder>??</Placeholder>}</BlockTitleEmphasis>{battery.variationAmperage ? <>-<BlockTitleEmphasis>{battery.variationAmperage}</BlockTitleEmphasis></>  : null}Ah
            </BlockTitle>

            <BlockName>
                Batterie
            </BlockName>
        </CharacteristicUtils>
    );

};

export default BatteryRender;