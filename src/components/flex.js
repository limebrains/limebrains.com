import { Flex as FlexDefault } from 'rendition'
import styled from 'styled-components'

export const Flex = styled(FlexDefault)`
  ${props => props.alignSelf ? `align-self: ${props.alignSelf}` : ''}
`
