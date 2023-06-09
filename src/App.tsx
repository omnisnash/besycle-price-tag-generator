import './App.css'
import React, {useState} from "react";
import styled from "styled-components";
import Render from "./components/characteristics/Render.tsx";
import TagForm from "./components/characteristics/TagForm.tsx";
import {ProductTag} from "./model.ts";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

const RenderZone = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  background: #dedede;
  padding: 16px;
`

const FormZone = styled.div`
  flex: 0 0 400px;
  background: black;
  padding: 1rem;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
`
const defaultTag: ProductTag = {
    state: {type: "new"},
    colors: ["#000000"]
}

const LOCAL_STORAGE_KEY = "product";
function loadFromLocalStorage(): ProductTag {
    let productTag: ProductTag = defaultTag;

    if (localStorage) {
        const jsonProduct = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!jsonProduct) {
            return productTag;
        }

        try {
            productTag = JSON.parse(jsonProduct);
        } catch (error) {
            console.error(error)
            return productTag;
        }
    }

    return productTag;
}
function saveToLocalStorage(product: ProductTag): void {
    if (localStorage) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(product))
    }
}

function App() {
    const [product, setProduct] = useState<ProductTag>(() => loadFromLocalStorage())

    const handleUpdateProductTag = (productTag: ProductTag) => {
        if (localStorage) {
            saveToLocalStorage(productTag);
        }

        setProduct(productTag);
    }

    const handleReset = () => {
        setProduct(defaultTag);
    }

    return (
        <Container>
            <RenderZone>
                <Render product={product}/>
            </RenderZone>
            <FormZone id={"setup"}>
                <TagForm product={product} onUpdate={handleUpdateProductTag} onReset={handleReset}/>
            </FormZone>
        </Container>
    )
}

export default App
