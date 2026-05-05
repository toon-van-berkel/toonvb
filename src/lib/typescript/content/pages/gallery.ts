import type { SupportedLanguage } from '$lib/typescript/pref/language';

type GalleryPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;
};

export const content: Record<SupportedLanguage, GalleryPage> = {
	'en-gb': {
		pageTitle: 'Gallery',

		heading1: 'Visual work and moments',
		text1:
			'This page will soon contain a collection of images, visuals and creative work by Toon van Berkel.',

		heading2: 'More images coming soon',
		text2:
			'The gallery is currently being prepared. Photos, designs and other visuals will be added later.'
	},

	'nl-nl': {
		pageTitle: 'Galerij',

		heading1: 'Visueel werk en momenten',
		text1:
			'Deze pagina bevat binnenkort een verzameling van afbeeldingen, visuals en creatief werk van Toon van Berkel.',

		heading2: 'Binnenkort meer beelden',
		text2:
			'De galerij wordt op dit moment voorbereid. Foto’s, ontwerpen en andere visuals worden later toegevoegd.'
	}
};