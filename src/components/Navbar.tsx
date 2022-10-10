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
  ButtonLink
} from '../styles/Navbar.style';
import Icon from './Icon'


const NavBar:React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <TitleLinkContainer style={{ marginRight: '150px' }}>
            <TitleLink to='/'>KELASKITA</TitleLink>
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