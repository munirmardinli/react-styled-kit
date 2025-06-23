import type { Preview } from "@storybook/nextjs-vite";
import { withMuiTheme } from "./theme/theme";
import { themes } from "storybook/internal/theming";

const preview: Preview = {
	decorators: [withMuiTheme],
	globalTypes: {},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ['Introduction', 'Components', '*'],
			},
		},
		docs: {
			theme: themes.dark
		},
	},
};

export default preview;
