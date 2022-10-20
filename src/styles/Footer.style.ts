import styled from "styled-components";
import * as colors from './colors'

interface PropsColorTitle {
  titleColor: string
}

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkBlue};
  padding-bottom: 1%
`

export const FooterContent = styled.div`
  width: 100%;
`

export const FooterTitleText = styled.span<PropsColorTitle>`
  color: ${(props) => props.titleColor};
  font-size: x-large;
  font-weight: 800;
`
export const FooterCreditText = styled.p`
  width: 60%;
  line-height: 150%;
  color: ${colors.moreGrey};
`

export const FooterContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const FooterItems = styled.div`
  margin: 5%;
`
export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`