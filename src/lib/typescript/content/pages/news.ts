import type { SupportedLanguage } from '$lib/typescript/pref/language';

type NewsItem = {
	title: string;
	date: string;
	slug: string;
};

type NewsPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;

	items: NewsItem[];
};

export const content: Record<SupportedLanguage, NewsPage> = {
	'en-gb': {
		pageTitle: 'News',

		heading1: 'Blogs and news',
		text1:
			'This page will contain a collection of blogs, news posts and personal stories written by Toon van Berkel. The posts will cover projects, events, experiences and moments that are worth sharing.',

		heading2: 'Latest posts',
		text2:
			'Below is a growing list of blogs and news posts. More articles will be added over time.',

		items: [
			{
				title: 'Remembrance Day 2026',
				date: '05-05-2026 18:35',
				slug: '05-05-2026_1835'
			}
		]
	},

	'nl-nl': {
		pageTitle: 'Nieuws',

		heading1: 'Blogs en nieuws',
		text1:
			'Op deze pagina komt een verzameling van blogs, nieuwsberichten en persoonlijke verhalen geschreven door Toon van Berkel. De berichten gaan over projecten, evenementen, ervaringen en momenten die het waard zijn om te delen.',

		heading2: 'Laatste berichten',
		text2:
			'Hieronder staat een groeiende lijst met blogs en nieuwsberichten. Later worden hier meer artikelen aan toegevoegd.',

		items: [
			{
				title: 'Dodenherdenking 2026',
				date: '05-05-2026 18:35',
				slug: '05-05-2026_1835'
			}
		]
	}
};