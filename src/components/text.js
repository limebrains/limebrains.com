import { Txt } from 'rendition';
import React from 'react';


export const Text = ({children, ...rest}) => (
  <Txt.p {...rest}>
    {children}
  </Txt.p>
)
