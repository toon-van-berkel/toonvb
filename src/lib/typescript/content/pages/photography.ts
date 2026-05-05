import type { SupportedLanguage } from '$lib/typescript/pref/language';

type PhotographyPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;
};

export const content: Record<SupportedLanguage, PhotographyPage> = {
	'en-gb': {
		pageTitle: 'Photography',

		heading1: 'Photography and visual storytelling',
		text1:
			'This page will soon contain photography work by Toon van Berkel, including creative photos, travel moments and visual experiments.',

		heading2: 'More coming soon',
		text2:
			'The photography page is currently being prepared. More images and stories will be added later.'
	},

	'nl-nl': {
		pageTitle: 'Fotografie',

		heading1: 'Fotografie en visuele verhalen',
		text1:
			'Deze pagina bevat binnenkort fotografiewerk van Toon van Berkel, waaronder creatieve foto’s, reismomenten en visuele experimenten.',

		heading2: 'Binnenkort meer',
		text2:
			'De fotografiepagina wordt op dit moment voorbereid. Later worden hier meer beelden en verhalen aan toegevoegd.'
	}
};