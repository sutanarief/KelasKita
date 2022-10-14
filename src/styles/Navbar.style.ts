import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from './colors'

interface PropsTextColor {
  color: string
}

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: rgba(237, 245, 225, 0.95);
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
  cursor: pointer;

  &:hover {
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.darkBlue}
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