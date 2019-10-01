import React from 'react';
import styled from 'styled-components'
import { Card as DefaultCard } from 'rendition'

const CardWrapper = styled.div`
  display: grid;
  grid-auto-rows: 320px;
  
  ${DefaultCard} {

  }
  img {
    object-fit: contain;
    height: 200px;
    width: 100%;
  }
`

export const Card = ({ children, ...rest }) => (
  <CardWrapper>
    <DefaultCard {...rest}>{children}</DefaultCard>
  </CardWrapper>
)
