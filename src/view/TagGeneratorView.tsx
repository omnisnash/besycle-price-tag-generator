import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Render from "../components/characteristics/Render.tsx";
import TagForm from "../components/characteristics/TagForm.tsx";
import {ProductTag} from "../model.ts";
import {importTagFromUrl} from "../utils.ts";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1 1 auto;

  @page {
    size: A5;
    margin: 0;
  }
`

const RenderZone = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  background: #dedede;
  padding: 16px;
`

const FormZone = styled.div`
  flex: 0 0 400px;
  background: var(--main-bg);
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


function TagGeneratorView() {
    const [product, setProduct] = useState<ProductTag>(() => importTagFromUrl(document.location.toString()) ?? loadFromLocalStorage())

    useEffect(() => {
        document.title = product.name ?? "Be'Sycle - Etiquette produit"
    }, [])

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
        <Container className={"test"}>
            <RenderZone>
                <Render product={product}/>
            </RenderZone>
            <FormZone id={"setup"}>
                <TagForm product={product} onUpdate={handleUpdateProductTag} onReset={handleReset}/>
            </FormZone>
        </Container>
    )
}

export default TagGeneratorView
