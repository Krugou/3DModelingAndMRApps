import {terser} from 'rollup-plugin-terser';
import {defineConfig} from 'vite';

export default defineConfig({
	root: 'three-dev',
	publicDir: '../3d-assets',
	build: {
		outDir: '../../webBuild4',
		emptyOutDir: true,
		rollupOptions: {
			plugins: [terser({compress: {drop_console: true}})],
		},
	},
});
