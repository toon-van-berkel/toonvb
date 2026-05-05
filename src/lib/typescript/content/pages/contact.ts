import type { SupportedLanguage } from '$lib/typescript/pref/language';

type ContactPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;

	email: string;
};

export const content: Record<SupportedLanguage, ContactPage> = {
	'en-gb': {
		pageTitle: 'Contact',

		heading1: 'Get in touch',
		text1:
			'Do you have a question, idea or project you would like to discuss? Feel free to send an email.',

		heading2: 'Email',
		text2: 'For now, contact is available through email only.',

		email: 'toonvanberkel203@proton.me'
	},

	'nl-nl': {
		pageTitle: 'Contact',

		heading1: 'Neem contact op',
		text1:
			'Heb je een vraag, idee of project dat je wilt bespreken? Stuur gerust een mail.',

		heading2: 'E-mail',
		text2: 'Voor nu is contact alleen mogelijk via e-mail.',

		email: 'toonvanberkel203@proton.me'
	}
};