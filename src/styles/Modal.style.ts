import styled from "styled-components";
import * as colors from './colors'
import pattern from "../assets/pattern1.jpg"

interface PropsModalWrapper {
  width: string,
  height: string,
}

interface PropsBackground {
  isOpen: boolean
}



export const ModalWrapper = styled.div<PropsModalWrapper>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 1em;
  display: flex;
  background-color: ${colors.white};
  overflow: hidden;
`

export const Background = styled.div<PropsBackground>`
  visibility: ${(props) => props.isOpen ? "visible" : "hidden"};
  opacity: ${(props) => props.isOpen ? 1 : 0};
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
  transition: all 0.4s;
`

export const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ModalLeftWrapper = styled(ModalContentWrapper)`
  /* background-color: ${colors.white}; */
  border-radius: 1em 0 0 1em;
  display: flex;
  max-width: 50%;
  height: 100%;
  justify-content: flex-end;
`

export const ModalRightWrapper = styled(ModalContentWrapper)`
  /* background-color: ${colors.white}; */
  border-radius: 0 1em 1em 0;
  width: 100%;
  display: flex;
  justify-content: start;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: ${colors.brightWhite};
  max-height: fit-content;
  border-radius: 1em;
  box-shadow: 0em .6em .6em rgba(0, 0, 0, .2);
  width: 70%;
  margin-bottom: 5%;
`

export const ModalButton = styled.button`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  /* margin-top: 3%; */
  padding: 2.5%;
  border-radius: .4em;
  border: 1px solid ${colors.darkBlue};
  outline: none;
  text-align: center;
  width: 90%;
  cursor: pointer;
  transition: all .1s ease-in-out;
  
  :hover {
    transform: scale(1.03);
    background-color: ${colors.white};
    color: ${colors.darkBlue};
  }
`

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  align-items: center;
`

export const HorizontalRule = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.darkGreen};
  display: flex;
  width: 70%;
  margin-bottom: 3%;
  text-align: center;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  max-height: fit-content;
  justify-content: end;
  margin-top: 3%;
`

export const CloseButton = styled.div`
  /* width: 100%; */
  max-height: fit-content;
  max-width: fit-content;
  color: ${colors.darkBlue};
  /* box-shadow: 0em .2em .2em rgba(0, 0, 0, .2); */
  font-weight: bolder;
  margin-right: 4%;
  cursor: pointer;
  transition: all .1s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`