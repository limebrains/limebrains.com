import defaultTheme from 'rendition/dist/theme'
import { injectGlobal } from 'styled-components'


const primaryLight = '#5FB3E7';
const colors = {
	primary: {
		main: '#2297DE',
		light: primaryLight,
		dark: '#1E87C7',
	},
	secondary: {
		main: '#FFC523',
		light: '#FFD45E',
		dark: '#E5B01F',
	},
	tertiary: {
		main: '#4D5057',
		light: '#7E8085',
		dark: '#2F3033',
	},
	quartenary: {
		main: '#EBEFF4',
		light: '#F0F3F7',
		dark: '#D3D6DB',
	},

	danger: {
		main: '#FF4444',
		semilight: '#FFA1A1',
		light: '#FFECEC',
		dark: '#661B1B',
	},
	warning: {
		main: '#FCA321',
		semilight: '#FDD190',
		light: '#FEF5E9',
		dark: '#64410D',
	},
	success: {
		main: '#4DB313',
		semilight: '#A6D989',
		light: '#EDF7E7',
		dark: '#1E4707',
	},
	info: {
		main: '#2297DE',
		semilight: '#90CBEE',
		light: '#E9F4FB',
		dark: '#0D3C58',
	},

	text: {
		main: '#3c3e42',
		light: '#8f9297',
		dark: '#1c1d1e',
	},

	statusIdle: {
		main: '#89c683',
	},
	statusConfiguring: {
		main: '#ffb25e',
	},
	statusUpdating: {
		main: '#75C5F5',
	},
	statusPostProvisioning: {
		main: '#aa96d5',
	},
	statusOffline: {
		main: '#fd7c7c',
	},
	statusInactive: {
		main: '#d3d6db',
	},

	gray: {
		main: '#c6c8c9',
		light: '#f4f4f4',
		dark: '#9f9f9f',
	},
};

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
