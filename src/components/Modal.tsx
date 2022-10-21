import React from 'react'
import {
  Background,
  ModalWrapper,
  ModalLeftWrapper,
  ModalRightWrapper,
  ModalContent
} from '../styles/Modal.style'

import {
  TextInput
} from '../styles/Input.style'

type ModalProps = {
  width: string,
  height: string
}

const Modal:React.FC<ModalProps> = ({width, height}) => {

  
  return (
    <Background>
      <ModalWrapper
        width={width}
        height={height}
      >
        <ModalLeftWrapper>
          <ModalContent>
            <TextInput/>
            <TextInput/>
            <TextInput/>
          </ModalContent>
        </ModalLeftWrapper>
        <ModalRightWrapper>
          
        </ModalRightWrapper>

      </ModalWrapper>
    </Background>
  )
}

export default Modal