import React from 'react'
import { Facebook, Instagram, Twitter } from '../assets'
import * as colors from '../styles/colors'
import {
  FooterContainer,
  FooterContent,
  FooterCreditText,
  FooterTitleText,
  FooterContentContainer,
  FooterItems
} from '../styles/Footer.style'

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <FooterContent>
          <FooterItems>
            <FooterTitleText titleColor={colors.moreGrey}>KELAS</FooterTitleText>
            <FooterTitleText titleColor={colors.softGreen}>KITA</FooterTitleText>
            <FooterCreditText>
              Solution for easy and flexible class operational application. You can do all the operational activity in any devices.
            </FooterCreditText>

            <Twitter style={{ marginRight: '2%'}}/>
            <Instagram style={{ marginRight: '2%'}} />
            <Facebook/>
          </FooterItems>
        </FooterContent>
      </FooterContentContainer>
      <FooterContent>
      </FooterContent>
      <FooterTitleText titleColor={colors.moreGrey}>
        &copy; 2022 TEN
      </FooterTitleText>
    </FooterContainer>
  )
}

export default Footer