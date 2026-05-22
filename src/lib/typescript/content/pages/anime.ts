import type { SupportedLanguage } from '$lib/typescript/pref/language';

type AnimeItem = {
	slug: string;
	title: string;
	state: 'watching' | 'finished';
	years: string;
	image: string;
	imageAlt: string;
	summary: string;
	thought: string;
};

type AnimePage = {
	pageTitle: string;
	intro: string;
	filters: {
		all: string;
		watching: string;
		finished: string;
	};
	statusLabels: Record<AnimeItem['state'], string>;
	galleryLabel: string;
	detailHeading: string;
	breadcrumbs: {
		home: string;
		anime: string;
	};
	items: AnimeItem[];
};

export const content: Record<SupportedLanguage, AnimePage> = {
	'en-gb': {
		pageTitle: 'Anime',
		intro:
			'A personal anime list with series I finished, series I am watching, and what I honestly thought of them.',
		filters: {
			all: 'All',
			watching: 'Watching',
			finished: 'Finished'
		},
		statusLabels: {
			watching: 'Watching',
			finished: 'Finished'
		},
		galleryLabel: 'Anime gallery',
		detailHeading: 'What I thought of',
		breadcrumbs: {
			home: 'Home',
			anime: 'Anime'
		},
		items: [
			{
				slug: 'naruto',
				title: 'Naruto',
				state: 'finished',
				years: '2002-2017',
				image: 'https://31nl.github.io/a/3.jpg',
				imageAlt: 'Orange ninja-inspired anime card artwork',
				summary:
					'Naruto follows Naruto Uzumaki, a loud and determined ninja who wants to become Hokage while carrying a lonely past and a massive power inside him.',
				thought:
					'Was awesome, my starter anime and will always come back to it. I have watched it about 6 times now, and wrote a few fanfictions of the anime series.'
			},
			{
				slug: 'boruto',
				title: 'Boruto',
				state: 'watching',
				years: '2017-now',
				image: 'https://31nl.github.io/a/2.jpg',
				imageAlt: 'Blue next-generation ninja-inspired anime card artwork',
				summary:
					'Boruto follows the next generation after Naruto, with Boruto Uzumaki trying to find his own path while living in the shadow of his father and a changed shinobi world.',
				thought:
					'Am watching it. People say it is bad, but that is only because people think it will be the same or a similar thing as Naruto. They are two separate things.'
			}
		]
	},

	'nl-nl': {
		pageTitle: 'Anime',
		intro:
			'Een persoonlijke animelijst met series die ik heb afgerond, series die ik nu kijk, en wat ik er eerlijk van vond.',
		filters: {
			all: 'Alles',
			watching: 'Aan het kijken',
			finished: 'Afgerond'
		},
		statusLabels: {
			watching: 'Aan het kijken',
			finished: 'Afgerond'
		},
		galleryLabel: 'Animegalerij',
		detailHeading: 'Wat ik vond van',
		breadcrumbs: {
			home: 'Home',
			anime: 'Anime'
		},
		items: [
			{
				slug: 'naruto',
				title: 'Naruto',
				state: 'finished',
				years: '2002-2017',
				image: 'https://31nl.github.io/a/3.jpg',
				imageAlt: 'Oranje ninja-geinspireerde animekaart',
				summary:
					'Naruto volgt Naruto Uzumaki, een luidruchtige en vastberaden ninja die Hokage wil worden terwijl hij een eenzaam verleden en een enorme kracht in zich draagt.',
				thought:
					'Was geweldig, mijn starter anime en ik zal er altijd naar terugkomen. Ik heb de serie inmiddels ongeveer 6 keer gekeken en heb ook een paar fanfictions over de anime geschreven.'
			},
			{
				slug: 'boruto',
				title: 'Boruto',
				state: 'watching',
				years: '2017-nu',				
				image: 'https://31nl.github.io/a/2.jpg',
				imageAlt: 'Blauwe next-generation ninja-geinspireerde animekaart',
				summary:
					'Boruto volgt de volgende generatie na Naruto, met Boruto Uzumaki die zijn eigen pad probeert te vinden terwijl hij leeft in de schaduw van zijn vader en een veranderde shinobiwereld.',
				thought:
					'Ben ik aan het kijken. Mensen zeggen dat het slecht is, maar dat komt vooral doordat mensen denken dat het hetzelfde moet zijn als Naruto of daarop moet lijken. Het zijn twee aparte dingen.'
			}
		]
	}
};
