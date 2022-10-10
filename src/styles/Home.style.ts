import styled from "styled-components";
import * as colors from './colors'

interface PropsTextHeader {
  headerTextColor: string,
}

interface PropsText {
  textColor: string
}

interface PropsCard {
  cardColor: string,
}


export const HomeWrapper = styled.div`
  margin-top: 5%;
  /* padding: 40px; */
  /* border-radius: 20px; */
  /* height: 1200px; */
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
  padding-top: -100px;
`

export const RightHero = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
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

export const ContentContainer = styled.div`
  margin: 15% 0 10% 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ContentText = styled.h2`
  color: ${colors.darkBlue};
  margin-bottom: 3%;
`
export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 5%;
`

export const ContentCard = styled.div`
`

export const CardBody = styled.div<PropsCard>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.cardColor};
  max-width: 20%;
  /* max-height: 25%; */
  padding: 1%;
  border-radius: 10%;
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  :hover {
    transform: scale(1.1);
  }
`

export const CardHeader = styled.h3<PropsTextHeader>`
  color: ${props => props.headerTextColor};
  text-align: center;
  margin: 5% 0 0 0;

`

export const CardText = styled.p<PropsText>`
  text-align: center;
  color: ${props => props.textColor};
`

export const CardImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(92, 219, 149, 0.05);
  /* padding: 10%; */
`
export const AboutUsWrapper = styled.div`
  display: flex;
`
export const PrimaryAboutUsText = styled.h1`
  color: ${colors.darkBlue};
`
export const AboutUsText = styled.p`
color: ${colors.darkBlue};
`

export const TextWrapper = styled.div`
  max-width: 50%;
  padding: 10%;
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`