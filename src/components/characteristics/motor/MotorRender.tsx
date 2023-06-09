import React from 'react';
import {MotorIcon} from "../../Icons.tsx";
import {
    BlockSubtitle,
    BlockTitle,
    BlockTitleEmphasis,
    BlockUpTitle,
    CharacteristicUtils
} from "../CharacteristicUtils.tsx";
import {MotorProperty} from "../../../model.ts";

const MotorRender = (props: {motor?: MotorProperty}) => {
    const {motor} = props;

    if (!motor || (!motor.name)) return null;

    return (
        <CharacteristicUtils icon={<MotorIcon/>}>
            <BlockTitle>
                <BlockUpTitle>{motor.name}</BlockUpTitle>
                {motor.wattPower &&
                    <BlockTitle>
                        <BlockTitleEmphasis>{motor.wattPower}</BlockTitleEmphasis>W
                    </BlockTitle>}
                {motor.wattPeak &&
                    <BlockSubtitle>
                        ({motor.wattPeak}W en crête)
                    </BlockSubtitle>}
            </BlockTitle>
            <BlockTitle>
                <BlockUpTitle>{motor.variationName}</BlockUpTitle>
                {motor.variationWattPower &&
                    <BlockTitle>
                        <BlockTitleEmphasis>{motor.variationWattPower}</BlockTitleEmphasis>W
                    </BlockTitle>}
                {motor.variationWattPeak &&
                    <BlockSubtitle>
                        ({motor.variationWattPeak}W en crête)
                    </BlockSubtitle>}
            </BlockTitle>
        </CharacteristicUtils>
    );
};

export default MotorRender;