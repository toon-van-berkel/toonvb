import type { SupportedLanguage } from '$lib/typescript/pref/language';

type Navbar = {
	imgAlt: 	string;
	link1: 		string;
	lv:			string;
	link2: 		string;
	link3: 		string;
	link4: 		string;
};

export const content: Record<SupportedLanguage, Navbar> = {
	'en-gb': {
		imgAlt: 	'Menu icon',
		link1: 		'Web Projects',
		lv:			'Vacations',
		link2: 		'Gallery',
		link3: 		'About Toon',
		link4: 		'Contact Toon'
	},
	'nl-nl': {
		imgAlt: 	'Menu icoon',
		link1: 		'Webprojecten',
		lv:			'Vakanties',
		link2: 		'Galerij',
		link3: 		'Over Toon',
		link4: 		'Contact Toon'
	}
};
