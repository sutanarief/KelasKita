import styled from "styled-components";
import * as colors from './colors'

interface PropsModalWrapper {
  width: string,
  height: string
}



export const ModalWrapper = styled.div<PropsModalWrapper>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 1em;
  background-color: red;
  display: flex;
`

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  overflow: hidden;
`

export const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const ModalLeftWrapper = styled(ModalContentWrapper)`
  background-color: ${colors.darkGreen};
  border-radius: 1em 0 0 1em;
`

export const ModalRightWrapper = styled(ModalContentWrapper)`
  background-color: ${colors.softGreen};
  border-radius: 0 1em 1em 0;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: ${colors.moreGrey};
  padding: 20%;
  border-radius: 1em;
`