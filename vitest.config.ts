import tsPathsResolver from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [tsPathsResolver()],
	test: {
		globals: true,
	},
});
