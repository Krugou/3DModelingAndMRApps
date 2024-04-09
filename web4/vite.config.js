import {terser} from 'rollup-plugin-terser';
import {defineConfig} from 'vite';

export default ({command}) => ({
	root: 'three-dev',
	publicDir: '../3d-assets',
	build: {
		outDir: '../../webBuild4',
		emptyOutDir: true,
		rollupOptions: {
			plugins: [terser({compress: {drop_console: true}})],
		},
	},
	base: command === 'serve' ? '/' : '/3DModelingAndMRApps/webBuild4/',
});
