import type { SupportedLanguage } from '$lib/typescript/pref/language';

type TravelPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;
};

export const content: Record<SupportedLanguage, TravelPage> = {
	'en-gb': {
		pageTitle: 'Travel',

		heading1: 'Travel experiences',
		text1:
			'This page will soon contain travel stories, photos and memories from places Toon van Berkel has visited.',

		heading2: 'Destinations coming soon',
		text2:
			'The travel page is currently being prepared. More destinations, visuals and experiences will be added later.'
	},

	'nl-nl': {
		pageTitle: 'Reizen',

		heading1: 'Reiservaringen',
		text1:
			'Deze pagina bevat binnenkort reisverhalen, foto’s en herinneringen van plekken die Toon van Berkel heeft bezocht.',

		heading2: 'Bestemmingen volgen binnenkort',
		text2:
			'De reispagina wordt op dit moment voorbereid. Later worden hier meer bestemmingen, beelden en ervaringen aan toegevoegd.'
	}
};