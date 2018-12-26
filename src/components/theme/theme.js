import defaultTheme from 'rendition/dist/theme'
import { injectGlobal } from 'styled-components'
import { colors } from './colors';

export const theme = {
  ...defaultTheme,
  colors,
};


injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
  }
`
