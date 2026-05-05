import type { SupportedLanguage } from '$lib/typescript/pref/language';

type GamesPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;
};

export const content: Record<SupportedLanguage, GamesPage> = {
	'en-gb': {
		pageTitle: 'Games',

		heading1: 'Games and interactive experiences',
		text1:
			'This page will soon contain games Toon van Berkel enjoys, has played or uses as inspiration for creative and technical projects.',

		heading2: 'More gaming content coming soon',
		text2:
			'The games page is currently being prepared. More games, memories and project connections will be added later.'
	},

	'nl-nl': {
		pageTitle: 'Games',

		heading1: 'Games en interactieve ervaringen',
		text1:
			'Deze pagina bevat binnenkort games die Toon van Berkel leuk vindt, heeft gespeeld of gebruikt als inspiratie voor creatieve en technische projecten.',

		heading2: 'Binnenkort meer gamecontent',
		text2:
			'De gamespagina wordt op dit moment voorbereid. Later worden hier meer games, herinneringen en projectkoppelingen aan toegevoegd.'
	}
};