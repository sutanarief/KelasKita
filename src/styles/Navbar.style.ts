import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from './colors'

interface PropsTextColor {
  color: string
}

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  padding: 1%;
  flex-direction: column;
  position: fixed;
  /* background-color: rgba(5, 56, 107, 0.95); */
  background-color: rgba(237, 245, 225, .95);
  /* background-color: red; */
  z-index: 1;
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  padding-right: 1%;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const TitleLinkContainer = styled(NavbarLinkContainer)`
  margin-right: 8rem;
`

export const NavbarLink = styled(Link)`
  color: #05386B;
  font-size: small;
  font-weight: 500;
  align-self: center;
  text-decoration: none;
  margin-right: 60px;
`

export const ButtonLink = styled.button`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  font-weight: 800;
  font-size: small;
  border-radius: 1em;
  padding: 10px 30px 10px 30px;
  cursor: pointer;
  border: none;
  outline: none;


  /* background-color: ${colors.darkBlue};
  color: ${colors.white};
  margin-bottom: 10%;
  padding: 5%;
  font-size: small;
  border-radius: 1em;
  border: none;
  outline: none;
  cursor: pointer; */

  &:hover {
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.darkBlue};
    border: .18em solid ${colors.darkBlue}
  }
`

export const TitleLink = styled(NavbarLink)`
  font-size: xx-large;
  font-weight: 800;
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
`

export const TitleText = styled.span<PropsTextColor>`
  color: ${(props) => props.color}
`