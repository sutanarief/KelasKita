import styled from "styled-components";
import * as colors from './colors'


export const HomeWrapper = styled.div`
  /* background-color: ${colors.darkGreen}; */
  padding: 40px;
  border-radius: 20px;
  height: 1200px;
`

export const Container = styled.div`
  /* background-color: white; */
  display: flex;
  flex-direction: row;

  div {
    width: 50%;
  }
`