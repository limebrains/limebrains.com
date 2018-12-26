import defaultTheme from 'rendition/dist/theme'
import { injectGlobal } from 'styled-components'
import { colors } from './colors';

export const theme = {
  ...defaultTheme,
  colors,
};


injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`
