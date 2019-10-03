import defaultTheme from 'rendition/dist/theme'
import { injectGlobal } from 'styled-components'
import { colors } from './colors'

export const theme = {
  ...defaultTheme,
  font: 'Montserrat, Arial, sans-serif',
  colors,
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,500,900&display=swap');

  body {
    margin: 0;
    padding: 0;
  }
`;
