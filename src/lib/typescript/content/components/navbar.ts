import type { SupportedLanguage } from '$lib/typescript/pref/language';

type Navbar = {
	imgAlt: 	string;
	link1: 		string;
	link2: 		string;
	link3: 		string;
	link4: 		string;
};

export const content: Record<SupportedLanguage, Navbar> = {
	'en-gb': {
		imgAlt: 	'Menu icon',
		link1: 		'Projects',
		link2: 		'Gallery',
		link3: 		'About me',
		link4: 		'Contact'
	},
	'nl-nl': {
		imgAlt: 	'Menu icoon',
		link1: 		'Projecten',
		link2: 		'Galerij',
		link3: 		'Over mij',
		link4: 		'Contact'
	}
};