import { sveltekit } from '@sveltejs/kit/vite';
import { optimizeDeps } from 'vite';


const pkg = require('./package.json');
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['just-throttle', 'dayjs']
	},

	ssr: {
		noExternal: Object.keys(pkg.dependencies || {})
	}
};

export default config;
