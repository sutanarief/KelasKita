import React, { useState } from 'react'
import {
  Background,
  ModalWrapper,
  ModalLeftWrapper,
  ModalRightWrapper,
  ModalContent,
  ModalButton,
  ModalForm
} from '../styles/Modal.style'

import {
  TextInput,
  InputLabel
} from '../styles/Input.style'

type ModalProps = {
  width: string,
  height: string
}

const Modal:React.FC<ModalProps> = ({width, height}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <Background>
      <ModalWrapper
        width={width}
        height={height}
      >
        <ModalLeftWrapper>
          <ModalContent>
            <ModalForm onSubmit={handleSubmit}>
              {/* <InputLabel></InputLabel> */}
              <TextInput type="email" placeholder='john@doe.com'/>
              <TextInput name="password" type="password" placeholder="More than 8 characters includes Number"/>
              <ModalButton type="submit" >Log In</ModalButton>
            </ModalForm>
          </ModalContent>
        </ModalLeftWrapper>
        <ModalRightWrapper>
          
        </ModalRightWrapper>

      </ModalWrapper>
    </Background>
  )
}

export default Modal