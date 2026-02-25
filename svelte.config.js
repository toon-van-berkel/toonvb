import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const hasCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: dev ? '' : hasCustomDomain ? '' : (process.env.BASE_PATH ?? '')
		}
	}
};

export default config;