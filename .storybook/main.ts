import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
	stories: [
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-vitest"
	],
	framework: {
		name: "@storybook/nextjs-vite",
		options: {}
	},
	viteFinal: async (config) => {
		process.env.UV_THREADPOOL_SIZE = "128";

		const manualChunks = {
			mui: [
				"@mui/material",
				"@mui/icons-material"
			],
			vendors: [
				"react",
				"react-dom",
				"@storybook/react",
				"@storybook/addon-docs",
				"@storybook/addon-a11y",
				'@storybook/addon-themes',
			]
		};

		config.build = {
			...config.build,
			chunkSizeWarningLimit: 2000,
			rollupOptions: {
				...config.build?.rollupOptions,
				output: {
					...config.build?.rollupOptions?.output,
					manualChunks
				},
				onwarn(warning, warn) {
					if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
					warn(warning);
				},
				maxParallelFileOps: 50
			}
		};

		config.optimizeDeps = {
			...config.optimizeDeps,
			include: [
				"@mui/material/Button",
				"@mui/icons-material/Close"
			]
		};

		return config;
	}
};

export default config;
