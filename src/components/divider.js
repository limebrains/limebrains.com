import styled, { css } from 'styled-components'
import { Divider as DefaultDivider } from 'rendition'
import { gradients } from './theme/colors'

export const Divider = styled(DefaultDivider)`
  background: ${gradients.default};

  ${props =>
    props.inverse &&
    css`
      background: ${gradients.inverse};
    `}
`
