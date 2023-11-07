import './App.css'
import styled, {css} from "styled-components";
import TagGeneratorView from "./view/TagGeneratorView.tsx";
import logoSrc from './assets/logo.png'
import {useEffect, useState} from "react";
import CatalogueView from "./view/CatalogueView.tsx";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SubApp = styled.div`
  flex: 1 1 auto;
  overflow: auto;
`

const Header = styled.header`
  height: 64px;
  width: 100%;
  background: var(--main-bg);
  flex: 0 0 auto;
  display: flex;
  gap: 2rem;
  
  img {

    padding: 0.5rem 1rem;
    box-sizing: border-box;
    object-fit: contain;
    max-height: 100%;
  }
`

const Navigation = styled.nav`
  display: flex;
  align-items: stretch;
  height: 100%;
`

const NavigationItem = styled.div<{$selected?: boolean}>`
  color: white;
  align-items: center;
  display: flex;

  padding: 0 1rem;
  
  ${props => props.$selected && css`
    background: var(--main-green);
    color: white;
  `}
  
  &:hover {
    background: var(--main-green);
    color: white;
    cursor: pointer;
  }
`



type VIEW = "TAG" | "CATALOG";
function App() {
    const [view, setView] = useState<VIEW>("TAG");


    return (
        <Container>
            <Header>
                <img src={logoSrc} alt={""}/>
                <Navigation>
                    <NavigationItem $selected={view === "TAG"} onClick={() => setView("TAG")}>Fiche produit</NavigationItem>
                    <NavigationItem $selected={view === "CATALOG"} onClick={() => setView("CATALOG")}>Catalogue</NavigationItem>
                </Navigation>
            </Header>
            <SubApp>
            {view === "TAG" && <TagGeneratorView/>}
            {view === "CATALOG" && <CatalogueView/>}
            </SubApp>
        </Container>
    )
}

export default App
