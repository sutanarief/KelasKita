import styled from "styled-components";
import * as colors from './colors'


export const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterContent = styled.div`
  font-weight: 800;
  font-size: larger;
  color: ${colors.darkBlue};
`