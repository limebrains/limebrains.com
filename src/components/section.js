import styled, { css } from 'styled-components'

const sizes = {
  lg: '80vh',
  md: '40vh',
  sm: '20vh',
  xs: '10vh',
}

export const Section = styled.div`
  width: 100%;
  min-height: 80vh;
  ${props => props.background && css`
    background: ${props.background};
  `}
  ${props => props.size && css`
    min-height: ${sizes[props.size]};
  `}
`
