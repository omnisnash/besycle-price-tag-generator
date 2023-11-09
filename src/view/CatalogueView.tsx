import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {Placeholder} from "../components/characteristics/CharacteristicUtils.tsx";
import Spacer from "../components/Spacer.tsx";
import PriceRender from "../components/characteristics/price/PriceRender.tsx";
import StateValue from "../components/characteristics/state/StateRender.tsx";
import BatteryRender from "../components/characteristics/battery/BatteryRender.tsx";
import AutonomyRender from "../components/characteristics/autonomy/AutonomyRender.tsx";
import MotorRender from "../components/characteristics/motor/MotorRender.tsx";
import MaxSpeedRender from "../components/characteristics/max-speed/MaxSpeedRender.tsx";
import ControllerRender from "../components/characteristics/controller/ControllerRender.tsx";
import WatertightnessRender from "../components/characteristics/watertightness/WatertightnessRender.tsx";
import WeightRender from "../components/characteristics/weight/WeightRender.tsx";
import ColorRender from "../components/characteristics/color/ColorRender.tsx";
import {ProductCatalog, ProductTag} from "../model.ts";
import {FormBlock, FormInput, FormLabel} from "../components/characteristics/FormUtils.tsx";
import {parseCsv} from "../utils.ts";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1 1 auto;

  @page {
    size: A4 landscape;
    margin: 0;
  }
`

const RenderZone = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;
  background: #dedede;
  padding: 16px;
  box-sizing: border-box;
`

const FormZone = styled.div`
  flex: 0 0 400px;
  background: var(--main-bg);
  padding: 1rem;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
`

const RenderContainer = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media print {
    gap: 0;
  } 
`

const Page = styled.div`
  position: relative;
  height: 210mm;
  width: 297mm;
  background: white;
  margin: auto;
  display: flex;

  padding: 1rem 2rem;
  box-sizing: border-box;
`

const PictureBox = styled.div`
  flex: 0 0 50%;
  
  img {
    object-fit: contain;
    max-width: 100%;
  }
`

const TagBox = styled.div`
  flex: 0 0 50%;
`

const PADDING_BORDER = 0;
const BLEED_EDGE_CONTENT = 0;

const Title = styled.h1`
  font-family: "Avenir Heavy",Verdana, serif;
  text-transform: uppercase;
  padding-left: ${PADDING_BORDER};
  font-weight: 600;
  font-size: 1.5em;
`

const PriceAndState = styled.div`
  display: flex;
`

const PriceItem = styled.div`
  flex: 1 1 auto;
`

const PriceValueContainer = styled.span`
  background: var(--main-green);
  color: white;
  padding: 0.2rem 1rem 0.2rem 1rem;
  font-size: 1.5em;
  border-radius: 0 10px 10px 0;
  font-family: "Avenir Next Condensed DemiBold", serif;
`

const StateItem = styled.div`
  flex: 1 1 auto;
  padding-right: ${PADDING_BORDER};
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Characteristics = styled.div`
  padding: 0 ${PADDING_BORDER};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-height: 475px;

  div:nth-child(even) {
    margin-left: ${PADDING_BORDER};
  }
`

const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;

  text-align: center;
  border-bottom: 1px solid #9b9b9b;
  line-height: 0.1em;
  margin: 10px ${BLEED_EDGE_CONTENT} 20px ${BLEED_EDGE_CONTENT};
  box-sizing: border-box;

  span {
    font-family: "Avenir Medium Oblique", serif;
    background: #fff;
    padding: 0 10px;
    font-size: 0.9em;
  }
`

const Success = styled.div`
  background: var(--main-green);
  color: white;
  padding: 1rem;
`

const Error = styled.div`
  background: darkred;
  color: white;
  padding: 1rem;
`

export const Button = styled.button`
  flex: 0 0 max-content;
  background: transparent;
  border: 1px solid var(--main-green);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: var(--main-green);
  }
`

function CatalogueView() {
    const [products, setProducts] = useState<ProductCatalog[]>()
    const [error, setError] = useState()
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        document.title = "Be'Sycle - Catalogue"
    }, [])

    const product: ProductTag = {
        name: "Jolie trott",
        colors: ['#000000', '#FFFFFF'],
        watertightness: "IP69",
        speed: {speed: 888, variationSpeed: 999},
        controller: "VROOM",
        motor: {name: "Will", variationWattPower: "1000x2", variationWattPeak: 1000, variationName: "Eymeric", wattPower: "2000x4", wattPeak: 9999},
        autonomy: {autonomy: 150, variationAutonomy: 500},
        battery: {variationVoltage: 50, voltage: 50, variationAmperage: 50, amperage: 50},
        state: {type: "new", warranty: 5},
        price: {variant: 9999, base: 5555},
        weight: {weight: 50, variationWeight: 52}

    };

    const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        setLoading(true)
        setProducts(undefined);
        setError(undefined);

        const file = event.target.files[0];
        parseCsv(file)
            .then(products => setProducts(products))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }

    return (
        <Container>
            <RenderZone >
                <RenderContainer id={"render"}>
                    {products && products.map((product, index) => <CatalogPage product={product} imageUrl={product.photo}/>)}
                </RenderContainer>
            </RenderZone>
            <FormZone id={"setup"}>
                <FormBlock>
                    <FormLabel>Données produits</FormLabel>
                    <FormInput disabled={isLoading} type={"file"} onChange={handleFileUpload} accept={"text/csv"} />
                </FormBlock>
                {isLoading && (
                    <FormLabel>Chargements...</FormLabel>
                )}
                {products && (
                    <>
                    <Success>
                        {products?.length} produits trouvés
                    </Success>
                    <Spacer height={1}/>
                    <Button onClick={window.print}>Imprimer</Button>
                    </>
                )}
                {error && (
                    <Error>
                        Erreur: {JSON.stringify(error)}
                    </Error>
                )}
            </FormZone>
        </Container>
    )
}

const CatalogPage = (props: {product: ProductTag, imageUrl?: string}) => {
    const {product, imageUrl} = props;

    return (
        <Page>
            <PictureBox>
                <img src={imageUrl} alt={""}/>
            </PictureBox>
            <TagBox>
                <Title>{product.name ? product.name : <Placeholder>nom du produit</Placeholder>}</Title>

                <Spacer height={1}/>

                <PriceAndState>
                    <PriceItem>
                        <PriceValueContainer>
                            <PriceRender price={product.price}/>
                        </PriceValueContainer>
                    </PriceItem>
                    <StateItem>
                        <StateValue state={product.state}/>
                    </StateItem>
                </PriceAndState>

                <Spacer height={2}/>

                <Characteristics>
                    <BatteryRender battery={product.battery}/>
                    <AutonomyRender autonomy={product.autonomy}/>
                    <MotorRender motor={product.motor}/>
                    <MaxSpeedRender maxSpeed={product.speed}/>
                    <ControllerRender controller={product.controller}/>
                    <WatertightnessRender watertightness={product.watertightness}/>
                    <WeightRender weight={product.weight}/>
                    <ColorRender colors={product.colors}/>
                </Characteristics>

                <Footer>
                    <span>besycle.fr</span>
                </Footer>
            </TagBox>
        </Page>
    )
}

export default CatalogueView
