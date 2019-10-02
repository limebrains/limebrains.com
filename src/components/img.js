import { Img as StyleImg } from 'rendition'
import styled, { css } from 'styled-components'
import React from 'react'

const StyledImg = styled(StyleImg)`
  object-fit: contain;

  ${props =>
    props.responsive &&
    css`
      max-width: 100%;
      max-height: 100%;
    `}

  ${props =>
    props.center &&
    css`
      margin: 0 auto;
    `}
`

export const Img = ({ ...rest }) => <StyledImg {...rest} />
