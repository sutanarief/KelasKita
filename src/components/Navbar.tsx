import React, { useState } from 'react';
import { 
  LeftContainer, 
  NavbarContainer, 
  NavbarExtendedContainer, 
  NavbarInnerContainer, 
  NavbarLinkContainer, 
  RightContainer, 
  NavbarLink, 
  TitleLink,
  TitleLinkContainer,
  ButtonLink,
  TitleText
} from '../styles/Navbar.style';
import * as colors from '../styles/colors'
import Modal from './Modal';


const NavBar:React.FC = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <TitleLinkContainer style={{ marginRight: '150px' }}>
            <TitleLink to='/'>
              <TitleText color={colors.darkBlue}>KELAS</TitleText>
              <TitleText color={colors.darkGreen}>KITA</TitleText>
            </TitleLink>
          </TitleLinkContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/'>HOME</NavbarLink>
            <NavbarLink to='/'>TEACHER</NavbarLink>
            <NavbarLink to='/'>INFO</NavbarLink>
            <NavbarLink to='/'>TUTORIAL</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
              <ButtonLink onClick={() => setIsOpen(!isOpen)}>Log In</ButtonLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
      {isOpen && (
        <Modal
          width={'80%'}
          height={'80%'}
        />
      )}
    </NavbarContainer>
  );
}
export default NavBar;