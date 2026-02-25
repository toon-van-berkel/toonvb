import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			// In dev: no base path
			// In GitHub Actions build: BASE_PATH becomes "/your-repo-name"
			base: dev ? '' : (process.env.BASE_PATH ?? '')
		}
	}
};

export default config;