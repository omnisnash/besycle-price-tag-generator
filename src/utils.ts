import {ProductCatalog, ProductCsv, ProductTag, State} from "./model.ts";
import Papa from "papaparse";
import {Simulate} from "react-dom/test-utils";

export function importTagFromUrl(url: string): ProductTag | null {
    let params = (new URL(url)).searchParams;
    if (!params.has("from-url")) {
        return null;
    }

    const getColor = (key: string) => {
        const colors = params.get(key);
        if (!colors) return undefined;
        return colors.split(",").map(color => `#${color}`)
    }
    const getValue = (key: string) => params.get(key) ?? undefined;
    const getNumber = (key: string) => {
        const value = params.get(key);
        if (!value) return undefined;

        const number = parseFloat(value);
        return isNaN(number) ? undefined : number;
    }

    let state: State | undefined = undefined;
    if (getValue("state") === "new") {
        state = {
            type: "new",
            warranty: getNumber("warranty")
        }
    }
    if (getValue("state") === "used") {
        state = {
            type: "used",
            warranty: getNumber("warranty"),
            kilometers: getNumber("usedKm")
        }
    }

    return {
        name: getValue("name"),
        price: {
            base: getNumber("price"),
            variant: getNumber("price2")
        },
        state: state,
        battery: {
            amperage: getNumber("battery1amp"),
            variationAmperage: getNumber("battery2amp"),
            voltage: getNumber("battery1volt"),
            variationVoltage: getNumber("battery2volt"),
        },
        autonomy: {
            autonomy: getNumber("autonomy1"),
            variationAutonomy: getNumber("autonomy2"),
        },
        motor: {
            name: getValue("motor1Name"),
            wattPeak: getNumber("motor1peak"),
            wattPower: getValue("motor1power"),
            variationName: getValue("motor2Name"),
            variationWattPeak: getNumber("motor2peak"),
            variationWattPower: getValue("motor2power")
        },
        speed: {
            speed: getNumber("speed1"),
            variationSpeed: getNumber("speed2")
        },
        controller: getValue("controller"),
        watertightness: getValue("watertightness"),
        weight: {
            weight: getNumber("weight1"),
            variationWeight: getNumber("weight2"),
        },
        colors: getColor("colors")
    }
}

export async function parseCsv(file: File): Promise<ProductCatalog[]> {
    return new Promise((resolve, reject) => {
        Papa.parse<ProductCsv>(file, {
            header: true,
            dynamicTyping: true,
            error: (error) => {
                console.error(error)
                reject(error)
            },
            complete: (results) => {
                if (results.errors.length) {
                    console.error(results.errors)
                    reject(results.errors.map(error => error.message).join(', '))
                }

                resolve(results.data.map(data => csvToProduct(data)))
            }
        })
    })
}

function csvToProduct(data: ProductCsv): ProductCatalog {
    return {
        photo: data["Photo"],
        name: data["Name"],
        weight: {
            weight: data["Poids"],
            variationWeight: data["Poids 2"]
        },
        price: {
            base: data["Prix"],
            variant: data["Prix 2"],
        },
        state: {
            type: "new",
            warranty: data["Garantie"]
        },
        battery: {
            amperage: data["Ampérage"],
            variationAmperage: data["Ampérage 2"],
            voltage: data["Capacité"],
            variationVoltage: data["Capacité 2"]
        },
        autonomy: {
            autonomy: data["Autonomie"],
            variationAutonomy: data["Autonomie 2"]
        },
        motor: {
            name: data["Moteur"],
            wattPeak: data["Crête"],
            wattPower: data["Puissance"],
            variationName: data["Moteur 2"],
            variationWattPeak: data["Crête 2"],
            variationWattPower: data["Puissance 2"]
        },
        controller: data["Contrôleur"],
        speed: {
            speed: data["Vitesse"],
            variationSpeed: data["Vitesse 2"]
        },
        colors: data["Couleurs"]?.split(",") ?? [],
        watertightness: data["Étanchéité"],
    }
}