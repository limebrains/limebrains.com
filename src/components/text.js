import styled, { css } from 'styled-components'
import { Txt } from 'rendition';
import React from 'react';
import { colors } from './theme/colors';

const TextWrapper = styled.div`
  ${props => props.inverse && css`
    color: ${colors.white};
   `}
`


export const Text = ({children, inverse, ...rest}) => (
  <TextWrapper inverse={inverse}>
    <Txt.p {...rest}>
      {children}
    </Txt.p>
  </TextWrapper>
)
