import type { SupportedLanguage } from '$lib/typescript/pref/language';

type MusicPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;
};

export const content: Record<SupportedLanguage, MusicPage> = {
	'en-gb': {
		pageTitle: 'Music',

		heading1: 'Music and inspiration',
		text1:
			'This page will soon contain music that inspires Toon van Berkel, including favorite artists, songs and personal stories connected to music.',

		heading2: 'More music content coming soon',
		text2:
			'The music page is currently being prepared. More artists, playlists and stories will be added later.'
	},

	'nl-nl': {
		pageTitle: 'Muziek',

		heading1: 'Muziek en inspiratie',
		text1:
			'Deze pagina bevat binnenkort muziek die Toon van Berkel inspireert, waaronder favoriete artiesten, nummers en persoonlijke verhalen rondom muziek.',

		heading2: 'Binnenkort meer muziekcontent',
		text2:
			'De muziekpagina wordt op dit moment voorbereid. Later worden hier meer artiesten, playlists en verhalen aan toegevoegd.'
	}
};