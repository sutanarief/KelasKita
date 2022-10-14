import React from 'react';
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


const NavBar:React.FC = () => {
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
            <NavbarLink to='/login'>
              <ButtonLink>Log In</ButtonLink>
            </NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}
export default NavBar;