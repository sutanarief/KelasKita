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
  TitleLinkContainer
} from '../styles/Navbar.style';

type NavBarProps = {
  
};

const NavBar:React.FC<NavBarProps> = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <TitleLinkContainer>
            <TitleLink to='/'>KELASKITA</TitleLink>
          </TitleLinkContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/'>HOME</NavbarLink>
            <NavbarLink to='/'>INFO</NavbarLink>
            <NavbarLink to='/login'>REGISTER</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  )
}
export default NavBar;