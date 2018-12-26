import styled, { css } from 'styled-components';
import { Button as DefaultButton } from "rendition";
import { colors } from './theme/colors';

export const Button = styled(DefaultButton)`
   ${props => props.white && css`
     color: ${colors.white};
     &:hover {
      color: ${colors.primary.main};
      background: ${colors.white};
     }
  `}
   ${props => props.text && css`
     border: none;
   `}
`
