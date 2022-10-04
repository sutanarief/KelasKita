import styled from 'styled-components'

export const Row = styled.div`
  &:after {
    content: "";
    /* display: table;
    clear: both; */
  }
`

export const Col = styled.div`
  /* float: left; */
  width: 50%;
  padding: 10px;
`