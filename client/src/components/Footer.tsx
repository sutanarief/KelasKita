import React from 'react'
import {
  FooterContainer,
  FooterContent
} from '../styles/Footer.style'

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <FooterContent>
        &copy; 2022 TEN
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer