import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from './colors'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
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
  justify-content: flex-end;
  padding-right: 50px;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
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
  font-size: large;
  font-weight: 500;
  align-self: center;
  text-decoration: none;
  margin-right: 60px;
`

export const ButtonLink = styled.button`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  font-weight: 800;
  font-size: large;
  border-radius: 30px;
  padding: 10px 30px 10px 30px;
`

export const TitleLink = styled(NavbarLink)`
  font-size: xx-large;
  font-weight: 800;
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
`