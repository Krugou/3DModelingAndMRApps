import {defineConfig} from 'vite';
import {terser} from 'rollup-plugin-terser';

export default defineConfig({
	root: 'three-dev',
	publicDir: '../3d-assets',
	build: {
		outDir: '../../webBuild',
		emptyOutDir: true,
		rollupOptions: {
			plugins: [terser({compress: {drop_console: true}})],
		},
	},
});
