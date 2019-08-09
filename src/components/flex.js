import { Flex as FlexDefault, Box as BoxDefault } from 'rendition'
import styled, { css } from 'styled-components'

export const Flex = styled(FlexDefault)`
  z-index: 1;
  ${props => props.alignself ? css`align-self: ${props.alignself}` : ''}
  ${props => props.pt ? css`padding-top: ${props.pt}` : ''}
  ${props => props.pb ? css`padding-bottom: ${props.pb}` : ''}
  ${props => props.pl ? css`padding-left: ${props.pl}` : ''}
  ${props => props.pr ? css`padding-right: ${props.pr}` : ''}
  ${props => props.p ? css`padding: ${props.pr}` : ''}
`

export const Box = styled(BoxDefault)`

`
