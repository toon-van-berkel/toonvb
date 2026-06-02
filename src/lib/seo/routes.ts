import type { SupportedLanguage } from '$lib/typescript/pref/language';

export type PublicRoute = {
	path: string;
	lastmod: string;
	priority: string;
	changefreq: string;
};

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
] as const;

const languages: SupportedLanguage[] = ['en-gb', 'nl-nl'];

export const publicRoutes: PublicRoute[] = languages.flatMap((lang) =>
	pagePaths.map((path) => ({
		path: `/${lang}${path}`,
		lastmod: '2026-06-02',
		priority: path === '' ? '1.0' : '0.7',
		changefreq: path === '' || path === '/Projects' ? 'monthly' : 'yearly'
	}))
);
