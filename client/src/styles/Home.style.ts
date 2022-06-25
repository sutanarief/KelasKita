import styled from "styled-components";
import * as colors from './colors'


export const HomeWrapper = styled.div`
  margin-top: 100px;
  padding: 40px;
  border-radius: 20px;
  height: 1200px;
`

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: row;

  div {
    width: 50%;
  }
`

export const LeftHero = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const RightHero = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.softPurple};
  border-radius: 50%;
`

export const PrimaryText = styled.h1`
  padding: 50px 50px 0 50px;
  font-size: 60px;
  margin: 0;
  color: ${colors.darkBlue};
`

export const HighlightText = styled.b`
  color: ${colors.darkGreen};
  font-size: 60px;
`

export const OrdinaryText = styled.p`
  color: ${colors.darkBlue};
  font-size: 20px;
  padding: 0 200px 0 50px;

  b {
    color: ${colors.darkGreen};
  }
`