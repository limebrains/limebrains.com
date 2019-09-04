import React from 'react';
import styled from 'styled-components'
import { Card as DefaultCard } from 'rendition'

const CardWrapper = styled.div`
  display: grid;
  grid-auto-rows: 320px;
  
  ${DefaultCard} {

  }
  img {
    object-fit: scale-down;
    height: 200px;
    margin: 0 auto;
  }
`

export const Card = ({children, ...rest}) => (
  <CardWrapper>
    <DefaultCard {...rest}>{children}</DefaultCard>
  </CardWrapper>
)
