import React from 'react';
import styled from 'styled-components'
import { Card as DefaultCard } from 'rendition'

const CardWrapper = styled.div`
  ${DefaultCard} {

  }
  img {
    object-fit: scale-down;
    margin: 0 auto;
  }
`

export const Card = ({children, ...rest}) => (
  <CardWrapper>
    <DefaultCard {...rest}>{children}</DefaultCard>
  </CardWrapper>
)
