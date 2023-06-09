export interface SetupProps {product: ProductTag, onUpdate: (product: ProductTag) => void, onReset: () => void}

export interface ProductTag {
    name?: string
    price?: Price;
    state?: State;
    battery?: BatteryProperty;
    autonomy?: AutonomyProperty;
    motor?: MotorProperty;
    speed?: SpeedProperty;
    controller?: string;
    watertightness?: string;
    weight?: WeightProperty;
    colors?: string[];
}

export interface Price {
    base?: number;
    variant?: number;
}

export type StateType = "new" | "used"
export type State = StateNew | StateUsed

interface StateBase {
    type: StateType;
    warranty?: number;
}

export interface StateNew extends StateBase{
    type: "new"
}

export interface StateUsed extends StateBase{
    type: "used"
    kilometers?: number;
}

export interface BatteryProperty {
    voltage?: number;
    amperage?: number;
    variationVoltage?: number;
    variationAmperage?: number;
}

export interface AutonomyProperty {
    autonomy?: number;
    variationAutonomy?: number;
}

export interface MotorProperty {
    name?: string;
    wattPower?: string;
    wattPeak?: number;
    variationName?: string;
    variationWattPower?: string;
    variationWattPeak?: number;
}

export interface SpeedProperty {
    speed?: number;
    variationSpeed?: number;
}


export interface WeightProperty {
    weight?: number;
    variationWeight?: number;
}