import React from 'react';
import styled from "styled-components";

export const Placeholder = styled.span`
  font-style: oblique;
  color: grey;
  font-variant: small-caps;
`

export const BlockUpTitle = styled.span`
  font-size: 0.9em;
  display: block;
  text-transform: uppercase;
  line-height: 1.2;
  font-family: "Avenir Heavy", Verdana, serif;
`

export const BlockTitle = styled.span`
  font-size: 1em;
  display: block;
  font-family: "Avenir Heavy", Verdana,serif;
  line-height: 0.9;
`

export const BlockTitleEmphasis = styled.span`
  font-size: 1.5em;
  color: var(--main-green);
  font-family: "Avenir Next Condensed DemiBold", Verdana,serif;
`

export const BlockName = styled.span`
  font-size: 0.9em;
  font-family: "Avenir Heavy",Verdana, serif;
`

export const BlockSubtitle = styled.span`
  color: #484848;
  font-size: 0.8em;
  font-family: "Avenir Medium Oblique", Verdana, serif;
  display: block;
`

export const CharacteristicBlockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 7rem;
`

export const CharacteristicBlockIcon = styled.span`
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  
  & svg {
    overflow: visible;
    width: 50px;
    height: 50px;
  }
`

export const CharacteristicBlockContent = styled.span`
  flex: 1 1 auto;
`

export interface CharacteristicBlockProps extends React.PropsWithChildren {
    icon: React.ReactElement;
}

export const CharacteristicUtils: React.FC<CharacteristicBlockProps> = (props) => {
    return (
        <CharacteristicBlockContainer>
            <CharacteristicBlockIcon>
                {props.icon}
            </CharacteristicBlockIcon>
            <CharacteristicBlockContent>
                {props.children}
            </CharacteristicBlockContent>
        </CharacteristicBlockContainer>
    );
};

