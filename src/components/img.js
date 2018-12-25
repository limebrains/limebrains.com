import { Img as StyleImg } from 'rendition'
import styled from 'styled-components'
import React from 'react';


const StyledImg = styled(StyleImg)`
  object-fit: contain;
`


export const Img = ({ ...rest }) => (
  <StyledImg {...rest} />
);
