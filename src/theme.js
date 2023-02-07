import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
	colors: {
		gold: {
			
	      100: '#ffe7ad',
	      200: '#ffd77d',
	      300: '#ffc74b',
	      400: '#ffb71a',
	      500: '#e69e00',
	      600: '#b37b00',
	      700: '#815800',
	      800: '#4e3500',
	      900: '#1e1100',
  
		},

		grey: {

	      100: '#d9d9d9',
	      200: '#bfbfbf',
	      300: '#a6a6a6',
	      400: '#8c8c8c',
	      500: '#737373',
	      600: '#595959',
	      700: '#404040',
	      800: '#262626',
	      900: '#120b0d',
		},
		black: "#16161D",
	},
	fonts,
});

export default theme;
