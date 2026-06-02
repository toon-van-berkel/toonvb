import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const hasCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const languages = ['en-gb', 'nl-nl'];
const pagePaths = [
	'',
	'/Projects',
	'/Aboutme',
	'/Contact',
	'/Gallery',
	'/Vacations',
	'/Vacations/Mallorca-2026',
	'/Travel',
	'/Photography',
	'/Music',
	'/Games',
	'/Anime',
	'/Anime/naruto',
	'/Anime/boruto',
	'/News',
	'/News/05-05-2026_1835'
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		prerender: {
			entries: ['/', '/sitemap.xml', ...languages.flatMap((lang) => pagePaths.map((path) => `/${lang}${path}`))]
		},
		paths: {
			base: dev ? '' : hasCustomDomain ? '' : (process.env.BASE_PATH ?? '')
		}
	}
};

export default config;
