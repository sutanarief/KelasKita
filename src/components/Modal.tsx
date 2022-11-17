import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import {
  Background,
  ModalWrapper,
  ModalLeftWrapper,
  ModalRightWrapper,
  ModalContent,
  ModalContentWrapper,
  ModalButton,
  ModalForm,
  CloseButton,
  CloseButtonContainer
} from '../styles/Modal.style'

import {
  TextInput,
  InputLabel
} from '../styles/Input.style'

import {
  Person
} from '../assets'

type ModalProps = {
  width: string,
  height: string,
  isOpen: boolean,
  toggle: Dispatch<SetStateAction<boolean>>
}

const Modal:React.FC<ModalProps> = ({width, height, isOpen, toggle}) => {

  const [payload, setPayload] = useState({user: "", password: ""})

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(payload.user === 'asd' && payload.password === 'asd') {
      console.log('login')
    } else {
      console.log('email/password salah coy')
    }
  }

  const handleOnChange = (e: any) => {
    setPayload({...payload, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if(!isOpen) setPayload({ user: "", password: ""})
  }, [isOpen])

  return (
    <>
      {true && (
        <Background isOpen={isOpen}>
          <ModalWrapper
            width={width}
            height={height}
          >
            <ModalLeftWrapper>
              <Person/>
            </ModalLeftWrapper>
            <ModalRightWrapper>
              <CloseButtonContainer>
                <CloseButton onClick={() => toggle(false)}>X</CloseButton>
              </CloseButtonContainer>
              <ModalContentWrapper>
                <ModalContent>
                  <ModalForm onSubmit={handleSubmit}>
                    {/* <InputLabel></InputLabel> */}
                    <TextInput 
                      name="user" 
                      type="text" 
                      placeholder='john@doe.com' 
                      value={payload.user}
                      onChange={(e) => handleOnChange(e)}
                    />
                    <TextInput 
                      name="password" 
                      type="password" 
                      placeholder="More than 8 characters includes Number"
                      value={payload.password}
                      onChange={(e) => handleOnChange(e)}
                    />
                    <ModalButton type="submit" >Log In</ModalButton>
                    {/* <div style={{margin: "3% 0 7% 0", fontSize: '12px'}}>Forgotten Password ?</div>
                    <HorizontalRule />
                    <ModalButton type="submit" >Create New Account</ModalButton> */}
                  </ModalForm>
                </ModalContent>
              </ModalContentWrapper>
            </ModalRightWrapper>
          </ModalWrapper>
        </Background>
      )}
    </>
  )
}

export default Modal