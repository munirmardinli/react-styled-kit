import { createTheme, Theme } from '@mui/material/styles';
import { darkScrollbar } from '@mui/material';
import { grey, red, green, amber, blue } from '@mui/material/colors';

export const getDesignTheme = (mode: 'light' | 'dark') =>
	createTheme({
		typography: {
			fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
			button: {
				textTransform: 'none',
			},
		},
		shape: {
			borderRadius: 8,
		},
		palette: {
			mode,
			primary: {
				main: '#00854C',
				contrastText: '#f2f5f7',
				light: '#00854C',
				dark: '#00854C',
			},
			secondary: {
				main: '#b31e3b',
				contrastText: '#f2f4f8',
			},
			background: {
				default: mode === 'light' ? '#f2f5f7' : '#000',
				paper: mode === 'light' ? '#d6dfea' : '#121212',
			},
			text: {
				primary: mode === 'light' ? '#000' : '#fff',
				secondary: mode === 'light' ? '#000' : '#fff',
				disabled: mode === 'light' ? '#333333' : '#fff',
			},
			divider: grey[500],
			action: {
				active: '#00854C',
				hover: mode === 'light' ? '#b31e3b' : 'rgba(202,202,202,0.4)',
				focus: '#00854C',
			},
			error: {
				main: red[500],
			},
			success: {
				main: green[500],
			},
			warning: {
				main: amber[500],
			},
			info: {
				main: blue[500],
			},
			common: {
				white: grey[50],
				black: mode === 'light' ? '#000' : '#fff',
			},
		},
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						'&[data-testid="CalenderIcon"]': {
							fill: red[500],
						},
					},
				},
			},
			MuiCssBaseline: {
				styleOverrides: (themeParam: Theme) => ({
					body: themeParam.palette.mode === 'dark' ? darkScrollbar() : undefined,
					html: themeParam.palette.mode === 'dark' ? darkScrollbar() : undefined,
					'#root': themeParam.palette.mode === 'dark' ? darkScrollbar() : undefined,
				}),
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
	});
