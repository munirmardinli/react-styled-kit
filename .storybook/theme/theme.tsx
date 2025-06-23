import { ThemeProvider, CssBaseline } from '@mui/material';
import type { Decorator } from '@storybook/react';
import { getDesignTheme } from './design';

export const withMuiTheme: Decorator = (Story) => (
	<ThemeProvider theme={getDesignTheme('dark')}>
		<CssBaseline />
		<Story />
	</ThemeProvider>
);
