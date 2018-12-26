import styled, { css } from 'styled-components'

const sizes = {
  lg: '80vh',
  md: '40vh',
  sm: '20vh',
  xs: '10vh',
}

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  min-height: ${sizes.md};
  flex: 1;
  
  ${props => props.background && css`
    background: ${props.background};
  `}
  ${props => props.size && css`
    min-height: ${sizes[props.size]};
  `}
`
