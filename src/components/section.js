import styled, { css } from 'styled-components'

export const Section = styled.div`
  width: 100%;
  height: 60vh;
  ${props => props.background && css`
    background: ${props.background};
  `}
`
